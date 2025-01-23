import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FiUsers, FiUserCheck, FiUserX, FiCalendar } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { StoreContext } from "../context/Context";

const Customer = () => {
  const { customer } = useContext(StoreContext);

  const verifiedUsers = customer.filter((user) => user.verified).length;
  const unverifiedUsers = customer.filter((user) => !user.verified).length;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full h-screen bg-[#202938] p-6 overflow-hidden flex flex-col">
      {/* Stats section remains the same */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-6 mb-8"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 p-6 rounded-lg flex-1 min-w-[250px]"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#ffb701]/20 rounded-lg">
              <FiUsers className="text-[#ffb701] text-2xl" />
            </div>
            <div>
              <h3 className="text-white/60 text-sm">Total Users</h3>
              <p className="text-white text-2xl font-semibold">
                {customer.length}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 p-6 rounded-lg flex-1 min-w-[250px]"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#ffb701]/20 rounded-lg">
              <FiUserCheck className="text-[#ffb701] text-2xl" />
            </div>
            <div>
              <h3 className="text-white/60 text-sm">Verified Users</h3>
              <p className="text-white text-2xl font-semibold">
                {verifiedUsers}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 p-6 rounded-lg flex-1 min-w-[250px]"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#ffb701]/20 rounded-lg">
              <FiUserX className="text-[#ffb701] text-2xl" />
            </div>
            <div>
              <h3 className="text-white/60 text-sm">Unverified Users</h3>
              <p className="text-white text-2xl font-semibold">
                {unverifiedUsers}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* ... */}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="bg-white/10 rounded-lg overflow-hidden flex-1"
      >
        <div className="p-6">
          <h2 className="text-white text-xl font-semibold mb-4">
            User Management
          </h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-88px)]">
          <table className="w-full min-w-[800px]">
            <thead className="bg-[#ffb701]/10 sticky top-0">
              <tr>
                <th className="text-left text-white/60 p-4">Name</th>
                <th className="text-left text-white/60 p-4">Email</th>
                <th className="text-left text-white/60 p-4">Status</th>
                <th className="text-left text-white/60 p-4">Joined</th>
                <th className="text-left text-white/60 p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customer.map((user) => (
                <motion.tr
                  key={user._id}
                  variants={item}
                  className="border-b border-white/5"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ffb701]/20 flex items-center justify-center">
                        <span className="text-[#ffb701] font-medium">
                          {user.firstName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          {user.firstName} {user.lastName}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-white/80">{user.email}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.verified
                          ? "bg-green-500/20 text-green-500"
                          : "bg-yellow-500/20 text-yellow-500"
                      }`}
                    >
                      {user.verified ? "Verified" : "Pending"}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-white/80">
                      <FiCalendar className="text-[#ffb701]" />
                      <span>{formatDate(user.createdAt)}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <button className="text-white/60 hover:text-white">
                      <BsThreeDotsVertical />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Customer;
