import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";

const UserAccount = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-2xl xl:max-w-2xl sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-muted shadow-2xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://i.ibb.co.com/pRWqSTN/canva-colorful-festive-shapes-facebook-cover-42-Svf-FCPOhs.jpg"
          alt="Banner Image"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden flex justify-center items-center bg-gray-600">
        <img
          className="object-cover object-center h-32"
          src={user?.photoURL || "https://icons.veryicon.com/png/o/system/ali-mom-icon-library/random-user.png"}
          alt={`${user?.displayName} Profile Picture`}
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{user?.displayName || "Anonymous"} </h2>
        <p>{user?.email}</p>
        {/* <p className="text-gray-500">User</p> */}
      </div>
      <div className="p-4 border-t mx-8 mt-2 flex justify-center items-center">
        <Button>Change Name</Button>
      </div>
    </div>
  );
};

export default UserAccount;
