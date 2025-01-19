
const ShopItem = ({item}) => {
  return (
    <div>
        {item?.map((product) => (
          <div
            key={product.id}
            className="bg-background2 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col hover:translate-y-[-5px]"
          >
            <img
              src={product.thumbnail}
              alt={product.productName}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex-grow">
              <div className="flex justify-between">
                
                <h3 className="text-lg font-semibold mb-2">
                  {product.productName}
                </h3>
                <p className="text-xl font-bold text-green-500">
                  ${product.price}
                </p>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-500 marker:text-blue-500 mb-4">
                {product.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <button className="w-full bg-baseColor text-black py-2 text-center hover:bg-green-600 transition-colors duration-200">
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  )
}

export default ShopItem