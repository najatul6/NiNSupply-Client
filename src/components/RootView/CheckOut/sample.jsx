import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useCarts from "@/hooks/useCart";
import PropTypes from "prop-types";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BillingAddressForm = ({ totalPrice }) => {
  const { user } = useAuth();
  const [carts, refetch] = useCarts(); // Added refetch to refresh cart after deletion
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNumber: "",
    companyUrl: "",
    reviewType: "",
    skypeId: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate field
  const validateField = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "fullName":
        if (!value.trim()) errorMsg = "Full Name is required.";
        else if (value.length < 3)
          errorMsg = "Full Name must be at least 3 characters.";
        break;
      case "whatsappNumber":
        if (!value.trim()) errorMsg = "WhatsApp number is required.";
        else if (!/^\+[1-9]{1}[0-9]{3,14}$/.test(value))
          errorMsg = "Invalid WhatsApp number format. Example: +1234567890";
        break;
      case "companyUrl":
        if (value && !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/.test(value))
          errorMsg = "Invalid URL format.";
        break;
      case "skypeId":
        if (value && value.length < 3)
          errorMsg = "Skype ID must be at least 3 characters.";
        break;
      case "reviewType":
        if (!value.trim()) errorMsg = "Please select a review type.";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  // Check if the form is valid (no errors)
  const isFormValid = () => {
    return !Object.values(errors).some((error) => error);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields before submission
    Object.keys(formData).forEach((key) => validateField(key, formData[key]));

    // If there are any validation errors, stop the form submission
    if (!isFormValid()) {
      console.log("Form submission blocked due to validation errors.", errors);
      setIsSubmitting(false);
      return;
    }

    // Create the order payload including cart items
    const orderData = {
      ...formData,
      userEmail: user?.email,
      cartItems: carts, // Include cart items in the order
      orderDate: new Date().toISOString(),
      totalPrice: totalPrice,
      status: "Pending",
    };

    try {
      // Send order data to the backend
      const response = await axiosSecure.post("/orders", orderData);

      if (response.data.insertedId) {
        console.log("Order placed successfully:", response.data); // TODO: Remove this line

        // Delete all cart items for the user
        const deleteCartRequests = carts.map((cartItem) =>
          axiosSecure.delete(`/carts/${cartItem._id}`)
        );

        await Promise.all(deleteCartRequests);

        // Show success toast after deleting cart items
        refetch();
        navigate("/dashboard/my-orders", { state: { from: location } });
        toast.success("Order placed successfully!");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center md:p-6 pattern">
      <div className="p-4 rounded-3xl shadow-2xl w-full max-w-2xl text-white">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Billing and Contact Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent focus:ring-2 focus:ring-baseColor text-white ${
                errors.fullName ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

          {/* WhatsApp Number */}
          <div className="flex flex-col">
            <label htmlFor="whatsappNumber" className="text-sm font-medium">
              WhatsApp Number (With Country Code)
            </label>
            <input
              id="whatsappNumber"
              name="whatsappNumber"
              type="tel"
              value={formData.whatsappNumber}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent focus:ring-2 focus:ring-baseColor text-white ${
                errors.whatsappNumber ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="+1 234 567 890"
            />
            {errors.whatsappNumber && (
              <p className="text-red-500 text-sm">{errors.whatsappNumber}</p>
            )}
          </div>

          {/* Company URL */}
          <div className="flex flex-col">
            <label htmlFor="companyUrl" className="text-sm font-medium">
              Company URL
            </label>
            <input
              id="companyUrl"
              name="companyUrl"
              type="url"
              value={formData.companyUrl}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent focus:ring-2 focus:ring-baseColor text-white ${
                errors.companyUrl ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Your company website URL"
            />
            {errors.companyUrl && (
              <p className="text-red-500 text-sm">{errors.companyUrl}</p>
            )}
          </div>

          {/* Skype ID */}
          <div className="flex flex-col">
            <label htmlFor="skypeId" className="text-sm font-medium">
              Skype ID
            </label>
            <input
              id="skypeId"
              name="skypeId"
              type="text"
              value={formData.skypeId}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent focus:ring-2 focus:ring-baseColor text-white ${
                errors.skypeId ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Your Skype ID"
            />
            {errors.skypeId && (
              <p className="text-red-500 text-sm">{errors.skypeId}</p>
            )}
          </div>

          {/* Review Type */}
          <div className="flex flex-col">
            <label htmlFor="reviewType" className="text-sm font-medium">
              Review Type
            </label>
            <select
              id="reviewType"
              name="reviewType"
              value={formData.reviewType}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent focus:ring-2 focus:ring-baseColor focus:bg-black text-white ${
                errors.reviewType ? "border-red-500" : "border-gray-600"
              }`}
            >
              <option value="">Select review type</option>
              <option value="Positive Review">Positive Review</option>
              <option value="Negative Review">Negative Review</option>
            </select>
            {errors.reviewType && (
              <p className="text-red-500 text-sm">{errors.reviewType}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg"
            disabled={isSubmitting || !isFormValid()}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

BillingAddressForm.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default BillingAddressForm;
