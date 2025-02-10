const CheckOut = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row  w-full min-h-screen">
      <div className="flex justify-center items-center bg-black lg:w-1/2 px-12">
        <div className="max-w-md border-red-500 border space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight ">
            Something Special is waiting for you
          </h1>
          <div className="w-full">
            <div className=""></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center bg-gray-200 px-4 py-12 sm:px-6 lg:px-8"></div>
    </div>
  );
};

export default CheckOut;
