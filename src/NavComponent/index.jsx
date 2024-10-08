import { Feature1 } from "./feature1";
import { Feature2 } from "./feature2";
import { Beauty } from "../Pages/Beauty";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { HoverContext } from "../Context/HoverLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { useState, useRef } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const {
    isHovered,
    setIsHovered,
    hoverName,
    openCart,
    setOpenCart,
    nameOfCart,
    setNameOfCart,
  } = useContext(HoverContext);
  const [sign, setSign] = useState("login");
  const [cartData, setCartData] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  // LocalStorage Get Data - Runs on component mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Add_Cart")) || [];
    setCartData(data);
  }, []);

  // cart Total Price
  const totalPrice = cartData.reduce((acc, item) => {
    // Ensure the price is a number and add it to the accumulator
    return acc + parseFloat(item.price || 0);
  }, 0);

  // Delete Cart Fun
  let hanldeCartDelete = (id) => {
    const newCart = cartData.filter((cart) => +cart.id !== +id);
    setCartData(newCart);
    localStorage.setItem("Add_Cart", JSON.stringify(cartData));
  };

  const handleSaveUser = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const obj = {
      name,
      email,
      password
    }

    //console.log(obj);
    localStorage.setItem("sign", JSON.stringify(obj));
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";

    navigate('/local-1/beauty-and-spas');
    setOpenCart(!openCart);
    setNameOfCart(null);
  }

  const handleClick = () => {
    setOpenCart(!openCart);
    setNameOfCart(null);
  };

  const handleClick1 = () => {
    setOpenCart(!openCart);
    setNameOfCart(null);
  };

  const handleSignIN = () => {
    setSign("login");
  };

  const handleSignInFirst = () => {
    setSign("new customer");
  };

  return (
    <>
      <div
        className="w-[100%] pb-3 relative"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <Feature1 />

        {/* cart div */}
        <div className="relative">
          {/* Dropdown */}
          {openCart && nameOfCart === "cart" && (
            <div className="absolute hidden md:flex right-52 min-w-[400px] min-h-[610px] flex-col space-y-1 rounded-md bg-white p-6 shadow-md z-50 border-2 border-amber-150">
              <div className="flex flex-col gap-2 p-2">
                <div className="p-2 flex justify-between items-center border-b-2 w-[100%]">
                  <h2 className="font-bold font-sans text-xl">Your Cart</h2>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="cursor-pointer font-lightBold font-sans text-3xl"
                    onClick={handleClick}
                  />
                </div>

                {/* Scrollable Cart Items */}
                <div
                  key={2222222}
                  className="h-[400px] w-[100%] flex flex-col items-center gap-2 p-1 overflow-y-auto scroll-container"
                >
                  {/* If No Cart Data */}
                  {cartData.length <= 0 ? (
                    <h2 className="font-black text-2xl font-mono">
                      No Cart Added!
                    </h2>
                  ) : (
                    ""
                  )}

                  {cartData?.map((cart) => (
                    <div className="w-full max-w-[96%] border-2 rounded-md bg-slate-300 p-4 md:flex md:items-center">
                      {/* Conditional rendering for image */}
                      {cart.image_link && (
                        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                          <img
                            src={cart.image_link}
                            alt={cart.name}
                            className="w-full h-auto rounded-md object-cover max-h-[200px]"
                          />
                        </div>
                      )}

                      {/* Product details */}
                      <div
                        className={`flex-1 ${cart.image_link ? "md:pl-6" : ""}`}
                      >
                        <h2 className="text-lg font-semibold text-center md:text-left">
                          {cart.name}
                        </h2>

                        <div className="flex justify-between items-center mt-4">
                          <span className="text-lg">Price: {cart.price}</span>
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            className="text-red-500 cursor-pointer"
                            onClick={() => hanldeCartDelete(cart.id)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col h-[100px] border-t-2">
                  <div className="flex justify-between w-[100%] h-[100%] mt-3">
                    <h2 className="font-bold font-sans text-md">SubTotal :</h2>
                    <h2 className="font-bold font-sans text-xl text-yellow-500">
                      ${totalPrice}
                    </h2>
                  </div>
                  <button className="bg-yellow-600 rounded-full p-4 text-cyan-50 font-semibold text-xl mt-3">
                    Process to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* notication bar */}
        <div className="relative">
          {/* Dropdown */}
          {openCart && nameOfCart === "bell" && (
            <div className="absolute hidden md:flex right-20 min-w-[600px] min-h-[610px] flex-col space-y-1 rounded-md bg-white p-6 shadow-md z-50 border-2 border-amber-150">
              <div className="flex flex-col gap-2 p-2">
                <div className="p-2 flex justify-between items-center border-b-2 w-[100%]">
                  <h2 className="font-bold font-sans text-2xl">
                    Notifications
                  </h2>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="cursor-pointer font-lightBold font-sans text-3xl"
                    onClick={handleClick1}
                  />
                </div>

                {/* Scrollable Cart Items */}
                <div className="h-[400px] w-[100%] flex flex-col items-center gap-2 p-1 overflow-y-auto scroll-container">
                  <div className="min-h-[180px] w-[96%] border-2 rounded-md bg-slate-400"></div>
                  <div className="min-h-[180px] w-[96%] border-2 rounded-md bg-slate-400"></div>
                  <div className="min-h-[180px] w-[96%] border-2 rounded-md bg-slate-400"></div>
                  <div className="min-h-[180px] w-[96%] border-2 rounded-md bg-slate-400"></div>
                  <div className="min-h-[180px] w-[96%] border-2 rounded-md bg-slate-400"></div>
                  <div className="min-h-[180px] w-[96%] border-2 rounded-md bg-slate-400"></div>
                  <div className="min-h-[180px] w-[96%] border-2 rounded-md bg-slate-400"></div>
                </div>

                <button
                  className="w-[90%] m-auto bg-black rounded-full p-3 text-cyan-50 font-semibold text-xl mt-3"
                  onClick={handleClick1}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sign in bar */}
        <div className="relative">
          {/* Dropdown */}
          {openCart && nameOfCart === "signIn" && (
            <div className="absolute hidden md:flex right-10 max-w-[500px] min-h-[610px] flex-col space-y-1 rounded-md bg-white p-6 shadow-md z-50 border-2 border-amber-150">
              <div className="flex flex-col gap-2 p-2">
                <div className="p-2 flex justify-between items-center border-b-2 w-[100%]">
                  <h2
                    className="font-bold text-md cursor-pointer pb-1 hover:text-lg hover:border-b-2 hover:border-black all ease-in-out delay-100"
                    onClick={handleSignIN}
                  >
                    I have a account
                  </h2>

                  <h2
                    className="font-bold text-md cursor-pointer pb-1 hover:text-lg hover:border-b-2 hover:border-black all ease-in-out delay-100"
                    onClick={handleSignInFirst}
                  >
                    I'm New Customer
                  </h2>
                </div>

                {sign === "login" ? (
                  <div className="h-[400px] w-[100%] flex flex-col items-center gap-2 p-1 overflow-y-auto scroll-container">
                    <div className="min-h-[380px] w-[96%] rounded-md flex flex-col  gap-4 justify-center items-center">
                      <input
                        type="text"
                        placeholder="Enter Email"
                        required
                        className="border-2 border-black rounded-full p-3 font-mono text-xl w-[90%]"
                      />

                      <input
                        type="text"
                        placeholder="Enter password"
                        required
                        className="border-2 border-black rounded-full p-3 font-mono text-xl w-[90%]"
                      />

                      <div className="flex justify-end w-[90%] cursor-pointer">
                        <p className="hover:border-b-2 border-black pb-1">
                          Forget Password ?
                        </p>
                      </div>

                      <button className="w-[90%] m-auto bg-yellow-500 text-black rounded-full p-3  font-semibold text-2xl mt-3">
                        Login 
                      </button>

                      <div className="flex flex-col gap-5">
                        <p className="text-sm text-wrap text-center p-1">
                          This site is protected by reCAPTCHA and the Google
                          Privacy Policy and Terms of Service apply.
                        </p>
                        <p className="text-sm text-wrap text-center p-1">
                          By clicking an option above, I agree to the Terms and
                          Conditions and have read the Privacy Statement.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[400px] w-[100%] flex flex-col items-center gap-2 p-1 overflow-y-auto scroll-container">
                    <div className="min-h-[380px] w-[96%] rounded-md flex flex-col  gap-4 justify-center items-center">
                      <input
                        type="text"
                        ref={nameRef}
                        placeholder="Enter Name"
                        required
                        className="border-2 border-black rounded-full p-3 font-mono text-xl w-[90%]"
                      />

                      <input
                        type="text"
                        ref={emailRef}
                        placeholder="Enter Email"
                        required
                        className="border-2 border-black rounded-full p-3 font-mono text-xl w-[90%]"
                      />

                      <input
                        type="text"
                        ref={passwordRef}
                        placeholder="Enter Password"
                        required
                        className="border-2 border-black rounded-full p-3 font-mono text-xl w-[90%]"
                      />

                      <div className="flex flex-col gap-5">
                        <p className="text-sm text-wrap text-center p-1">
                          By creating an account, you agree to our Terms of
                          Service
                        </p>
                      </div>

                      <button className="w-[90%] m-auto bg-yellow-500 text-black rounded-full p-3  font-semibold text-2xl mt-3" onClick={handleSaveUser}>
                        Sign In
                      </button>
                    </div>
                  </div>
                )}

                <button
                  className="w-[90%] m-auto bg-black rounded-full p-3 text-cyan-50 font-semibold text-xl mt-3"
                  onClick={handleClick1}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <Feature2 />

        {/* All Link Div */}
        {/* 1st div */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Dropdown */}
          {isHovered && hoverName === "beauty-and-spas" && (
            <div className="absolute hidden md:flex left-6 mt-2 min-w-[450px] flex-col space-y-1 rounded-md bg-white p-6 shadow-md z-50 border-2 border-amber-150">
              <h2 className="font-bold font-sans text-xl mb-2">
                Beauty & Spas
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <Link to="/">Message</Link>
                <Link to="/">Hair Removal</Link>
                <Link to="/">Face & Skin care</Link>
                <Link to="/">Spas</Link>
                <Link to="/">Hair & Styling</Link>
                <Link to="/">Health & Fitness</Link>
                <Link to="/">Weight Loss</Link>
                <Link to="/">Nail Solans</Link>
                <Link to="/">Dental</Link>
                <Link to="/">Tanning</Link>
              </div>
            </div>
          )}
        </div>

        {/* 2nd div */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Dropdown */}
          {isHovered && hoverName === "things-to-do" && (
            <div className="absolute hidden md:flex left-60 mt-2 min-w-[450px] flex-col space-y-1 rounded-md bg-white p-6 shadow-md z-50 border-2 border-amber-150">
              <h2 className="font-bold font-sans text-xl mb-2">Things To Do</h2>

              <div className="grid grid-cols-2 gap-4">
                <Link to="/">Fun & Leisure</Link>
                <Link to="/">Ticket & Events</Link>
                <Link to="/">Kids Activits</Link>
                <Link to="/">Sport & Outdoors</Link>
                <Link to="/">Photography</Link>
                <Link to="/">Bowing</Link>
                <Link to="/">Bowt Tours</Link>
                <Link to="/">Classes</Link>
                <Link to="/">Arcades</Link>
              </div>
            </div>
          )}
        </div>

        {/* 3rd div */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Dropdown */}
          {isHovered && hoverName === "gifts" && (
            <div className="absolute hidden md:flex left-60 mt-2 min-w-[450px] flex-col space-y-1 rounded-md bg-white p-6 shadow-md z-50 border-2 border-amber-150">
              <h2 className="font-bold font-sans text-xl mb-2">Gifts</h2>

              <div className="grid grid-cols-2 gap-4">
                <Link to="/">Birthday</Link>
                <Link to="/">Anniversary</Link>
                <Link to="/">Wedding</Link>
                <Link to="/">Graduation</Link>
                <Link to="/">Foodies</Link>
                <Link to="/">Relaxing</Link>
                <Link to="/">Care</Link>
                <Link to="/">Sports</Link>
                <Link to="/">Fun Leisure</Link>
                <Link to="/">House Warming</Link>
              </div>
            </div>
          )}
        </div>

        {/* 4th div */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Dropdown */}
          {isHovered && hoverName === "auto-and-home" && (
            <div className="absolute hidden md:flex left-96 mt-2 min-w-[450px] flex-col space-y-1 rounded-md bg-white p-6 shadow-md z-60 border-2 border-amber-150">
              <h2 className="font-bold font-sans text-xl mb-2">Auto & Home</h2>

              <div className="grid grid-cols-2 gap-4">
                <Link to="/">Oil Change</Link>
                <Link to="/">Auto Repair & Maintenance</Link>
                <Link to="/">Car Wash</Link>
                <Link to="/">Parking</Link>
                <Link to="/">Home Servies</Link>
                <Link to="/">Cleaning Servies</Link>
                <Link to="/">Furniture</Link>
                <Link to="/">Bedding</Link>
                <Link to="/">Patio, Lawn & Garden</Link>
                <Link to="/">Kitchan & Dining</Link>
              </div>
            </div>
          )}
        </div>

        {/* 5th div */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Dropdown */}
          {isHovered && hoverName === "food-and-drink" && (
            <div className="absolute hidden md:flex right-96 mt-2 min-w-[450px] flex-col space-y-1 rounded-md bg-white p-6 shadow-md z-50 border-2 border-amber-150">
              <h2 className="font-bold font-sans text-xl mb-2">Food & Drink</h2>

              <div className="grid grid-cols-2 gap-4">
                <Link to="/">Restaurants</Link>
                <Link to="/">Cafes & Treats</Link>
                <Link to="/">Bakeries</Link>
                <Link to="/">Bars</Link>
                <Link to="/">Breweries</Link>
                <Link to="/">Groceries & Markets</Link>
                <Link to="/">American Restaurants</Link>
                <Link to="/">Asian Restaurants</Link>
                <Link to="/">Latin American Restaurants</Link>
                <Link to="/">Pizza</Link>
                <Link to="/">Seafood Restaurants</Link>
                <Link to="/">Steakhouse</Link>
              </div>
            </div>
          )}
        </div>

        {/* 6th div */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Dropdown */}
          {isHovered && hoverName === "local" && (
            <div className="absolute hidden md:flex right-80 mt-2 min-w-[450px] flex-col space-y-1 rounded-md bg-white p-6 shadow-md z-50 border-2 border-amber-150">
              <h2 className="font-bold font-sans text-xl mb-2">
                Beauty & Spas
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <Link to="/">Beauty & Shas</Link>
                <Link to="/">Personal Services</Link>
                <Link to="/">Health & Fitness</Link>
                <Link to="/">Retail</Link>
                <Link to="/">Things To Do</Link>
                <Link to="/">Food & Drink</Link>
                <Link to="/">Auto Home Improvement</Link>
                <Link to="/">Home & Servies</Link>
              </div>
            </div>
          )}
        </div>

        {/* 7th div */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Dropdown */}
          {isHovered && hoverName === "travel" && (
            <div className="absolute hidden md:flex right-60 mt-2 min-w-[450px] flex-col space-y-1 rounded-md bg-white p-6 shadow-md z-50 border-2 border-amber-150">
              <h2 className="font-bold font-sans text-xl mb-2">Travel</h2>

              <div className="grid grid-cols-2 gap-4">
                <Link to="/">Air-Inclusive</Link>
                <Link to="/">WaterParks</Link>
                <Link to="/">Casions</Link>
                <Link to="/">Family</Link>
                <Link to="/">Romantic</Link>
                <Link to="/">Beach Destinations</Link>
                <Link to="/">City</Link>
                <Link to="/">Outdoor Activites</Link>
                <Link to="/">All-Inclusive</Link>
                <Link to="/">Cruies</Link>
                <Link to="/">Culinary</Link>
              </div>
            </div>
          )}
        </div>

        {/* 8th div */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Dropdown */}
          {isHovered && hoverName === "goods" && (
            <div className="absolute hidden md:flex right-10 mt-2 min-w-[750px] flex-col space-y-1 rounded-md bg-white p-6 shadow-md z-50 border-2 border-amber-150">
              <h2 className="font-bold font-sans text-xl mb-2">Goods</h2>

              <div className="grid grid-cols-5 gap-4">
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold font-sans text-xl mb-2">
                    Health & Beauty Products
                  </h2>
                  <Link to="/">Fragrance</Link>
                  <Link to="/">Vitamins & Supplements</Link>
                  <Link to="/">Sexual & Wellness</Link>
                  <Link to="/">Hair Care</Link>
                  <Link to="/">Personal Care</Link>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="font-bold font-sans text-xl mb-2">
                    For the Home
                  </h2>
                  <Link to="/">bedding</Link>
                  <Link to="/">Kitchen & Dining</Link>
                  <Link to="/">Face & Skin care</Link>
                  <Link to="/">Furniture</Link>
                  <Link to="/">Luggage</Link>
                  <Link to="/">OutDoor Decor</Link>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="font-bold font-sans text-xl mb-2">
                    Women's Fashion
                  </h2>
                  <Link to="/">Women's Clothing</Link>
                  <Link to="/">Women's Accessories</Link>
                  <Link to="/">Women's Shoes</Link>
                  <Link to="/">Intimates</Link>
                  <Link to="/">Maternity Clothing</Link>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="font-bold font-sans text-xl mb-2">
                    Personalized Gifts
                  </h2>
                  <Link to="/">Photo Book</Link>
                  <Link to="/">Custom Gifts</Link>
                  <Link to="/">Canvas & Photo Art</Link>
                  <Link to="/">Personalized Jewelry</Link>
                  <Link to="/">Clothing & Accessories</Link>
                  <Link to="/">Personalized Home Decor</Link>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="font-bold font-sans text-xl mb-2">More</h2>
                  <Link to="/">Flowers, Sweets & Baskets</Link>
                  <Link to="/">CBD</Link>
                  <Link to="/">Cell Phones & Accessories</Link>
                  <Link to="/">Electronics</Link>
                  <Link to="/">Software</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 9th div */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Dropdown */}
          {isHovered && hoverName === "coupons" && (
            <div className="absolute hidden md:flex right-6 mt-2 min-w-[450px] flex-col space-y-1 rounded-md bg-white p-6 shadow-md z-50 border-2 border-amber-150">
              <h2 className="font-bold font-sans text-xl mb-2">Coupons</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-2 flex-col">
                  <h2 className="font-bold font-sans text-xl mb-2">
                    Popular Brands
                  </h2>
                  <Link to="/">Amazon</Link>
                  <Link to="/">Costco</Link>
                  <Link to="/">Expedia</Link>
                  <Link to="/">eBay</Link>
                  <Link to="/">Great Clips</Link>
                  <Link to="/">Hotel.com</Link>
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-bold font-sans text-xl mb-2">Treading</h2>
                  <Link to="/">BetterShip</Link>
                  <Link to="/">Booking.com</Link>
                  <Link to="/">Budget</Link>
                  <Link to="/">Spas</Link>
                  <Link to="/">Cubelais</Link>
                  <Link to="/">HBO Max</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
