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
              <p className="text-red-500 text-sm" role="alert">First name is required</p>
            )}
          </div>

          <input
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && <p role="alert">{errors.mail.message}</p>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

CheckOutDataForm.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
export default CheckOutDataForm;
