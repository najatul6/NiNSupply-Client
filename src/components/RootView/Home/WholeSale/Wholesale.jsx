import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";

const Wholesale = () => {
  const [products, loading] = useProduct(); // Assuming `useProduct` provides a loading state

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Wholesale Price Supply Only</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            )) // Render 8 skeletons while loading
          : products?.length > 0
          ? products.map((product) => (
              <div
                key={product._id}
                className="bg-background2 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative flex flex-col h-full">
                  {/* Product Image */}
                  <img
                    src={product?.thumbnail}
                    alt={product?.productName}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  {/* Product Info */}
                  <div className="p-4 flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {product?.productName}
                      </h3>
                      <span className="text-lg font-bold text-baseColor">
                        ${product?.price || "N/A"}
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
                  {/* Add to Cart Button */}
                  <button
                    // onClick={() => addToCart(product)} // Replace this with your actual add-to-cart function
                    disabled={product.stock === 0}
                    className={`my-2 inline-block px-6 py-2 rounded-md w-2/3 mx-auto font-medium transition-all ${
                      product.stock === 0
                        ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                        : "bg-baseColor text-background hover:bg-baseColor-dark"
                    }`}
                  >
                    {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>
                </div>
                {/* Popular Badge */}
                {product.isPopular && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
                    Popular
                  </div>
                )}
              </div>
            ))
          : (
            <p className="text-center col-span-full text-lg text-gray-500">
              No products available.
            </p>
          )}
      </div>
    </div>
  );
};

export default Wholesale;
