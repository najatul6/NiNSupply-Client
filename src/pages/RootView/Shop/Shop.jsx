import ShopSidebar from "@/components/RootView/Shop/ShopSidebar";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Shop = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || "popular");
  useEffect(() => {
    setActiveCategory(category || "popular");
  }, [category]);
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
          <h2 className="text-xl font-bold mb-4">Password</h2>
          <p>
            Password ipsum dolor sit amet, consectetur adipisicing elit. Quos
            itaque odit placeat sapiente impedit perspiciatis a alias
            repudiandae maxime iste mollitia debitis dicta modi id cum vel
            assumenda ducimus, incidunt eligendi repellat nobis quae minima
            facilis! Molestiae illo libero autem, earum exercitationem excepturi
            voluptatibus, corporis pariatur consequatur tempore beatae. Dolorum?
          </p>
        </TabsContent>

        <TabsContent value="account">
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <p>
            Account ipsum dolor sit amet, consectetur adipisicing elit. Quos
            itaque odit placeat sapiente impedit perspiciatis a alias
            repudiandae maxime iste mollitia debitis dicta modi id cum vel
            assumenda ducimus, incidunt eligendi repellat nobis quae minima
            facilis! Molestiae illo libero autem, earum exercitationem excepturi
            voluptatibus, corporis pariatur consequatur tempore beatae. Dolorum?
          </p>
        </TabsContent>

        <TabsContent value="class">
          <h2 className="text-xl font-bold mb-4">Class</h2>
          <p>
            Class ipsum dolor sit amet, consectetur adipisicing elit. Quos
            itaque odit placeat sapiente impedit perspiciatis a alias
            repudiandae maxime iste mollitia debitis dicta modi id cum vel
            assumenda ducimus, incidunt eligendi repellat nobis quae minima
            facilis! Molestiae illo libero autem, earum exercitationem excepturi
            voluptatibus, corporis pariatur consequatur tempore beatae. Dolorum?
          </p>
        </TabsContent>

        <TabsContent value="candle">
          <h2 className="text-xl font-bold mb-4">Candle</h2>
          <p>
            Candle ipsum dolor sit amet, consectetur adipisicing elit. Quos
            itaque odit placeat sapiente impedit perspiciatis a alias
            repudiandae maxime iste mollitia debitis dicta modi id cum vel
            assumenda ducimus, incidunt eligendi repellat nobis quae minima
            facilis! Molestiae illo libero autem, earum exercitationem excepturi
            voluptatibus, corporis pariatur consequatur tempore beatae. Dolorum?
          </p>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default Shop;
