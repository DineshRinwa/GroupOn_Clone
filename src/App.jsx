// import { Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import { Navbar } from "./NavComponent";
// import { Beauty } from "./Pages/Beauty.jsx";
// import { Things } from "./Pages/Things.jsx";
// import { Gifts } from "./Pages/Gifts.jsx";
// import { AutoHome } from "./Pages/AutoHome.jsx";
// import { FoodDrink } from "./Pages/FoodDrink.jsx";
// import { Local } from "./Pages/Local.jsx";
// import { Travel } from "./Pages/Travel.jsx";
// import { Goods } from "./Pages/Goods.jsx";
// import { Coupons } from "./Pages/Coupons.jsx";
// import { WishList } from "./Pages/Whislist.jsx";
// import { SingleUser } from "./Pages/SingleUser.jsx";
// import { RandomMeal } from "./Pages/RandomMeal.jsx";
// import { PrivateRoute } from "./Pages/PrivateRoute.jsx";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/local-1/beauty-and-spas" element={<Beauty />} />
//         <Route path="/local-2/things-to-do" element={<Things />} />
//         <Route path="/local-3/gifts" element={<Gifts />} />
//         <Route path="/local-4/auto-and-home" element={<AutoHome />} />
//         <Route path="/local-5/food-and-drink" element={<FoodDrink />} />
//         <Route path="/local-6/local" element={<Local />} />
//         <Route path="/local-7/travel" element={<Travel />} />
//         <Route path="/local-8/goods" element={<Goods />} />
//         <Route path="/local-9/coupons" element={<Coupons />} />
//         <Route path="/wishlist" element={<WishList />} />
//         <Route
//           path="/local-1/beauty-and-spas/product/:product_id"
//           element={
//             <PrivateRoute>
//               <SingleUser />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path="/local-10/random-meal"
//           element={
//             <PrivateRoute>
//               <RandomMeal />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </>
//   );
// }


// export default App;


// App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./NavComponent";
import { Beauty } from "./Pages/Beauty.jsx";
import { Things } from "./Pages/Things.jsx";
import { Gifts } from "./Pages/Gifts.jsx";
import { AutoHome } from "./Pages/AutoHome.jsx";
import { FoodDrink } from "./Pages/FoodDrink.jsx";
import { Local } from "./Pages/Local.jsx";
import { Travel } from "./Pages/Travel.jsx";
import { Goods } from "./Pages/Goods.jsx";
import { Coupons } from "./Pages/Coupons.jsx";
import { WishList } from "./Pages/Whislist.jsx";
import { SingleUser } from "./Pages/SingleUser.jsx";
import { RandomMeal } from "./Pages/RandomMeal.jsx";
import { PrivateRoute } from "./Pages/PrivateRoute.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/local-1/beauty-and-spas" element={<Beauty />} />
        <Route path="/local-2/things-to-do" element={<Things />} />
        <Route path="/local-3/gifts" element={<Gifts />} />
        <Route path="/local-4/auto-and-home" element={<AutoHome />} />
        <Route path="/local-5/food-and-drink" element={<FoodDrink />} />
        <Route path="/local-6/local" element={<Local />} />
        <Route path="/local-7/travel" element={<Travel />} />
        <Route path="/local-8/goods" element={<Goods />} />
        <Route path="/local-9/coupons" element={<Coupons />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route
          path="/local-1/beauty-and-spas/product/:product_id"
          element={
            <PrivateRoute>
              <SingleUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/local-10/random-meal"
          element={
            <PrivateRoute>
              <RandomMeal />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
