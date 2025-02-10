import useCarts from "@/hooks/useCart";

const CheckOut = () => {
  const [cart] = useCarts();
  const totalPrice=cart.reduce((acc,curr)=>acc+curr.price*curr.quantity,0)
  return (
    <div className="flex flex-col-reverse lg:flex-row  w-full min-h-screen">
      <div className="flex justify-center items-center bg-black lg:w-1/2 px-12 py-2">
        <div className="w-full space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight ">
            Your selected Products: {cart.length || 0}
          </h1>
          <hr />
          <div className="h-full overflow-y-auto scroll-smooth flex-grow no-scrollbar">
            <div className="grid gap-6 py-4 overflow-y-auto overflow-x-hidden ">
              {cart.map((product) => {
                return (
                  <div key={product._id} className="border p-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <h1 className="text-lg font-bold">
                          {product?.productName}
                        </h1>
                      </div>
                      <div>
                        <p className="text-lg font-bold">{product?.price}৳</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <span className="px-4 capitalize">
                        quantity : {product.quantity}
                      </span>
                      <span className="px-4 capitalize">
                        total Price : {product.price * product.quantity}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center bg-gray-200 px-4 py-12 sm:px-6 lg:px-8"></div>
    </div>
  );
};

export default CheckOut;
