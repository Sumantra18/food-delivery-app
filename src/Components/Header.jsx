import React from "react";
import Logo from "../img/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import Avatar from "../img/Avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async () => {
    const res = await signInWithPopup(firebaseAuth, provider);
    console.log(res);
  };
  return (
    <div className="fixed z-50 w-screen p-6 px-16">
      {/* Desktop and tablet view*/}

      <header className="hidden md:flex w-full h-full  items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold ">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdOutlineShoppingCart className="text-textColor text-2xl cursor-pointer" />

            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center bg-red-600">
              <p className="text-xs text-white font-semibold ">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer"
              alt="userprofile"
              onClick={login}
            />
          </div>
        </div>

        {/* Mobile view*/}

        <div className="flex md:hidden w-full h-full"></div>
      </header>
    </div>
  );
};

export default Header;
