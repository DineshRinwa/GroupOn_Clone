// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSpa,
//   faArrowsTurnToDots,
//   faGift,
//   faHouseChimney,
//   faLocationDot,
//   faCouch,
//   faCookieBite,
//   faTicket,
//   faUtensils,
// } from "@fortawesome/free-solid-svg-icons";

// export const Feature2 = () => {
//   return (
//     <div className="border-2 border-red mt-4 flex justify-between gap-7 w-[100%] m-auto sm:w-[80%] sm:overflow-hidden ">
//       <Link
//         to="beauty-and-spas"
//         className="hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100"
//       >
//         <FontAwesomeIcon icon={faSpa} className="mr-1" /> Beauty & Spas
//       </Link>

//       <Link
//         to="things-to-do"
//         className="hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100"
//       >
//         {" "}
//         <FontAwesomeIcon icon={faArrowsTurnToDots} className="mr-1" />
//         Things To Do
//       </Link>

//       <Link
//         to="gifts"
//         className="hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100"
//       >
//         {" "}
//         <FontAwesomeIcon icon={faGift} className="mr-1" /> Gifts
//       </Link>
//       <Link
//         to="auto-and-home"
//         className="hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100"
//       >
//         <FontAwesomeIcon icon={faHouseChimney} className="mr-1" />
//         Auto & Home
//       </Link>
//       <Link
//         to="food-and-drink"
//         className="hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100"
//       >
//         {" "}
//         <FontAwesomeIcon icon={faUtensils} className="mr-1" /> Food & Drink
//       </Link>
//       <Link
//         to="local"
//         className="hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100"
//       >
//         {" "}
//         <FontAwesomeIcon icon={faLocationDot} className="mr-1" /> Local
//       </Link>
//       <Link
//         to="travel"
//         className="hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100"
//       >
//         <FontAwesomeIcon icon={faCouch} className="mr-1" /> Travel
//       </Link>
//       <Link
//         to="goods"
//         className="hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100"
//       >
//         {" "}
//         <FontAwesomeIcon icon={faCookieBite} className="mr-1" /> Goods
//       </Link>
//       <Link
//         to="coupons"
//         className="hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100"
//       >
//         {" "}
//         <FontAwesomeIcon icon={faTicket} className="mr-1" />
//         Coupons
//       </Link>
//     </div>
//   );
// };

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSpa,
  faGift,
  faUtensils,
  faTicket,
  faCouch,
  faHouseChimney,
  faLocationDot,
  faArrowsTurnToDots,
  faCookieBite,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import DropdownLink from "./Droplink";
import { HoverContext } from "../Context/HoverLink";

export const Feature2 = () => {
  const { isHovered, setIsHovered , setHoverName} = useContext(HoverContext);
  const [activeLink, setActiveLink] = useState(null);
  const scrollContainer = useRef(null);

  // left button fun
  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // right button fun
  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="relative mt-4 w-full m-auto flex justify-center">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 pl-4 pr-4 pt-2 pb-2 rounded-full z-10  xl:hidden"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Links Container */}
      <div
        ref={scrollContainer}
        className="relative flex justify-between overflow-x-scroll scrollbar-hide gap-4 p-4 sm:gap-5 w-[90%] xl:overflow-hidden"
      >
        {/* <Link
          to="/local-1/beauty-and-spas"
          className={`hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100 text-base sm:text-lg flex items-center whitespace-nowrap ${
            activeLink === "beauty-and-spas" ? "text-yellow-500" : ""
          } `}
          onClick={() => handleClick("beauty-and-spas")}
        >
          <FontAwesomeIcon icon={faSpa} className="mr-2 hidden sm:inline" />{" "}
          Beauty & Spas
        </Link> */}

        <Link
          to="/local-1/beauty-and-spas"
          className={`hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100 text-base sm:text-lg flex items-center whitespace-nowrap sm:relative ${
            activeLink === "beauty-and-spas" ? "text-yellow-500" : ""
          } `}
          onClick={() => handleClick("beauty-and-spas")}
          onMouseEnter={() => {
            setIsHovered(true), setHoverName("beauty-and-spas");
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon icon={faSpa} className="mr-2 hidden sm:inline" />{" "}
          Beauty & Spas
        </Link>

        <Link
          to="/local-2/things-to-do"
          className={`hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100 text-base sm:text-lg flex items-center whitespace-nowrap ${
            activeLink === "things-to-do" ? "text-yellow-500" : ""
          } `}
          onClick={() => handleClick("things-to-do")}
          onMouseEnter={() => {
            setIsHovered(true), setHoverName("things-to-do");
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon
            icon={faArrowsTurnToDots}
            className="mr-2 hidden sm:inline"
          />
          Things To Do
        </Link>

        <Link
          to="/local-3/gifts"
          className={`hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100 text-base sm:text-lg flex items-center whitespace-nowrap ${
            activeLink === "gifts" ? "text-yellow-500" : ""
          } `}
          onClick={() => handleClick("gifts")}
          onMouseEnter={() => {
            setIsHovered(true), setHoverName("gifts");
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon icon={faGift} className="mr-2 hidden sm:inline" />{" "}
          Gifts
        </Link>

        <Link
          to="/local-4/auto-and-home"
          className={`hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100 text-base sm:text-lg flex items-center whitespace-nowrap ${
            activeLink === "auto-and-home" ? "text-yellow-500" : ""
          } `}
          onClick={() => handleClick("auto-and-home")}
          onMouseEnter={() => {
            setIsHovered(true), setHoverName("auto-and-home");
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon
            icon={faHouseChimney}
            className="mr-2 hidden sm:inline"
          />
          Auto & Home
        </Link>

        <Link
          to="/local-5/food-and-drink"
          className={`hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100 text-base sm:text-lg flex items-center whitespace-nowrap ${
            activeLink === "food-and-drink" ? "text-yellow-500" : ""
          } `}
          onClick={() => handleClick("food-and-drink")}
          onMouseEnter={() => {
            setIsHovered(true), setHoverName("food-and-drink");
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon
            icon={faUtensils}
            className="mr-2 hidden sm:inline"
          />{" "}
          Food & Drink
        </Link>

        <Link
          to="/local-6/local"
          className={`hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100 text-base sm:text-lg flex items-center whitespace-nowrap ${
            activeLink === "local" ? "text-yellow-500" : ""
          } `}
          onClick={() => handleClick("local")}
          onMouseEnter={() => {
            setIsHovered(true), setHoverName("local");
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon
            icon={faLocationDot}
            className="mr-2 hidden sm:inline"
          />{" "}
          Local
        </Link>

        <Link
          to="/local-7/travel"
          className={`hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100 text-base sm:text-lg flex items-center whitespace-nowrap ${
            activeLink === "travel" ? "text-yellow-500" : ""
          } `}
          onClick={() => handleClick("travel")}
          onMouseEnter={() => {
            setIsHovered(true), setHoverName("travel");
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon icon={faCouch} className="mr-2 hidden sm:inline" />{" "}
          Travel
        </Link>

        <Link
          to="/local-8/goods"
          className={`hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100 text-base sm:text-lg flex items-center whitespace-nowrap ${
            activeLink === "goods" ? "text-yellow-500" : ""
          } `}
          onClick={() => handleClick("goods")}
          onMouseEnter={() => {
            setIsHovered(true), setHoverName("goods");
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon
            icon={faCookieBite}
            className="mr-2 hidden sm:inline"
          />{" "}
          Goods
        </Link>

        <Link
          to="/local-9/coupons"
          className={`hover:text-yellow-500 transition-all ease-in-out duration-100 delay-100 text-base sm:text-lg flex items-center whitespace-nowrap ${
            activeLink === "coupons" ? "text-yellow-500" : ""
          } `}
          onClick={() => handleClick("coupons")}
          onMouseEnter={() => {
            setIsHovered(true), setHoverName("coupons");
          }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon icon={faTicket} className="mr-2 hidden sm:inline" />{" "}
          Coupons
        </Link>
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 pl-4 pr-4 pt-2 pb-2 rounded-full z-10 xl:hidden"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};
