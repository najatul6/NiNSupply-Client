import CategoryZone from "@/components/RootView/Home/CategoryZone/CategoryZone";
import PopularProducts from "@/components/RootView/Home/PopularProducts/PopularProducts";
import Wholesale from "@/components/RootView/Home/WholeSale/Wholesale";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="space-y-6">
      {/* Helmet for title and meta tags Start here */}
      <Helmet>
        <title>Home | E-commerce</title>
        <meta
          name="description"
          content="E-commerce website for buying and selling products"
        />
      </Helmet>
      <PopularProducts />
      <CategoryZone />
      <Wholesale />
    </div>
  );
};

export default Home;
