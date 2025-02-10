const CheckOutDataForm = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200 w-full p-6">
        <div className="text-center text-xl font-bold text-black mb-4">
          Please pay your bill via:
        </div>
  
        <div className="flex flex-col items-center space-y-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg w-full md:w-3/4">
            Bank Transfer
          </button>
  
          <p className="text-md text-gray-700 mt-2">
            For Bank Transfer, use the following details:
          </p>
          
          <div className="bg-white p-4 rounded-md shadow-lg mt-3">
            <p className="text-sm text-black">
              <strong>Bank Name:</strong> [Your Bank&apos;s Name]
            </p>
            <p className="text-sm text-black">
              <strong>Account Holder&apos;s Name:</strong> [Your Name or Business Name]
            </p>
            <p className="text-sm text-black">
              <strong>Account Number:</strong> [Your Account Number]
            </p>
            <p className="text-sm text-black">
              <strong>SWIFT/BIC Code:</strong> [SWIFT/BIC Code]
            </p>
            <p className="text-sm text-black">
              <strong>IBAN (if applicable):</strong> [IBAN]
            </p>
            <p className="text-sm text-black">
              <strong>Bank Address:</strong> [Bank Address]
            </p>
          </div>
  
          <button className="bg-green-500 text-white px-6 py-3 rounded-md text-lg w-full md:w-3/4 mt-4">
            Confirm Payment
          </button>
        </div>
      </div>
    );
  };
  
  export default CheckOutDataForm;
  