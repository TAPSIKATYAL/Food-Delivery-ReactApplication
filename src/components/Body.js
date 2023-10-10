import RestaurantCard from "./RestaurantCard";
import arrayRestro from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(arrayRestro);
  console.log(arrayRestro);
  return (
    <div className="body">
      <div className="search">Search</div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => parseInt(res.info.rating.rating_text) >= 4
          );
          setListOfRestaurants(filteredList);
        }}
      >
        Top Rating Restaurant
      </button>
      <div className="restaurant-conatiner">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
