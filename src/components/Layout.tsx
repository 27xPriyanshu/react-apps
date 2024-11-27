import React, { createContext, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import CartDrawer from "./CartDrawer";
import Signup from "./Signup";
import { isLoggedIn, signupformOpen } from "@/utils/store";

<<<<<<< HEAD
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
=======
function Layout() {
	const [iscartVisible, setIscartVisible] = useState(false);

	const singupformState = useContext(signupformOpen);

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { loggedIn } = isLoggedIn();
	console.log("loggedin", loggedIn);

	return (
		<signupformOpen.Provider value={{ isOpen, setIsOpen }}>
			<header className='w-screen max-w-7xl    h-fit relative flexCenter'>
				<Link
					to={"/"}
					className='font-bold text-blue-400 font-serif mr-auto text-2xl'>
					ApnaShop
				</Link>
				<Link to={"/product-archive"}>Shop</Link>
				{!loggedIn && (
					<button
						onClick={() => {
							setIsOpen((prev: boolean) => !prev);
						}}>
						Login
					</button>
				)}
				<button
					onClick={() => {
						setIscartVisible((prev) => !prev);
					}}>
					Cart
				</button>
			</header>
			<Outlet />
			<CartDrawer
				setIscartVisible={setIscartVisible}
				isVisible={iscartVisible}
			/>
			<footer>This Is my Footer</footer>
			<Signup />
		</signupformOpen.Provider>
	);
}
>>>>>>> 3c0d68492cc23ab72174118ebfaee39627fd0194

export default Layout;

