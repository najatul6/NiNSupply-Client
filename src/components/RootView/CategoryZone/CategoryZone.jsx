import { useEffect, useState } from "react";

const CategoryZone = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/packages.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    }, []);
  return (
    <div>
        <h1 className="text-center text-2xl font-bold mt-4">Categories</h1>
        <div className="grid grid-cols-3 gap-4">
            {categories.map((category) => (
            <div key={category.id} className="bg-[#f0f0f0] p-4 text-center">
                <img
                src={category.thumbnail}
                alt={category.name}
                className="w-20 h-20 mx-auto"
                />
                <p className="text-sm font-bold">{category.packageName}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default CategoryZone