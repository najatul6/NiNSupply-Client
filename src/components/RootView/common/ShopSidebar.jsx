import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import ShopMenu from "@/pages/RootView/Shop/ShopMenu";
import { ChartNoAxesCombined } from "lucide-react";
import { Fragment } from "react";
import {  useNavigate } from "react-router-dom";

const ShopSidebar = ({ open, setOpen }) => {
    const navigate = useNavigate();
  
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <ChartNoAxesCombined size={30} />
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <ShopMenu setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => navigate("/shop/category/hello")}
          className="flex cursor-pointer items-center gap-2"
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
        <ShopMenu />
      </aside>
    </Fragment>
  );
};

export default ShopSidebar;
