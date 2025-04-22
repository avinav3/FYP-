import React, { useState } from "react";
import Wrapper from "../wrappers/UserInfoCard";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const UserInfoCard = () => {
  const { user, naam, photo } = useAppContext();
  const navigate = useNavigate();

  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getFirstDayOfMonth(year, month);

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  return (
    <Wrapper className="user-card">
      <div className="info-card glassmorphism">
        <div className="userimage">
          <img className="profile-pic-xL" src={photo} alt="" />
        </div>
        <div className="username">{naam}</div>
        <div className="userskill" style={{ textTransform: "capitalize" }}>
          {user.usertype}
        </div>
        {user.usertype === "individual" ? (
          <>
            <div
              className="edit-profile"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/user/edit")}
            >
              Edit Profile
            </div>
            <div
              className="edit-profile"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/user/card")}
            >
              My Card
            </div>
          </>
        ) : user.usertype === "admin" ? (
          <div
            className="edit-profile"
            onClick={() => navigate("/user/payments")}
            style={{ cursor: "pointer" }}
          >
            View Payments
          </div>
        ) : (
          <div
            className="edit-profile"
            onClick={() => navigate("/user/add/job")}
            style={{ cursor: "pointer" }}
          >
            Add job
          </div>
        )}
      </div>

      <div className="p-2 rounded-xl shadow-md bg-white/80 backdrop-blur-md mt-4 w-[70%] ml-0 text-xs">
        <div className="flex justify-between items-center mb-2">
          <button onClick={prevMonth}>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <h2 className="text-sm font-semibold">
            {currentDate.toLocaleString("default", { month: "long" })} {year}
          </h2>
          <button onClick={nextMonth}>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-medium text-gray-600">
          {days.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-7 gap-1 mt-1 text-center text-[10px]"
        >
          {calendarDays.map((day, idx) => (
            <motion.div
              key={idx}
              layout
              className={`h-6 flex items-center justify-center rounded-lg transition-all duration-300
                ${
                  day === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear()
                    ? "bg-blue-500 text-white font-semibold shadow-md"
                    : "hover:bg-blue-100 text-gray-700"
                }`}
            >
              {day || ""}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default UserInfoCard;
