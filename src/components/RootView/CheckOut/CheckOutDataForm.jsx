import { useState } from "react";

const BillingAddressForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsappNumber: "",
    companyUrl: "",
    reviewType: "",
    skypeId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send form data to a server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500">
      <div className="p-10 rounded-3xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-purple-800 mb-8">
          Billing and Contact Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="text-lg font-medium text-blue-600"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your full name"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-lg font-medium text-blue-600"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              className="w-full px-4 py-3 mt-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your email address"
            />
          </div>

          {/* WhatsApp Number */}
          <div className="flex flex-col">
            <label
              htmlFor="whatsappNumber"
              className="text-lg font-medium text-blue-600"
            >
              WhatsApp Number (
              <span className="text-red-600 font-bold">With Country Code</span>)
            </label>
            <input
              id="whatsappNumber"
              name="whatsappNumber"
              type="tel"
              value={formData.whatsappNumber}
              onChange={handleChange}
              required
              pattern="^\+[1-9]{1}[0-9]{3,14}$"
              placeholder="+1 234 567 890"
              className="w-full px-4 py-3 mt-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Company URL */}
          <div className="flex flex-col">
            <label
              htmlFor="companyUrl"
              className="text-lg font-medium text-blue-600"
            >
              Company URL
            </label>
            <input
              id="companyUrl"
              name="companyUrl"
              type="url"
              value={formData.companyUrl}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your company website URL"
            />
          </div>

          {/* Review Type */}
          <div className="flex flex-col">
            <label
              htmlFor="reviewType"
              className="text-lg font-medium text-blue-600"
            >
              Review Type
            </label>
            <select
              id="reviewType"
              name="reviewType"
              value={formData.reviewType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="">Select review type</option>
              <option value="Product Review">Product Review</option>
              <option value="Service Review">Service Review</option>
              <option value="Website Review">Website Review</option>
            </select>
          </div>

          {/* Skype ID */}
          <div className="flex flex-col">
            <label
              htmlFor="skypeId"
              className="text-lg font-medium text-blue-600"
            >
              Skype ID
            </label>
            <input
              id="skypeId"
              name="skypeId"
              type="text"
              value={formData.skypeId}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-2 border-2 border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Skype ID"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg transition duration-300 ease-in-out hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-500"
            >
              Submit
            </button>
          </div>
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
