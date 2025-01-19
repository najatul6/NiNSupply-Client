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
  
  // Effect to update active category from URL
  useEffect(() => {
    setActiveCategory(category || "popular");
  }, [category]);

  // Effect to update URL when active category changes
  useEffect(() => {
    navigate(`/shop/${activeCategory}`);
  }, [activeCategory, navigate]);

  // Filter products based on the active category
  let filteredProducts = [];
  if (activeCategory === "popular") {
    filteredProducts = products.filter(product => product.isPopular === true);
  } else {
    filteredProducts = products.filter(product => product.category === activeCategory);
  }
  console.log(filteredProducts);

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
          {/* Render filtered products */}
          <h2 className="text-xl font-bold mb-4">
            {activeCategory === "popular" ? "Popular Products" : `${activeCategory} Zone`}
          </h2>
          <ShopItem item={filteredProducts} />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default Shop;
