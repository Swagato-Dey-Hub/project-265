import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidUserRectangle } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    window.dispatchEvent(new Event("authChange"));
    navigate("/login");
  };

  // Fetch user profile from backend
  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        // alert("User not logged in! Redirecting to login...");
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load profile");
        }

        setUser(data);
      } catch (error) {
        console.error("❌ Profile fetch error:", error.message);
        alert("Error fetching profile: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-bold">Loading profile...</h2>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-bold text-red-500">No user data found.</h2>
      </div>
    );
  }

  return (
    <>
      <div className="h-full w-3/6 flex flex-col items-center">
        <div className="font-bold text-2xl my-5">Profile</div>

        <div className="h-[80%] w-[65%] border-2 border-gray-300 p-6 rounded-2xl flex flex-col items-center gap-6 shadow-md">
          <div className="flex justify-center">
            <div className="border-2 border-gray-400 rounded-full p-4">
              <AiOutlineUser className="h-10 w-10" />
            </div>
          </div>

          <div className="w-[70%] flex flex-col gap-8 p-3">
            {/* Name */}
            <div className="flex items-center gap-7">
              <BiSolidUserRectangle className="h-9 w-9 text-blue-700" />
              <div>
                <div className="text-lg font-bold">Name</div>
                <div className="text-sm font-bold">{user.name}</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-7">
              <MdEmail className="h-9 w-9 text-blue-700" />
              <div>
                <div className="text-lg font-bold">Email</div>
                <div className="text-sm font-bold">{user.email}</div>
              </div>
            </div>

            {/* Phone No */}
            <div className="flex items-center gap-7">
              <FaPhoneAlt className="h-7 w-7 text-blue-700" />
              <div>
                <div className="text-lg font-bold">Phone No</div>
                <div className="text-sm font-bold">{user.phoneno}</div>
              </div>
            </div>
            <div className="flex items-center justifuy-center">
              {/* Give me a beautiful button code for logout */}
              <button
                onClick={handleLogout}
                className="mt-4 px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
