import CategoryZone from "@/components/RootView/Home/CategoryZone/CategoryZone";
import PopularProducts from "@/components/RootView/Home/PopularProducts/PopularProducts";
import Wholesale from "@/components/RootView/Home/WholeSale/Wholesale";

const Home = () => {
  return (
    <div className="space-y-6">
      <PopularProducts />
      <CategoryZone />
      <Wholesale />
    </div>
  );
};

export default Home;
