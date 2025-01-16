import CategoryZone from "@/components/RootView/CategoryZone/CategoryZone";

const Home = () => {
  const homeHeader =
    "Order Before 7 PM to Get ⚡Fastest Delivery | Regular Delivery Time: 11 AM – 7 PM";
  return (
    <div className="">
      <h1 className="bg-[#1c1c1c] w-full py-4 text-center font-bold">
        {homeHeader}
      </h1>
      <CategoryZone />
    </div>
  );
};

export default Home;
