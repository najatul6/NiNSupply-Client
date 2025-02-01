import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const CheckoutModal = ({ isOpen, setIsOpen, totalPrice, userId }) => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const handleBkashPayment = async () => {
    setLoading(true);
    try {
      const response = await axiosSecure.post("/api/bkash/payment", { amount: totalPrice, userId });
      window.location.href = response.data.bkashURL; // Redirect to bKash payment gateway
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed! Please try again.");
    }
    setLoading(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full flex flex-col">
        <SheetHeader>
          <SheetTitle>Checkout</SheetTitle>
          <p>Total Price: {totalPrice}৳</p>
        </SheetHeader>
        <SheetFooter>
          <Button onClick={handleBkashPayment} disabled={loading}>
            {loading ? "Processing..." : "Pay with bKash"} <MdOutlineShoppingCartCheckout />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CheckoutModal;
