import PropTypes from "prop-types";

const CheckOutDataForm = ({ totalPrice }) => {
  return (
    <div className="min-h-screen flex justify-center items-center md:p-6 pattern">
      <div className="p-4 rounded-3xl shadow-2xl w-full max-w-2xl text-white">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Billing and Contact Information
        </h2>
      </div>
    </div>
  );
};


CheckOutDataForm.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
export default CheckOutDataForm;
