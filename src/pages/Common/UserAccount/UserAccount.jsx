import { useState } from "react";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { Dialog } from "@/components/ui/dialog"; // Assuming you have a Dialog component

const UserAccount = () => {
  const { user, updateUserName } = useAuth(); // Assuming updateUserName is part of your useAuth hook
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState(user?.displayName || "");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveNewName = () => {
    if (newName.trim()) {
      updateUserName(newName); // Function to update user name in your auth system
      setIsModalOpen(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white shadow-lg rounded-lg overflow-hidden text-gray-900">
      {/* Banner Image */}
      <div className="h-32 w-full">
        <img
          className="object-cover object-top w-full h-full"
          src="https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467_1280.jpg"
          alt="Profile Banner"
        />
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center -mt-16">
        <img
          className="w-32 h-32 border-4 border-white rounded-full object-cover bg-gray-200"
          src={user?.photoURL || "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"}
          alt={user?.displayName ? `${user.displayName} Profile Picture` : "User Profile Picture"}
        />
      </div>

      {/* User Info */}
      <div className="text-center mt-4 pb-4">
        <h2 className="text-xl font-semibold text-gray-800">{user?.displayName || "Anonymous"}</h2>
        <p className="text-gray-500">{user?.email || "No email provided"}</p>
      </div>

      {/* Action Button */}
      <div className="border-t px-6 py-4 flex justify-center">
        <Button className="w-full" onClick={handleOpenModal}>Change Name</Button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Dialog isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="p-6 bg-white rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Change Your Name</h3>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Enter new name"
            />
            <div className="mt-4 flex justify-between">
              <Button onClick={handleCloseModal} className="w-1/3">Cancel</Button>
              <Button onClick={handleSaveNewName} className="w-1/3">Save</Button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default UserAccount;
