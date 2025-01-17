import useProduct from "@/hooks/useProduct";

const PopularProducts = () => {
    const [products] = useProduct();
    const popularProduct = products.filter((product) => product.category === "popular");

    return (
        <div className="p-6 bg-gray-100">
            <h2 className="text-2xl font-bold text-center mb-6">Popular Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {popularProduct.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.productName}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                {product.description.join(", ")}
                            </p>
                            <p className="text-xl font-bold text-green-500">${product.price}</p>
                        </div>
                        <button className="w-full bg-blue-500 text-white py-2 text-center hover:bg-blue-600 transition-colors duration-200">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularProducts;
