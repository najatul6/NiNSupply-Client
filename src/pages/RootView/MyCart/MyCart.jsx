const MyCart = () => {
  return (
    <div className="grid gap-6 py-4">
      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="border p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-lg font-bold">Product Name</h1>
                  <p className="text-sm">Product Description</p>
                </div>
                <div>
                  <p className="text-lg font-bold">Price</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <button className="bg-baseColor text-white px-4 py-1 rounded-md">
                    -
                  </button>
                  <span className="px-4">1</span>
                  <button className="bg-baseColor text-white px-4 py-1 rounded-md">
                    +
                  </button>
                </div>
                <div>
                  <button className="bg-red-500 text-white px-4 py-1 rounded-md">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
