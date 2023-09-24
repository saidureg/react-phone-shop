import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="shadow-lg">
        <Navbar></Navbar>
      </div>
      <div className="max-w-[1380px] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
