import { NavLink } from "react-router-dom";

const ShopSidebar = ({openSidebar}) => {
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
    <div className={`${openSidebar && "-translate-x-0"} lg:flex flex-col  gap-5 p-4 bg-background2`}>
      <h3 className="text-xl uppercase">Product categories</h3>
      <ul className="flex flex-col items-start gap-2 capitalize ml-4">
        {menu.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-baseColor text-baseColor font-medium transition duration-200"
                : "hover:border-b-2 hover:border-baseColor transition duration-200"
            }
            key={item.path}
            to={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default ShopSidebar;
