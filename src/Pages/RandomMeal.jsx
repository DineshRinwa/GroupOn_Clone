import React, { useEffect, useState } from "react";

export const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;

  const fetchData = async (url) => {
    const api = await fetch(url);
    const res = await api.json();
    setRandomMeal(res.meals);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="h-[550px] w-[100%] flex flex-col items-center gap-2 p-1 overflow-y-auto scroll-container">
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-300 rounded-lg shadow-lg border border-gray-200">
        {randomMeal?.map((meal) => (
          <div key={meal.idMeal}>
            {/* Meal Image */}
            <div className="mb-4">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* Meal Title */}
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
              {meal.strMeal}
            </h2>

            {/* Meal Tags */}
            <div className="flex justify-center space-x-2 mb-4">
              {meal.strTags?.split(",").map((tag) => (
                <span
                  key={tag}
                  className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Ingredients */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Ingredients:
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {Array.from({ length: 12 }).map((_, i) => {
                  const ingredient = meal[`strIngredient${i + 1}`];
                  const measure = meal[`strMeasure${i + 1}`];
                  return (
                    ingredient && (
                      <li key={i}>
                        {measure} {ingredient}
                      </li>
                    )
                  );
                })}
              </ul>
            </div>

            {/* Instructions */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                Instructions:
              </h3>
              <p className="text-gray-600">{meal.strInstructions}</p>
            </div>

            {/* YouTube Link */}
            {meal.strYoutube && (
              <div className="text-center">
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Watch on YouTube
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
