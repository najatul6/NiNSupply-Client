import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const CheckOutDataForm = ({ totalPrice }) => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="min-h-screen flex justify-center items-center md:p-6 pattern">
      <div className="p-4 rounded-3xl shadow-2xl w-full max-w-2xl text-white">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Billing and Contact Information
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm font-medium">
              Full Name
            </label>
            <input
              {...register("fullName", { required: true })}
              value={watch("fullName", "")}
              className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent focus:ring-2 focus:ring-baseColor text-white ${
                errors.fullName ? "border-red-500" : "border-gray-600"
              }`}
              aria-invalid={errors.fullName ? "true" : "false"}
            />
            {errors.fullName?.type === "required" && (
              <p className="text-red-500 text-sm" role="alert">
                First name is required
              </p>
            )}
          </div>
          {/* WhatsApp Number */}
          <div className="flex flex-col">
            <label htmlFor="whatsappNumber" className="text-sm font-medium">
              WhatsApp Number (With Country Code)
            </label>
            <input
              {...register("whatsappNumber", { required: true })}
              value={watch("whatsappNumber", "")}
              className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent focus:ring-2 focus:ring-baseColor text-white ${
                errors.whatsappNumber ? "border-red-500" : "border-gray-600"
              }`}
              aria-invalid={errors.whatsappNumber ? "true" : "false"}
            />
            {errors.whatsappNumber?.type === "required" && (
              <p className="text-red-500 text-sm" role="alert">
                WhatsApp number is required
              </p>
            )}
          </div>
          {/* Company URL */}
          <div className="flex flex-col">
            <label htmlFor="companyUrl" className="text-sm font-medium">
              Company URL
            </label>
            <input
              {...register("companyUrl", { required: true })}
              value={watch("companyUrl", "")}
              className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent focus:ring-2 focus:ring-baseColor text-white ${
                errors.companyUrl ? "border-red-500" : "border-gray-600"
              }`}
              aria-invalid={errors.companyUrl ? "true" : "false"}
            />
            {errors.companyUrl?.type === "required" && (
              <p className="text-red-500 text-sm" role="alert">
                Company URL is required
              </p>
            )}
          </div>
          {/* Skype ID */}
          <div className="flex flex-col">
            <label htmlFor="skypeId" className="text-sm font-medium">
              Skype ID
            </label>
            <input
              {...register("skypeId", { required: true })}
              value={watch("skypeId", "")}
              className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent focus:ring-2 focus:ring-baseColor text-white ${
                errors.skypeId ? "border-red-500" : "border-gray-600"
              }`}
              aria-invalid={errors.skypeId ? "true" : "false"}
            />
            {errors.skypeId?.type === "required" && (
              <p className="text-red-500 text-sm" role="alert">
                Skype ID is required
              </p>
            )}
          </div>
          {/* Review Type */}
          <div className="flex flex-col">
            <label htmlFor="reviewType" className="text-sm font-medium">
              Review Type
            </label>
            <select
              {...register("reviewType", { required: true })}
              value={watch("reviewType", "")}
              className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent focus:ring-2 focus:ring-baseColor text-white ${
                errors.reviewType ? "border-red-500" : "border-gray-600"
              }`}
              aria-invalid={errors.reviewType ? "true" : "false"}
            >
              <option value="single">Single</option>
              <option value="multiple">Multiple</option>
            </select>
            {errors.reviewType?.type === "required" && (
              <p className="text-red-500 text-sm" role="alert">
                Review type is required
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg"
           
          >
            {/* {isSubmitting ? "Submitting..." : "Submit"} */}
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

CheckOutDataForm.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
export default CheckOutDataForm;
