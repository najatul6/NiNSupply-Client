import CategoryZone from "@/components/RootView/Home/CategoryZone/CategoryZone";
import PopularProducts from "@/components/RootView/Home/PopularProducts/PopularProducts";

const Home = () => {
  
  return (
    <div className="space-y-6">
      

      <CategoryZone />
      <PopularProducts />
    </div>
  );
};

export default Home;
