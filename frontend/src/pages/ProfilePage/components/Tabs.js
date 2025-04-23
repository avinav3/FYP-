import React from "react";
import Wrapper from "../wrappers/Tabs";
import { useAppContext } from "../../../context/appContext";

const Tabs = ({ activeindex, setTab }) => {
  const { user } = useAppContext();

  const userlst = [
    {
      id: 0,
      text: "Posts",
      icon: "📋",
    },
    {
      id: 1,
      text: "About",
      icon: "👤",
    },
    {
      id: 2,
      text: "Saved Posts",
      icon: "🔖",
    },
    {
      id: 3,
      text: "Saved Jobs",
      icon: "💼",
    },
    {
      id: 4,
      text: "Job History",
      icon: "📝",
    },
  ];

  const userlst2 = [
    {
      id: 0,
      text: "Posts",
      icon: "📋",
    },
    {
      id: 2,
      text: "Saved Posts",
      icon: "🔖",
    },
    {
      id: 3,
      text: "Saved Jobs",
      icon: "💼",
    },
  ];

  let tablst = user.usertype === "company" ? userlst2 : userlst;

  return (
    <Wrapper>
      <div className="tabs-container">
        {tablst.map((item) => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`tab-button ${activeindex === item.id ? "active" : ""}`}
            aria-selected={activeindex === item.id}
            role="tab"
          >
            <span className="tab-icon">{item.icon}</span>
            <span className="tab-text">{item.text}</span>
            {activeindex === item.id && <span className="active-indicator" />}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

export default Tabs;
