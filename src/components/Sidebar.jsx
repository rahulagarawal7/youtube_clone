import React from "react";
import {
  Home,
  PlaySquare,
  Clock,
  Library,
  Film,
  ThumbsUp,
  ListVideo,
  TrendingUp,
  Music,
  Gamepad2,
  Newspaper,
  Clapperboard,
  Menu,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/slices/sidebarSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mainMenu = [
    { icon: <Home className="w-6 h-6" />, label: "Home" },
    { icon: <Film className="w-6 h-6" />, label: "Shorts" },
    { icon: <PlaySquare className="w-6 h-6" />, label: "Subscriptions" },
    { icon: <Library className="w-6 h-6" />, label: "Library" },
    { icon: <Clock className="w-6 h-6" />, label: "History" },
    { icon: <ListVideo className="w-6 h-6" />, label: "Your Videos" },
    { icon: <ThumbsUp className="w-6 h-6" />, label: "Liked Videos" },
  ];

  const exploreMenu = [
    { icon: <TrendingUp className="w-6 h-6" />, label: "Trending" },
    { icon: <Music className="w-6 h-6" />, label: "Music" },
    { icon: <Gamepad2 className="w-6 h-6" />, label: "Gaming" },
    { icon: <Newspaper className="w-6 h-6" />, label: "News" },
    { icon: <Clapperboard className="w-6 h-6" />, label: "Movies" },
  ];

  if (!isOpen) return null;

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white shadow-md w-64 transform transition-transform duration-300 z-50 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <nav className="p-3 space-y-6">
        {/* Logo + Toggle */}
        <div className="flex items-center gap-3 flex-shrink-0 mb-4">
          <div onClick={() => dispatch(toggleSidebar())}>
            <Menu className="w-6 h-6 cursor-pointer " />
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className="h-6 cursor-pointer ml-4"
          />
        </div>

        {/* Main Menu */}
        <div className="space-y-2">
          {mainMenu.map((item, idx) => (
            <div
              onClick={() => {
                if (item.label === "Home") {
                  navigate("/");
                }
              }}
              key={idx}
              className="flex items-center gap-5 w-full px-3 py-3 rounded-lg hover:bg-gray-100 text-lg font-medium cursor-pointer text-black"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <hr className="border-gray-500" />

        {/* Explore Menu */}
        <div className="space-y-2">
          <h2 className="px-3 text-lg font-semibold text-gray-600">Explore</h2>
          {exploreMenu.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5 w-full px-3 py-3 rounded-lg hover:bg-gray-100 text-lg font-medium cursor-pointer "
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
