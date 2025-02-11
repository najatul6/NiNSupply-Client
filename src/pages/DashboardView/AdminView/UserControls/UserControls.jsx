import { useState } from "react";
import DateComponent from "@/components/common/DateComponent";
import useAllUser from "@/hooks/useAllUser";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { FaSearch } from "react-icons/fa";

const UserControls = () => {
  const [allUsers, setAllUsers] = useAllUser();
  const [searchQuery, setSearchQuery] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleChangeRole = async (userId, newRole) => {
    try {
      await axiosSecure.patch(`/users/${userId}/role`, { role: newRole });
      setAllUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
    } catch (error) {
      console.error("Failed to update role", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axiosSecure.delete(`/users/${userId}`);
      setAllUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  const filteredUsers = allUsers?.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row lg:gap-6 justify-between items-center py-5">
        <h1 className="text-3xl text-white">Total Users: {filteredUsers?.length}</h1>
        <form className="max-w-[480px] w-full px-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border h-12 shadow border-lightTeal p-4 rounded-full bg-transparent focus:outline-none"
              placeholder="Search users"
            />
            <FaSearch className="text-lightTeal h-5 w-5 absolute top-3.5 right-3 fill-current" />
          </div>
        </form>
      </div>
      <section className="main-content w-full overflow-auto lg:p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 whitespace-nowrap">
              <tr>
                <th className="p-4 text-left text-sm font-medium text-white">Profile</th>
                <th className="p-4 text-left text-sm font-medium text-white">Name</th>
                <th className="p-4 text-left text-sm font-medium text-white">Email</th>
                <th className="p-4 text-left text-sm font-medium text-white">Role</th>
                <th className="p-4 text-left text-sm font-medium text-white">Joined At</th>
                <th className="p-4 text-left text-sm font-medium text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap">
              {filteredUsers?.map((user) => (
                <tr key={user?._id} className="even:bg-blue-50">
                  <td className="p-4 text-sm text-black">
                    <img src={user?.photoURL} alt={user?.name} className="w-10 h-10 rounded-full object-cover" />
                  </td>
                  <td className="p-4 text-sm text-black">{user?.name}</td>
                  <td className="p-4 text-sm text-black">{user?.email}</td>
                  <td className="p-4 text-sm text-black capitalize">
                    <select
                      value={user?.role}
                      onChange={(e) => handleChangeRole(user._id, e.target.value)}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td className="p-4 text-sm text-black">
                    <DateComponent createdAt={user?.createdAt} />
                  </td>
                  <td className="p-4">
                    <button onClick={() => handleDeleteUser(user._id)} className="mr-4" title="Delete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 fill-red-500 hover:fill-red-700"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default UserControls;