import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import useCategory from "@/hooks/useCategory";
import { Link } from "react-router-dom";
import ProductCardSkeleton from "../../common/ProductCardSkeleton";

const CategoryZone = () => {
  const [categories, isLoading] = useCategory();

  return (
    <div className="p-2 md:p-6">
      <h2 className="text-2xl font-semibold uppercase text-white text-center mb-8 ">
        <span className=" border-b-2 rounded-md border-baseColor">Shop By Category</span>
      </h2>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {isLoading
  ? Array.from({ length: 8 }).map((_, index) => (
      <div 
        key={index} 
        
      >
        <ProductCardSkeleton />
      </div>
    ))
  : categories.map((item, index) => (
      <motion.div
        key={item?._id}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-background2 h-[200px] rounded-md text-center relative group overflow-hidden transition duration-300"
      >
        {/* Image with Hover Effect */}
        <motion.img
          src={item?.thumbnail}
          alt={item?.packageName}
          className="w-full h-full mx-auto object-cover group-hover:scale-125 transition duration-500"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Overlay with Smooth Fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full bg-background bg-blend-screen absolute inset-0 flex gap-3 flex-col justify-center items-start px-6 bg-opacity-85 rounded-md"
        >
          <h2 className="text-2xl uppercase font-bold text-white">
            {item?.packageName}
          </h2>
          <Link to={`/shop/${item?.category}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-baseColor border-2 uppercase font-semibold text-baseColor hover:bg-baseColor hover:text-black hover:border-white rounded-none px-4 py-2"
            >
              Shop Now
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    ))}

        </div>
      </Container>
    </div>
  );
};

export default CategoryZone;
