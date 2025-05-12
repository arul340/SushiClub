import PropTypes from "prop-types";
import { motion } from "framer-motion";

const MobileMenu = ({ showMenu }) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <motion.div
      animate={showMenu ? "open" : "closed"}
      variants={variants}
      className={`${
        showMenu ? "top-16" : "-top-full"
      } bg-amber-100 fixed left-0 w-full h-[300px] transition-all duration-500 ease-in-out z-50 md:hidden rounded-2xl}`}
    >
      <div className="flex flex-col h-full">
        <nav className="flex flex-col justify-center items-center text-center p-4 ">
          <ul className="space-y-4 text-xl">
            <li className="font-semibold hover:scale-105 hover:text-primary duration-300  text-black">
              <a href="">Home</a>
            </li>
            <li className="font-semibold hover:scale-105 hover:text-primary duration-300  text-black">
              <a href="">About</a>
            </li>
            <li className="font-semibold hover:scale-105 hover:text-primary duration-300  text-black">
              <a href="">Products</a>
            </li>
            <li className="font-semibold hover:scale-105 hover:text-primary duration-300  text-black">
              <a href="/biomass">Contact</a>
            </li>
          </ul>
          <div className="mt-4">
            <button className="flex justify-center items-center py-2 px-4 rounded-xl text-xl font-bold bg-yellow-300 hover:bg-yellow-200 cursor-pointer ">
              Get Started
            </button>
          </div>
          <div className="text-center p-4">
            <hr className="border-1 border-slate-900" />
            <h1>© 2025 All Rights Reserved || Sushi Club</h1>
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

MobileMenu.propTypes = {
  showMenu: PropTypes.bool,
};

export default MobileMenu;
