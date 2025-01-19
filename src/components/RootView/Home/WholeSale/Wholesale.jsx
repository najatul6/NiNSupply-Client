import useProduct from "@/hooks/useProduct";

const Wholesale = () => {
  const [products] = useProduct();
  console.log(products);
  return (
    <div>
      <h1>Wholesale Price Supply Only</h1>
      <div>
        {products?.map((product) => {
          <div
            key={product._id}
            className="bg-background2 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative flex flex-col h-full">
              <img
                src={product?.thumbnail}
                alt={product?.productName}
                className="w-full h-64 object-cover rounded-t-lg"
              />
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
              <button
                // onClick={() => addToCart(product)}
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
          </div>;
        })}
      </div>
    </div>
  );
};

export default Wholesale;
