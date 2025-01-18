import Container from "@/components/common/Container";
import ShopSidebar from "@/components/RootView/common/ShopSidebar";
import { Outlet } from "react-router-dom";
// import { FaCircleChevronRight } from "react-icons/fa6";
import { useState } from "react";

const Shop = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <Container>
      <div className="flex min-h-screen w-full overflow-x-hidden">
        <div className="relative">
          <ShopSidebar open={openSidebar} setOpen={setOpenSidebar} />
          {/* <button onClick={()=>setOpenSidebar(!openSidebar)}>
          <FaCircleChevronRight size={30} className={`absolute top-20 -right-3 text-baseColor ${openSidebar?"":"rotate-180"}`} />
          </button> */}
        </div>
        <div className="flex flex-1 flex-col">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default Shop;
