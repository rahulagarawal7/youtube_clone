import React, { useEffect, useState } from "react";
import { Menu, Search, Mic, Video, Bell, User, ArrowLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../store/slices/sidebarSlice";
import LogoutModal from "./LogoutModal";
import { useNavigate } from "react-router-dom";
import { openLoginModal } from "../store/slices/loginModalSlice";

const Header = ({}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, userInfo } = useSelector(
    (store) => store?.auth?.loggedIn
  );

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(openLoginModal());
  };

  const handleLogout = () => {
    dispatch(closeSidebar());
    setShowLogout(true);
  };

  const handleViewChannel = () => {
    dispatch(closeSidebar());
    navigate("/channel");
  };

  const handleCreateChannel = () => {
    dispatch(closeSidebar());
    navigate("/channel");
  };

  // Close dropdown when clicking outside
  const handleDropdownClick = (callback) => {
    callback();
    setShowDropdown(false);
  };

  return (
    <header className="flex items-center justify-between px-3 sm:px-4 py-2 bg-white shadow-sm sticky top-0 z-50">
      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div className="absolute top-0 left-0 right-0 bg-white z-60 p-2 md:hidden border-b">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowMobileSearch(false)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ArrowLeft className=" flex items-center justify-center text-gray-700" />
            </button>
            <div className="flex flex-1">
              <div className="flex flex-1 border border-gray-300 rounded-l-full overflow-hidden focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 outline-none text-sm"
                  autoFocus
                />
              </div>
              <button className="px-4 bg-gray-100 hover:bg-gray-200 border-l border-gray-300 rounded-r-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              <Mic className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Left: Logo + Menu */}
      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        <button
          onClick={() => dispatch(openSidebar())}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className="h-4 sm:h-5 cursor-pointer"
          />
          <span className="text-xs align-super text-gray-500 ml-0.5 hidden xs:inline">
            IN
          </span>
        </div>
      </div>

      {/* Middle: Search (Desktop only) */}
      <div className="hidden md:flex items-center flex-1 justify-center max-w-2xl mx-4">
        <div className="flex w-full max-w-xl">
          <div className="flex flex-1 border border-gray-300 rounded-l-full overflow-hidden focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 outline-none text-sm"
            />
          </div>
          <button className="px-5 bg-gray-100 hover:bg-gray-200 border-l border-gray-300 rounded-r-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
        <button className="ml-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
          <Mic className="w-5 h-5" />
        </button>
      </div>

      {/* Right: User Actions */}
      <div className="relative flex items-center gap-1 sm:gap-2 flex-shrink-0">
        {/* Mobile Search Button */}
        <button
          onClick={() => setShowMobileSearch(true)}
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
          </button>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          {!isLoggedIn ? (
            <div className="flex items-center gap-2">
              <button
                onClick={handleLogin}
                className="flex items-center gap-2 px-3 lg:px-4 py-1.5 rounded-2xl text-sm font-medium  bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <span className="lg:inline">Sign in</span>
              </button>
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer border border-gray-200">
                <User className="w-4 h-4 rounded-2xl" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleLogout}
                className="px-2 lg:px-3 py-1.5 rounded-2xl text-xs lg:text-sm font-medium border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Logout
              </button>

              {!userInfo?.hasChannel && isLoggedIn ? (
                <button
                  onClick={handleCreateChannel}
                  className="px-2 lg:px-3 py-1.5 rounded-2xl text-xs lg:text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 transition-colors whitespace-nowrap"
                >
                  <span className="hidden lg:inline">Create Channel</span>
                  <span className="lg:hidden">Create</span>
                </button>
              ) : (
                <button
                  onClick={handleViewChannel}
                  className="px-2 lg:px-3 py-1.5 rounded-2xl text-xs lg:text-sm font-medium border border-gray-300 hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  <span className="hidden lg:inline">View Channel</span>
                  <span className="lg:hidden">Channel</span>
                </button>
              )}
              <div
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer border border-gray-200"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <User className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          )}
        </div>

        {/* Mobile: User icon with dropdown */}
        <div className="md:hidden relative">
          <div
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer border border-gray-200"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <User className="w-4 h-4 text-gray-600" />
          </div>

          {showDropdown && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowDropdown(false)}
              />

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-10 shadow-lg rounded-md w-48 py-1 bg-white border border-gray-200 z-50">
                {/* Action Buttons (Mobile Only) */}
                <div className="border-b border-gray-100 pb-1 mb-1">
                  <button className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    <Video className="w-4 h-4" />
                    Create
                  </button>
                  <button className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 relative">
                    <Bell className="w-4 h-4" />
                    Notifications
                    <span className="absolute left-7 top-2 w-2 h-2 bg-red-600 rounded-full"></span>
                  </button>
                </div>

                {/* Auth Options */}
                {!isLoggedIn ? (
                  <button
                    onClick={() => handleDropdownClick(handleLogin)}
                    className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <User className="w-4 h-4" />
                    Sign in
                  </button>
                ) : (
                  <>
                    {!userInfo?.hasChannel && isLoggedIn ? (
                      <button
                        onClick={() => handleDropdownClick(handleCreateChannel)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Create Channel
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDropdownClick(handleViewChannel)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        View Channel
                      </button>
                    )}
                    <button
                      onClick={() => handleDropdownClick(handleLogout)}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 border-t border-gray-100"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <LogoutModal isOpen={showLogout} onClose={() => setShowLogout(false)} />
    </header>
  );
};

export default Header;
