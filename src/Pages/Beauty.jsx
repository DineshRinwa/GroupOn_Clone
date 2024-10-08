import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowDownShortWide,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Beauty = () => {
  const [getdata, setGetData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBrand, setFilterBrand] = useState("");


  const fetchData = async () => {
    let url = `https://makeup-api.herokuapp.com/api/v1/products.json`;
    // const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish`;

    if (filterBrand) {
      setGetData(null);
      url += `?brand=${filterBrand}`;
    }

    if(filterCategory){
      setGetData(null)
      url += `?product_type=${filterCategory}`;
    }

    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setGetData(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Make the API call when the component mounts
  useEffect(() => {
    fetchData();
  }, [filterBrand, filterCategory]); // Empty dependency array ensures this runs once on mount

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
      <div className="flex mt-20 justify-around gap-5 flex-col sm:flex-row items-center ">
        <div>
          <label>
            Category <FontAwesomeIcon icon={faFilter} /> :{" "}
          </label>
          <select className="border p-2"   value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="">All</option>
            <option value="blush">Blush</option>
            <option value="eyebrow">Eyebrow</option>
            <option value="bronzer">Bronzer</option>

            <option value="eyeliner">Eyeliner</option>
            <option value="eyeshadow">Eyeshadow</option>
            <option value="foundation">Foundation</option>

            <option value="lip_liner">Lip-Liner</option>
            <option value="lipstick">LipStick</option>
            <option value="nail_polish">Nail-Polish</option>

          </select>
        </div>

        <div>
          <label>
            Sort By Brand <FontAwesomeIcon icon={faArrowDownShortWide} /> :{" "}
          </label>
          <select className="border p-2"  value={filterBrand}
            onChange={(e) => setFilterBrand(e.target.value)}>
            <option value="">All Brand</option>
            <option value="almay">Almay</option>
            <option value="alva">Alva</option>
            <option value="orly">Orly</option>
            <option value="sante">Sante</option>
            <option value="suncoat">Suncoat</option>
            <option value="dior">Dior</option>
            <option value="covergirl">Covergirl</option>
            <option value="fenty">Fenty</option>
            <option value="zorah">Zorah</option>
          </select>
        </div>
      </div>

      <div
        key={12.1}
        className="grid grid-cols-1 w-[80%] m-auto mt-20 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative"
      >
        {getdata?.map((item) => (
          <Link to={`/local-1/beauty-and-spas/product/${item.id}`}>
            <div
              key={item.id}
              className="p-5 rounded-md flex justify-center gap-3 flex-col relative"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              {/* Image Container */}
              <div className="w-full rounded-md min-h-[200px] flex items-center justify-center bg-gray-100">
                {item.image_link ? (
                  <img
                    src={item.image_link}
                    alt="Product Image"
                    loading="lazy"
                    className="max-h-[200px] w-auto"
                  />
                ) : (
                  <div className="text-gray-500">No Image Available</div>
                )}
              </div>

              {/* Product Details */}
              <h2 className="font-semibold text-xl">{item.brand}</h2>
              <h2 className="font-semibold text-xl">{item.name}</h2>
              <p className="font-semibold text-md">
                <span className="font-bold text-xl">Category: </span>
                {item.category || "Unknown"}
              </p>
              <p>
                {item.price_sign || "$"}
                {item.price || "N/A"}
              </p>

              {/* Color Options */}
              <div className="flex flex-wrap gap-2 mt-2">
                {item.product_colors && item.product_colors.length > 0 ? (
                  item.product_colors.map((color, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color.hex_value }}
                      ></div>
                    </div>
                  ))
                ) : (
                  <p>No colors available</p>
                )}
              </div>

              {/* Absolute Positioned icon */}
              <FontAwesomeIcon
                icon={faHeart}
                className="absolute top-2 right-2 text-2xl bg-slate-300 p-2 text-red-500 rounded-full cursor-pointer hover:text-3xl all ease-in-out delay-200"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
