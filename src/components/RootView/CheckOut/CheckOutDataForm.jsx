import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useCarts from "@/hooks/useCart";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BillingAddressForm = ({totalPrice}) => {
  const { user } = useAuth();
  const [carts, refetch] = useCarts(); // Added refetch to refresh cart after deletion
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNumber: "",
    companyUrl: "",
    reviewType: "",
    skypeId: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        if (
          value &&
          !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/.test(value)
        )
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields before submission
    Object.keys(formData).forEach((key) => validateField(key, formData[key]));

    // Check if there are any errors
    if (Object.values(errors).some((err) => err)) {
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
      totalPrice:totalPrice,
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
        navigate("/");
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
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingAddressForm;

// import { useState } from 'react';

// const CheckOutDataForm = () => {
//   const [paymentAmount, setPaymentAmount] = useState('');
//   const [transactionId, setTransactionId] = useState('');
//   const [screenshot, setScreenshot] = useState(null);

//   // Handle file upload
//   const handleScreenshotChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setScreenshot(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic (send data to server or something)
//     console.log('Form Submitted:', { paymentAmount, transactionId, screenshot });
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 w-full p-6">
//       <div className="text-center text-xl font-bold text-black mb-4">
//         Please follow the steps below to confirm your payment
//       </div>

//       <div className="flex flex-col items-center space-y-4 w-full max-w-md">
//         {/* Step-by-step Instructions */}
//         <div className="bg-white p-6 rounded-md shadow-lg w-full mb-6">
//           <h2 className="text-xl font-semibold text-black mb-4">Payment Steps</h2>
//           <ol className="list-decimal text-left space-y-2 text-black">
//             <li>Copy the card number below and send your payment amount:</li>
//             <div className="ml-6 text-sm text-black">
//               <p>Card Number: 1234 5678 9012 3456</p>
//               <p>Amount: Enter the amount you need to pay (₹)</p>
//             </div>
//             <li>Copy the transaction ID that you receive after the transfer.</li>
//             <li>Take a screenshot of the transaction confirmation from your bank.</li>
//             <li>Come back to this page, upload the screenshot, and enter the transaction ID.</li>
//             <li>Click on &quot;Confirm Payment&quot; to complete your process.</li>
//           </ol>
//         </div>

//         {/* Payment Confirmation Form */}
//         <div className="bg-white p-6 rounded-md shadow-lg w-full">
//           <form onSubmit={handleSubmit}>
//             {/* Payment Amount */}
//             <label htmlFor="paymentAmount" className="text-sm text-black mb-2 block">
//               Amount Paid (in ₹):
//             </label>
//             <input
//               id="paymentAmount"
//               type="number"
//               value={paymentAmount}
//               onChange={(e) => setPaymentAmount(e.target.value)}
//               placeholder="Enter the amount you paid"
//               className="w-full px-4 py-2 border rounded-md text-sm text-black mb-4"
//               required
//             />

//             {/* Transaction ID */}
//             <label htmlFor="transactionId" className="text-sm text-black mb-2 block">
//               Transaction ID:
//             </label>
//             <input
//               id="transactionId"
//               type="text"
//               value={transactionId}
//               onChange={(e) => setTransactionId(e.target.value)}
//               placeholder="Enter your transaction ID"
//               className="w-full px-4 py-2 border rounded-md text-sm text-black mb-4"
//               required
//             />

//             {/* Screenshot Upload */}
//             <label htmlFor="screenshot" className="text-sm text-black mb-2 block">
//               Upload Screenshot of Payment Proof:
//             </label>
//             <input
//               id="screenshot"
//               type="file"
//               onChange={handleScreenshotChange}
//               accept="image/*"
//               className="w-full px-4 py-2 border rounded-md text-sm text-black mb-4"
//               required
//             />
//             {screenshot && <p className="text-xs text-green-600 mt-2">Screenshot uploaded: {screenshot.name}</p>}

//             {/* Confirm Payment Button */}
//             <div className="flex justify-center items-center space-x-4">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg w-1/2"
//               >
//                 Confirm Payment
//               </button>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setPaymentAmount('');
//                   setTransactionId('');
//                   setScreenshot(null);
//                 }}
//                 className="bg-gray-500 text-white px-6 py-3 rounded-md text-lg w-1/2"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckOutDataForm;

// import { useState } from 'react';

// const CheckOutDataForm = () => {
//   const [paymentAmount, setPaymentAmount] = useState('');
//   const [transactionId, setTransactionId] = useState('');
//   const [screenshot, setScreenshot] = useState(null);

//   // Handle file upload
//   const handleScreenshotChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setScreenshot(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic (send data to server or something)
//     console.log('Form Submitted:', { paymentAmount, transactionId, screenshot });
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 w-full p-6">
//       <div className="text-center text-xl font-bold text-black mb-4">
//         Please confirm your payment and upload proof of remittance
//       </div>

//       <div className="flex flex-col items-center space-y-4 w-full max-w-md">
//         {/* Bank Transfer Information */}
//         <div className="bg-white p-6 rounded-md shadow-lg w-full mb-6">
//           <h2 className="text-xl font-semibold text-black mb-4">Bank Transfer Details</h2>
//           <p className="text-sm text-black mb-2">
//             Bank Name: XYZ Bank
//           </p>
//           <p className="text-sm text-black mb-2">
//             Account Number: 1234567890
//           </p>
//           <p className="text-sm text-black mb-2">
//             Account Name: Your Name
//           </p>
//           <p className="text-sm text-black mb-2">
//             IFSC Code: ABCD1234
//           </p>
//           <p className="text-sm text-black mb-4">
//             Please use these details to transfer the payment.
//           </p>
//         </div>

//         {/* Payment Confirmation Form */}
//         <div className="bg-white p-6 rounded-md shadow-lg w-full">
//           <form onSubmit={handleSubmit}>
//             {/* Payment Amount */}
//             <label htmlFor="paymentAmount" className="text-sm text-black mb-2 block">
//               Amount Paid (in ৳):
//             </label>
//             <input
//               id="paymentAmount"
//               type="number"
//               value={paymentAmount}
//               onChange={(e) => setPaymentAmount(e.target.value)}
//               placeholder="Enter the amount you paid"
//               className="w-full px-4 py-2 border rounded-md text-sm text-black mb-4"
//               required
//             />

//             {/* Transaction ID */}
//             <label htmlFor="transactionId" className="text-sm text-black mb-2 block">
//               Transaction ID:
//             </label>
//             <input
//               id="transactionId"
//               type="text"
//               value={transactionId}
//               onChange={(e) => setTransactionId(e.target.value)}
//               placeholder="Enter your transaction ID"
//               className="w-full px-4 py-2 border rounded-md text-sm text-black mb-4"
//               required
//             />

//             {/* Screenshot Upload */}
//             <label htmlFor="screenshot" className="text-sm text-black mb-2 block">
//               Upload Screenshot of Payment Proof:
//             </label>
//             <input
//               id="screenshot"
//               type="file"
//               onChange={handleScreenshotChange}
//               accept="image/*"
//               className="w-full px-4 py-2 border rounded-md text-sm text-black mb-4"
//               required
//             />
//             {screenshot && <p className="text-xs text-green-600 mt-2">Screenshot uploaded: {screenshot.name}</p>}

//             {/* Confirm Payment Button */}
//             <div className="flex justify-center items-center space-x-4">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg w-1/2"
//               >
//                 Confirm Payment
//               </button>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setPaymentAmount('');
//                   setTransactionId('');
//                   setScreenshot(null);
//                 }}
//                 className="bg-gray-500 text-white px-6 py-3 rounded-md text-lg w-1/2"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckOutDataForm;

// const CheckOutDataForm = () => {
//     return (
//       <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 w-full p-6">
//         <div className="text-center text-xl font-bold text-black mb-4">
//           Please pay your bill via:
//         </div>

//         <div className="flex flex-col items-center space-y-4">
//           <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg w-full md:w-3/4">
//             Bank Transfer
//           </button>

//           <p className="text-md text-gray-700 mt-2">
//             For Bank Transfer, use the following details:
//           </p>

//           <div className="bg-white p-4 rounded-md shadow-lg mt-3">
//             <p className="text-sm text-black">
//               <strong>Bank Name:</strong> [Your Bank&apos;s Name]
//             </p>
//             <p className="text-sm text-black">
//               <strong>Account Holder&apos;s Name:</strong> [Your Name or Business Name]
//             </p>
//             <p className="text-sm text-black">
//               <strong>Account Number:</strong> [Your Account Number]
//             </p>
//             <p className="text-sm text-black">
//               <strong>SWIFT/BIC Code:</strong> [SWIFT/BIC Code]
//             </p>
//             <p className="text-sm text-black">
//               <strong>IBAN (if applicable):</strong> [IBAN]
//             </p>
//             <p className="text-sm text-black">
//               <strong>Bank Address:</strong> [Bank Address]
//             </p>
//           </div>

//           <button className="bg-green-500 text-white px-6 py-3 rounded-md text-lg w-full md:w-3/4 mt-4">
//             Confirm Payment
//           </button>
//         </div>
//       </div>
//     );
//   };

//   export default CheckOutDataForm;
