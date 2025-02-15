import { useState } from "react";
import useAuth from "@/hooks/useAuth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {resetPassword}=useAuth()


  const handleReset = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    resetPassword(email)
      .then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    //   setMessage("Password reset email sent! Check your inbox.");
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="bg-gray-500 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 text-baseColor bg-transparent border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send Reset Email"}
          </button>
        </form>
        {message && <p className="text-green-500 mt-2">{message}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
