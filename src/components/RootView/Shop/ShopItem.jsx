import Lottie from "lottie-react";
import sorry from "../../../assets/Animations/sorry.json";
import { Link } from "react-router-dom";

const ShopItem = ({ item }) => {
  //   // Check if 'item' is a valid array before rendering
  //   if (!Array.isArray(item) || item.length === 0) {
  //     return (
  //       <div className="flex flex-col justify-center items-center min-h-border">
  //         <div className="w-40 h-40 mb-4">
  //           <Lottie animationData={sorry} />
  //         </div>
  //         <p className="text-center">No products available in this category.</p>
  //       </div>
  //     );
  //   }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {item.length === 0 ? (
        <div className="flex flex-col justify-center items-center col-span-full">
          <div className="w-40 h-40 mb-4">
            <Lottie animationData={sorry} />
          </div>
          <p className=" text-center text-xl text-gray-500">
            No products available in this category.
          </p>
        </div>
      ) : (
        item.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-md overflow-hidden"
          >
            <img
              src={product.thumbnail}
              alt={product.packageName}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.packageName}</h3>
              <p className="mt-3 text-lg font-bold text-baseColor">{`$${
                product.price || "N/A"
              }`}</p>
              <Link
                to={`/shop/product/${product.id}`}
                className="mt-4 inline-block px-6 py-2 bg-baseColor text-white rounded-md hover:bg-baseColor-dark transition"
              >
                View Product
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ShopItem;
