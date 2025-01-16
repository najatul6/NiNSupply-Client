import Container from "@/components/common/Container";
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
      <h1 className="text-center text-2xl font-bold mt-4">Categories</h1>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-[#f0f0f0] text-center relative group overflow-hidden transition duration-300">
            <img
              src={category.thumbnail}
              alt={category.packageName}
              className="w-full h-full mx-auto object-cover group-hover:scale-125 transition duration-500"
            />
            <div
              className="w-full h-full bg-background bg-blend-screen absolute inset-0 flex flex-col justify-center items-start bg-opacity-85" 
            >
              <h2 className="text-lg font-bold text-white">{category.packageName}</h2>
              <p className="text-white">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CategoryZone;
