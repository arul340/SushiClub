import { RiMenu2Line, RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

const navbarData = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Products",
    link: "/about",
  },
  {
    id: 4,
    name: "Contact",
    link: "/about",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 md:relative px-4 py-4 shadow-xl bg-amber-100 "
      >
        <div className="flex flex-row justify-between items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-3xl md:text-5xl  font-extrabold">
              Sushi<span className="text-red-500">Club</span>
            </h1>
          </div>
          {/* Right Section */}
          <div className="hidden md:flex justify-between items-center gap-6">
            {navbarData.map((item) => (
              <ul
                key={item.id}
                className="text-2xl font-bold animation hover:scale-105 duration-300 ease-in-out cursor-pointer"
              >
                <li>
                  <a href={item.link}>{item.name}</a>
                </li>
              </ul>
            ))}
            <button className="py-2 px-4 rounded-xl text-2xl font-bold bg-yellow-300 hover:bg-yellow-200 cursor-pointer ">
              Get Started
            </button>
          </div>

          {/* Mobile Menu  */}

          <div className="md:hidden ">
            <div>
              {showMenu ? (
                <RiMenu3Fill
                  onClick={toogleMenu}
                  className="text-3xl"
                  size={30}
                />
              ) : (
                <RiMenu2Line
                  onClick={toogleMenu}
                  className="text-3xl"
                  size="30"
                />
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/*Mobile Menu */}
      <MobileMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
