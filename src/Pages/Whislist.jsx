import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const WishList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const wishListData =
      JSON.parse(localStorage.getItem("food_wishlist")) || [];
    setData(wishListData);
  }, []);

  const handleDelete = (id) => {
    let newWishListData = data.filter((food) => food.idMeal !== id);

    // Update the state with the filtered array
    setData(newWishListData);

    // Update the localStorage with the new array
    localStorage.setItem("food_wishlist", JSON.stringify(newWishListData));
  };

  return (
    <>
      <h2 className="mt-10 font-mono font-bold text-center text-3xl">
        WishList : {data.length}
      </h2>

      <div className="grid grid-cols-1 w-[80%] m-auto mt-20 gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">
        {data?.length > 0 ? (
          data.map((food) => (
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
                icon={faTrashCan}
                className="absolute top-2 right-2 text-2xl bg-slate-300 p-2 text-red-500 rounded-full cursor-pointer hover:text-3xl all ease-in-out delay-200"
                onClick={() => handleDelete(food.idMeal)}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-xl font-semibold">
            No Wishlist found Here.
          </p>
        )}
      </div>
    </>
  );
};
