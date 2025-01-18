import { NavLink } from "react-router-dom";

const ShopSidebar = ({ open, setOpen }) => {
  const menu = [
    {
      name: "Home",
      path: "/",
      type: "public",
    },
    {
      name: "Shop",
      path: "/shop",
      type: "public",
    },
    {
      name: "Subscription",
      path: "/subscription",
      type: "public",
    },
    {
      name: "Gift Card",
      path: "/gift-card",
      type: "public",
    },
    // {
    //   name: "about",
    //   path: "/about",
    //   type: "public",
    // },
  ];
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
            <MenuItem setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => navigate("/dashboard/overview")}
          className="flex cursor-pointer items-center gap-2"
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItem />
      </aside>
    </Fragment>
  );
};

export default ShopSidebar;
