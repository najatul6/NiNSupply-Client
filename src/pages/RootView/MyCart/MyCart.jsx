import OrderCard from "@/components/RootView/MyCart/OrderCard";

const MyCart = () => {
  return (
    <div>
      <div className="grid gap-6 py-4 overflow-y-auto overflow-x-hidden">
        <div className="grid grid-cols-1 gap-6">
          <OrderCard />
        </div>
      </div>
    </div>
  );
};

export default MyCart;
