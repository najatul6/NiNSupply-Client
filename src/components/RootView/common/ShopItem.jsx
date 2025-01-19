import Lottie from "lottie-react";
import sorry from "../../../assets/Animations/sorry.json";
import PropTypes from 'prop-types';

const ShopItem = ({ item }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {!item || item.length === 0 ? (
        <div className="flex flex-col justify-center items-center col-span-full">
          <div className="w-40 h-40 mb-4">
            <Lottie animationData={sorry} />
          </div>
          <p className="text-center text-xl text-gray-500">
            No products available in this category.
          </p>
        </div>
      ) : (
        item?.map((product) => (
          <div
            key={product.id}
            className="bg-background2 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.thumbnail}
              alt={product.productName}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-white">{product.productName}</h3>
                <span className="text-lg font-bold text-baseColor">${product.price || "N/A"}</span>
              </div>
             {/* Description list */}
             <ul className="text-sm text-gray-500 mb-4">
                {product.description?.map((desc, index) => (
                  <li key={index} className="list-disc ml-5">
                    {desc}
                  </li>
                ))}
              </ul>
             {/* Add to Cart button */}
             <button
                // onClick={() => addToCart(product)}
                className="mt-4 inline-block px-6 py-2 bg-baseColor text-background rounded-md hover:bg-baseColor-dark transition-all"
              >
                Add to Cart
              </button>
            </div>
            {product.isPopular && (
              <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
                Popular
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};
ShopItem.propTypes = {
  item: PropTypes.array
};

export default ShopItem;
