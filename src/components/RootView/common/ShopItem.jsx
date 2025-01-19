import Lottie from "lottie-react";
import sorry from "../../../assets/Animations/sorry.json";
import PropTypes from "prop-types";
import { useState } from "react";

const ShopItem = ({ item }) => {
  // Retrieve cart from localStorage (if any)
  const getCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, setCart] = useState(getCartFromLocalStorage());

  const addToCart = (product) => {
    console.log("Adding product to cart:", product);

    // Create productInfo to save to cart
    const productInfo = {
      id: product._id,
      productName: product.productName,
      price: product.price,
      quantity: 1,
    };

    // Check if product already exists in the cart
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product._id
    );

    if (existingProductIndex >= 0) {
      // Product already in the cart, increase quantity
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // Add new product to the cart
      updatedCart.push(productInfo);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Update the state for UI
    setCart(updatedCart);
  };
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
            <div className="relative flex flex-col h-full">
              <img
                src={product.thumbnail}
                alt={product.productName}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4 flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {product.productName}
                  </h3>
                  <span className="text-lg font-bold text-baseColor flex justify-center items-center">
                 {product.price || "N/A"}৳
                  </span>
                </div>
                {/* Description list */}
                <ul className="text-sm text-gray-500">
                  {product.description?.map((desc, index) => (
                    <li key={index} className="list-disc ml-5">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => addToCart(product)}
                disabled={product.stock === 0}
                className="my-2 inline-block px-6 py-2 bg-baseColor text-background rounded-md hover:bg-baseColor-dark transition-all w-2/3 mx-auto font-medium"
              >
                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                
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
  item: PropTypes.array,
};

export default ShopItem;
