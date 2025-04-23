import { FaBriefcase } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { BsCollectionPlayFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    text: "Jobs",
    path: "/user/work",
    icon: <FaBriefcase />,
  },
  {
    id: 2,
    text: "Profile",
    path: "/user/message",
    icon: <IoPersonCircleSharp />,
  },
  {
    id: 3,
    text: "Explore",
    path: "/user/explore",
    icon: <BiWorld />,
  },
  {
    id: 4,
    text: "Overview",
    path: "/user/feeds",
    icon: <BsCollectionPlayFill />,
  },
];

export default links;
