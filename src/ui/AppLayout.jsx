import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import Footer from "./Footer";

function AppLayout() {
  // Config style for main app
  return (
    <div className=" dark:bg-slate-900 h-screen flex">
      <Navbar />
      <div className=" mt-14 w-full overflow-y-scroll">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
