import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Wrapper from "../wrappers/Navbar";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import Notifylst from "./Notifylst";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const initialState = {
    dropdown: false,
    notify: false,
  };

  const [drop, setDrop] = useState(initialState);
  const [animateProfile, setAnimateProfile] = useState(false);
  const { user, logoutUser, photo } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".nav-content") &&
        !event.target.closest(".notifylst")
      ) {
        setDrop(initialState);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const gotoprofile = (e) => {
    e.stopPropagation();
    navigate(`/chats`);
    setDrop(initialState);
  };

  const profileoption = () => {
    setDrop({ notify: false, dropdown: !drop.dropdown });
    setAnimateProfile(true);
    setTimeout(() => setAnimateProfile(false), 500);
  };

  const notifyoption = (e) => {
    e.stopPropagation();
    setDrop({ notify: !drop.notify, dropdown: false });
  };

  const handleMenuOption = (action) => {
    if (action === "password") {
      navigate("/user/changepassword");
    } else if (action === "logout") {
      logoutUser();
    }
    setDrop(initialState);
  };

  return (
    <Wrapper>
      <nav className="navbar">
        <Logo />

        <NavLinks />

        <div
          className={`nav-content glassmorphism ${
            animateProfile ? "animate-pulse" : ""
          }`}
          onClick={profileoption}
        >
          <img
            className="profile-pic-sm"
            src={photo}
            alt={`${user.username}'s profile`}
          />

          <div className="dropdown-menus">
            <h5>{user.username}</h5>

            {drop.dropdown && (
              <ul className="dropdown-options glassmorphism">
                <li onClick={(e) => gotoprofile(e)}>
                  <span>
                    <BsFillChatDotsFill />
                  </span>
                  <span>My Chats</span>
                </li>

                <li onClick={() => handleMenuOption("password")}>
                  <span>
                    <FaKey />
                  </span>
                  <span>Change Password</span>
                </li>

                <li onClick={() => handleMenuOption("logout")}>
                  <span>
                    <IoLogOut />
                  </span>
                  <span>Logout</span>
                </li>
              </ul>
            )}
          </div>

          <IoMdArrowDropdown
            className={drop.dropdown ? "icon active" : "icon"}
          />
        </div>
      </nav>

      {drop.notify && <Notifylst />}
    </Wrapper>
  );
};

export default Navbar;
