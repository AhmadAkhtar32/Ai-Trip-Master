import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp.data);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => GetUserProfile(tokenResponse),
    onError: (error) => console.log(error),
  });

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-transparent via-black/60 to-transparent z-50 py-4 px-8 flex justify-between items-center backdrop-blur-md">
      {/* Logo */}
      <div>
        <img
          src="/src/assets/Pictures/Logo.png"
          alt="Logo"
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Authentication Section */}
      <div className="flex items-center gap-x-6">
        {user ? (
          <div className="flex items-center gap-x-4">
            {/* My Trips Button */}
            <a href="/my-trip">
              <Button className="py-2 px-6 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all">
                My Trips
              </Button>
            </a>

            {/* User Profile Picture */}
            <img
              className="h-12 w-12 rounded-full cursor-pointer border-2 border-white hover:scale-110 transition-transform"
              src={user?.picture}
              alt="User"
              onClick={() => {
                googleLogout();
                localStorage.clear();
                window.location.reload();
              }}
            />
          </div>
        ) : (
          <button
            onClick={login}
            className="py-2 px-6 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition-all"
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
