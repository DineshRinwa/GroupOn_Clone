import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowDownShortWide,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Coupons = () => {
  const [getdata, setGetData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [category, setCategory] = useState("Vegetarian");

  // Get LocalStroreage
  let wishListData = JSON.parse(localStorage.getItem("food_wishlist")) || [];

  const fetchData = async () => {
    setIsLoading(true);
    setGetData(null); // Clear previous data before fetching new data
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php`;

    // Build the URL based on the filters
    if (category && !filterCategory && !filterCountry) {
      url += `?c=${category}`;
    }

    if (filterCategory) {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filterCategory}`;
      setCategory(null);
    }

    if (filterCountry) {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filterCountry}`;
      setCategory(null);
    }

    try {
      console.log("Fetching data from:", url);
      const res = await fetch(url);
      const data = await res.json();

      if (data.meals) {
        setGetData(data.meals); // Only set data if there are meals returned
      } else {
        setGetData([]); // Handle no meals found case
      }
    } catch (error) {
      console.log("Error fetching data:", error.message);
      setGetData([]); // Clear data on error
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddWishlist = (food, id) => {
    // Check if the food item already exists in the wishlist
    const isAlreadyInWishlist = wishListData.some((item) => item.idMeal === id);

    if (isAlreadyInWishlist) {
      alert("Food already exists in the Wishlist");
    } else {
      // Add the food to the wishlist if it's not already present
      wishListData.push(food);
      localStorage.setItem("food_wishlist", JSON.stringify(wishListData));
    }
  };

  useEffect(() => {
    fetchData();
  }, [filterCategory, filterCountry]);

  return (
    <>
      {isLoading && (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      {/* Filter and sort */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-evenly items-center gap-5 mt-20 mx-auto  max-w-4xl">
        <div>
          <label>
            Category <FontAwesomeIcon icon={faFilter} /> :{" "}
          </label>
          <select
            className="border p-2"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Seafood">Seafood</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>

        <Link to={"/local-10/random-meal"}>
          <button className="border-2 bg-black text-white p-3 rounded-md font-bold space-x-2">
            Generate Random Meal
          </button>
        </Link>

        <div>
          <label>
            Sort By Brand <FontAwesomeIcon icon={faArrowDownShortWide} /> :{" "}
          </label>
          <select
            className="border p-2"
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
          >
            <option value="">All Famous Food Of Country</option>
            <option value="indian">Indian</option>
            <option value="chinese">Chinese</option>
            <option value="Canadian">Canadian</option>
            <option value="japanese">Japanese</option>
            <option value="italian">Italian</option>
            <option value="american">American</option>
          </select>
        </div>
      </div>

      <div
        key={121}
        className="grid grid-cols-1 w-[80%] m-auto mt-20 gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative"
      >
        {getdata?.length > 0 ? (
          getdata.map((food) => (
            <div
              key={food.idMeal}
              className="border-2 rounded-xl bg-yellow-50 relative"
              style={{ boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px` }}
            >
              <img
                src={food.strMealThumb}
                alt={food.strMeal}
                className="rounded-tl-xl rounded-tr-xl"
              />
              <h2 className="m-3 text-2xl text-center font-bold text-black">
                {food.strMeal}
              </h2>

              {/* Absolute Positioned icon */}
              <FontAwesomeIcon
                icon={faHeart}
                className="absolute top-2 right-2 text-2xl bg-slate-300 p-2 text-red-500 rounded-full cursor-pointer hover:text-3xl all ease-in-out delay-200"
                onClick={() => handleAddWishlist(food, food.idMeal)}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-xl font-semibold">
            No meals found for the selected filters.
          </p>
        )}
      </div>
    </>
  );
};
