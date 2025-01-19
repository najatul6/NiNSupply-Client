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
  const popularProduct = products.filter(
    (product) => product.category === "popular"
  );
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
        {popularProduct.map((product) => (
          <div
            key={product.id}
            className="bg-background2 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col hover:translate-y-[-5px]"
          >
            <img
              src={product.thumbnail}
              alt={product.productName}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex-grow">
              <div className="flex justify-between">
                
                <h3 className="text-lg font-semibold mb-2">
                  {product.productName}
                </h3>
                <p className="text-xl font-bold text-green-500">
                  ${product.price}
                </p>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-500 marker:text-blue-500 mb-4">
                {product.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <button className="w-full bg-baseColor text-black py-2 text-center hover:bg-green-600 transition-colors duration-200">
              Add to Cart
            </button>
          </div>
        ))}

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