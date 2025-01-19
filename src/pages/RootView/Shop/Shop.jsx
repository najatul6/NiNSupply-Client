import ShopItem from "@/components/RootView/Shop/ShopItem";
import ShopSidebar from "@/components/RootView/Shop/ShopSidebar";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import useProduct from "@/hooks/useProduct";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Shop = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || "popular");
  const navigate = useNavigate();
  const [products] = useProduct();
  
  useEffect(() => {
    setActiveCategory(category || "popular");
  }, [category]);

  useEffect(() => {
    // Whenever the category changes, update the URL
    navigate(`/shop/${activeCategory}`);
  }, [activeCategory, navigate]);

  const popularProduct = products.filter(
    (product) => product.category === "popular"
  );

  const email=products.filter(product=>product.category==="email")

  return (
    <Tabs
      value={activeCategory}
      onValueChange={setActiveCategory}
      className="flex flex-col lg:flex-row min-h-screen w-full"
    >
      {/* Sidebar */}
      <ShopSidebar
        category={activeCategory}
        setCategory={setActiveCategory}
        className="w-full lg:w-64"
      />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <TabsContent value={activeCategory}>
        <ShopItem item={popularProduct}/>
        </TabsContent>
        <TabsContent value={activeCategory}>
        <ShopItem item={email}/>
        </TabsContent>
        <TabsContent value={activeCategory}>
        <ShopItem item={email}/>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default Shop;