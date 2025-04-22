import React, { useState, useRef, useEffect } from "react";
import Wrapper from "../wrappers/Todo";
import { MdDeleteOutline } from "react-icons/md";
import { useAppContext } from "../../../context/appContext";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Todo = () => {
  const list = ["apply for job", "follow companies", "search for intern"];
  const [note, setNote] = useState(list);
  const [text, setText] = useState("");
  const { token } = useAppContext();
  const load = useRef(true);

  const fetch = async () => {
    await axios
      .get(`/api/v1/todo/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setNote(res.data.todo);
        setText("");
      });
  };

  useEffect(() => {
    if (load.current === true) {
      fetch();
    }
    return () => (load.current = false);
  }, []);

  const handlechange = (e) => {
    setText(e.target.value);
  };

  const onAdd = async () => {
    if (text) {
      await axios
        .post(
          `/api/v1/todo/add`,
          {
            text: text,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setNote([...note, res.data.todo]);
          setText("");
        });
    }
  };

  const ondelete = async (value) => {
    await axios
      .delete(`/api/v1/todo/delete/${value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const filtered = note.filter((item) => item._id !== value);
        setNote(filtered);
      });
  };

  return (
    <Wrapper className="glassmorphism todo-box">
      <div className="todo">
        <h4>To do</h4>
        <h4 onClick={onAdd} className="add">
          +
        </h4>
      </div>

      <motion.input
        type="text"
        placeholder="Enter your to do notes"
        onChange={handlechange}
        value={text}
        whileFocus={{ scale: 1.02, borderColor: "#6C63FF" }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      <AnimatePresence>
        {note?.map((item, index) => (
          <motion.div
            key={item._id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex justify-between items-center px-4 py-2 mb-2 rounded-xl bg-purple-100/40 text-sm shadow-sm border border-purple-200"
          >
            <span className="capitalize text-gray-800 font-medium">
              {item.text || item}
            </span>
            <MdDeleteOutline
              onClick={() => ondelete(item._id)}
              className="text-red-500 cursor-pointer text-xl hover:scale-110 transition-transform duration-200"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Todo;
