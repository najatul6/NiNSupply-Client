import useAxiosSecure from "@/hooks/useAxiosSecure";
import PropTypes from "prop-types";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const OrderCard = ({ product, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleRemove = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    else {
                        Swal.fire({
                            title: "Opps!",
                            text: "Your file isn't deleted.",
                            icon: "warning"
                        });
                    }
                })
        }
    });
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
