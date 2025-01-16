import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const CategoryZone = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/packages.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  
  return (
    <Container>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {categories.map((category) => (
          <div key={category.id} className="bg-background2 rounded-md text-center relative group overflow-hidden transition duration-300">
            <img
              src={category.thumbnail}
              alt={category.packageName}
              className="w-full h-full mx-auto object-cover group-hover:scale-125 transition duration-500"
            />
            <div
              className="w-full h-full bg-background bg-blend-screen absolute inset-0 flex gap-3 flex-col justify-center items-start px-6 bg-opacity-85 rounded-md" 
            >
              <h2 className="text-2xl uppercase font-bold text-white">{category.packageName}</h2>
              <Button className="bg-transparent border-baseColor border-2 uppercase font-semibold text-baseColor hover:bg-baseColor hover:text-black hover:border-white rounded-none">Shop Now</Button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CategoryZone;
