import ShopSidebar from "@/components/RootView/Shop/ShopSidebar";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Shop = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || "popular");
  const navigate = useNavigate();

  useEffect(() => {
    setActiveCategory(category || "popular");
  }, [category]);

  useEffect(() => {
    // Whenever the category changes, update the URL
    navigate(`/shop/${activeCategory}`);
  }, [activeCategory, navigate]);

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
        
        <TabsContent value="popular">
          <h2 className="text-xl font-bold mb-4">Popular</h2>
          <p>Popular category content...</p>
        </TabsContent>

        <TabsContent value="account">
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <p>Account category content...</p>
        </TabsContent>

        <TabsContent value="class">
          <h2 className="text-xl font-bold mb-4">Class</h2>
          <p>Class category content...</p>
        </TabsContent>

        <TabsContent value="candle">
          <h2 className="text-xl font-bold mb-4">Candle</h2>
          <p>Candle category content...</p>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default Shop;