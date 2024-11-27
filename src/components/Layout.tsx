import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import CartDrawer from "./CartDrawer";
import Signup from "./Signup";

const Layout: React.FC = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <>
      
      <header className="w-full bg-white shadow-lg py-4">
        <div className="container mx-auto flex items-center justify-between px-6">
         
          <Link
            to="/"
            className="text-blue-500 font-serif text-3xl font-bold hover:text-blue-700 transition duration-300"
          >
            ApnaShop
          </Link>

         
          <nav className="flex items-center space-x-6">
            <Link
              to="/product-archive"
              className="flex items-center text-gray-600 hover:text-blue-500 transition"
            >
              <BsShop className="mr-2 text-lg" />
              Shop
            </Link>
            <Signup />
          </nav>

          
          <button
            onClick={() => setIsCartVisible(!isCartVisible)}
            className="relative flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            <FaShoppingCart className="text-lg mr-2" />
            Cart
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </header>

     
      <main className="container mx-auto px-6 py-10">
        <Outlet />
      </main>

      
      <CartDrawer
        setIscartVisible={setIsCartVisible}
        isVisible={isCartVisible}
      />

    
      <footer className="w-full bg-gray-100 py-4 mt-10">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} ApnaShop. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Layout;

