import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faHeart,
  faCartArrowDown,
  faBell,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { HoverContext } from "../Context/HoverLink";

export const Feature1 = () => {
  const { openCart, setOpenCart, nameOfCart, setNameOfCart } =
    useContext(HoverContext);
  const signData = JSON.parse(localStorage.getItem("sign"));

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  const handleBellName = () => {
    setNameOfCart("bell");
  };

  const handleCartName = () => {
    setNameOfCart("cart");
  };

  const handleSignIn = () => {
    setNameOfCart("signIn");
    handleOpenCart();
  };

  return (
    <div className="w-[100%] m-auto flex justify-between mt-2 sm:w-[90%] md:w-[80%]">
      <div className="min-w-[40%] sm:min-w-[20%] flex justify-center items-center gap-2 sm:justify-start">
        <FontAwesomeIcon
          icon={faBars}
          className="flex sm:hidden text-red-900 hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100"
        />
        <Link to="/local-1/beauty-and-spas">
          <h1 className=" font-sans text-yellow-500 text-[1rem] font-extrabold sm:text-4xl">
            GROUPON
          </h1>
        </Link>
      </div>

      <div className="min-w-[30%] flex justify-center">
        <input
          className="min-w-[80%] pl-4 pr-4 rounded-3xl hidden bg-gray-200  sm:flex"
          type="text"
          placeholder="Search for Deals"
        />
      </div>

      <div className="min-w-[30%] flex justify-around items-center">
        <div className="text-sm hover:cursor-pointer sm:text-2xl sm:flex">
          <Link to="/wishlist">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-yellow-500  transition-all ease-in-out duration-100 delay-100"
            />
          </Link>
        </div>
        <div
          className="text-sm hover:cursor-pointer sm:text-2xl sm:flex"
          onClick={() => {
            handleOpenCart();
            handleCartName();
          }}
        >
          <FontAwesomeIcon
            icon={faCartArrowDown}
            className="text-blue-900  hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100"
          />
        </div>
        <div
          className="text-2xl hover:cursor-pointer  hidden sm:flex"
          onClick={() => {
            handleOpenCart(), handleBellName();
          }}
        >
          <FontAwesomeIcon
            icon={faBell}
            className="hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100"
          />
        </div>

        {signData ? (
          <h2 className="font-bold text-2xl pl-3 pr-3 pt-1 pb-1 rounded-full bg-slate-200 ">
            {signData.name[0]}
          </h2>
        ) : (
          <div
            className="text-sm hover:cursor-pointer sm:text-2xl sm:flex hover:text-yellow-500 hover:border-yellow-500 transition-all ease-in-out duration-100 delay-100 border-2 border-slate-200 pl-3 pr-3 pt-2 pb-2  sm:pl-10 sm:pr-10 sm:pt-4 sm:pb-4 rounded-full"
            onClick={handleSignIn}
          >
            <FontAwesomeIcon icon={faRightToBracket} bounce />
          </div>
        )}
      </div>
    </div>
  );
};
