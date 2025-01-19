import ProductCardSkeleton from "@/components/RootView/common/ProductCardSkeleton";
import ShopItem from "@/components/RootView/common/ShopItem";
import ShopSidebar from "@/components/RootView/Shop/ShopSidebar";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import useProduct from "@/hooks/useProduct";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Shop = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || "popular");
  const navigate = useNavigate();
  const [products, isLoading] = useProduct();

  useEffect(() => {
    const updatedCategory = category || "popular";
    setActiveCategory(updatedCategory);
    navigate(`/shop/${updatedCategory}`, { replace: true });
  }, [category, navigate]);

  // Filter products based on the active category
  let filteredProducts = [];
  if (activeCategory === "popular") {
    filteredProducts = products.filter((product) => product.isPopular === true);
  } else {
    filteredProducts = products.filter(
      (product) => product.category === activeCategory
    );
  }

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
          <h2 className="text-xl font-bold mb-4 capitalize">
            {activeCategory === "popular"
              ? "Popular Products"
              : `${activeCategory} Zone`}
          </h2>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <ShopItem item={filteredProducts} />
          )}
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default Shop;
