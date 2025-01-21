import useAxiosSecure from "@/hooks/useAxiosSecure";
import PropTypes from "prop-types";
import { RiDeleteBin2Fill } from "react-icons/ri";

const OrderCard = ({ product }) => {
  const axiosSecure = useAxiosSecure();
  const handleRemove=(id)=>{
    axiosSecure.delete(`/carts/${id}`).then((res)=>{
      console.log(res.data)
    })
  }


  return (
    <div className="border p-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold">{product?.productName}</h1>
        </div>
        <div>
          <p className="text-lg font-bold">{product?.price}৳</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="px-4 capitalize">quantity : {product?.quantity}</span>

        <div>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md"
            onClick={()=>handleRemove(product._id)}
          >
            <RiDeleteBin2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  product: PropTypes.object,
  refetch: PropTypes.func,
};

export default OrderCard;
