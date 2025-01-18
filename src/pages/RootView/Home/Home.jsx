import CategoryZone from "@/components/RootView/Home/CategoryZone/CategoryZone";
import PopularProducts from "@/components/RootView/Home/PopularProducts/PopularProducts";

const Home = () => {
  const homeHeader =
    "Your Gateway to ⚡ Ultra-Fast Delivery – Order Now! | Don’t Wait – Super Fast Delivery Awaits!";
  return (
    <div className="space-y-6">
      <h1 className="bg-[#1c1c1c] w-full py-4 text-center font-bold">
        {homeHeader}
      </h1>

      <CategoryZone />
      <PopularProducts />
    </div>
  );
};

export default Home;
