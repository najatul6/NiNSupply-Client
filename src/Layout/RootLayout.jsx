import Header from "@/components/RootView/common/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex flex-col  overflow-hidden">
      <Header />
      <div className="flex flex-col w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
