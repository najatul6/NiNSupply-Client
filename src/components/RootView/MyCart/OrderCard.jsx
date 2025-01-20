import { RiDeleteBin2Fill } from "react-icons/ri";

const OrderCard = ({ product, refetch }) => {

  return (
    <div className="border p-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">{product.productName}</h1>
        </div>
        <div>
          <p className="text-lg font-bold">{product.price}৳</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <div>
          <button
            className="bg-baseColor text-white px-4 py-1 rounded-md"
            // onClick={handleDecrement}
          >
            -
          </button>
          <span className="px-4">{product.quantity}</span>
          <button
            className="bg-baseColor text-white px-4 py-1 rounded-md"
            // onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <div>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md"
            // onClick={handleRemove}
          >
            <RiDeleteBin2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
