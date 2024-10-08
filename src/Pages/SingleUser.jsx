import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleUser = () => {
  const { product_id } = useParams();
  const [data, setData] = useState(null); // Initialize data as null
  const url = `http://makeup-api.herokuapp.com/api/v1/products/${product_id}.json`;

  // Get LocalStroage
  let localData = JSON.parse(localStorage.getItem("Add_Cart")) || [];

  const fetchData = async (url1) => {
    try {
      const api = await fetch(url1);
      const res = await api.json();
      setData(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  // Ensure localData is always an array
  if (!Array.isArray(localData)) {
    localData = [];
  }

  // Add data to cart
  const handleAddToCart = () => {
    const parsedProductId = Number(product_id);

    const isAlreadyInCartList = localData.some(
      (item) => item.id === parsedProductId
    );

    if (isAlreadyInCartList) {
      alert("Product Is Exits In Cart");
    } else {
      localData.push(data);
      localStorage.setItem("Add_Cart", JSON.stringify(localData));
    }
  };

  // Ensure data is available before rendering
  if (!data) {
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ); // You can add a loader here
  }

  return (
    <div className="container mx-auto p-4 w-[70%]">
      <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={data.image_link}
            alt={data.name}
            className="rounded-md object-cover max-h-[400px] shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          {/* Product Name and Brand */}
          <h1 className="text-2xl font-bold text-gray-800">{data.name}</h1>
          <h2 className="text-xl text-gray-600">by {data.brand}</h2>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-green-600">
              {data.price_sign}
              {data.price}
            </span>
            <span className="text-sm text-gray-500">{data.currency}</span>
          </div>

          {/* Description */}
          <p className="text-gray-700">{data.description}</p>

          {/* Categories */}
          <p className="text-gray-500">
            <span className="font-semibold text-gray-800">Category: </span>
            {data.category || "Unknown"}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {data.tag_list?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 border border-gray-200 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Color Options */}
          <div className="flex gap-4  flex-col">
            <h3 className="text-lg font-semibold">Available Colors:</h3>
            <div className="flex gap-2 flex-wrap">
              {data.product_colors?.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: color.hex_value }}
                  title={color.colour_name}
                ></div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={data.product_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition duration-150"
            >
              Buy Now
            </a>

            <a
              onClick={handleAddToCart}
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer px-6 py-2 text-white bg-red-500 rounded-md shadow-md hover:bg-red-700 transition duration-150"
            >
              Add To Cart
            </a>
            <a
              href={data.website_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-blue-600 bg-white border border-blue-600 rounded-md shadow-md hover:bg-blue-50 transition duration-150"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
