import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../store/slices/sidebarSlice";
import LoginModal from "../../components/LoginModal";
import { closeLoginModal } from "../../store/slices/loginModalSlice";

const Layout = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const showLoginModal = useSelector((state) => state.loginModal.showLoinModal);

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Header */}
      <Header />

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar (fixed) */}
        <Sidebar />

        {/* Main content */}
        <main
          onClick={() => dispatch(closeSidebar())}
          className={`flex-1 px-4 overflow-y-auto transition-all duration-300 ${
            isOpen ? "md:ml-60" : "ml-0"
          }`}
        >
          <Outlet />
          <LoginModal
            isOpen={showLoginModal}
            onClose={() => {
              dispatch(closeLoginModal());
            }}
          />
        </main>
      </div>
    </div>
  );
};

export default Layout;
