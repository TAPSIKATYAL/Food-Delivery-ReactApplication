import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  //When the useState variable changed whole component render again. React check
  useEffect(() => {
    fetchData();
  }, []);
const [searchFood, setSearchFood] = useState("");
console.log(searchFood);
{ console.log("list is")
  listOfRestaurants.map((res)=> console.log(res.info))};
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json);
    const rest =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(rest[0].info.avgRatingString);
    setListOfRestaurants(rest);
    setFilteredRestraunts(rest);
    console.log(listOfRestaurants);
  };
  return (
    <div className="body">
      <Banner />
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="search">  
            <input id="search" type="text" value={searchFood} onChange={(e) => setSearchFood(e.target.value)}/>
            <button
             onClick=
              {() => {
                const filteredRestraunt = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchFood.toLowerCase()));
                console.log(filteredRestraunts);
              setFilteredRestraunts(filteredRestraunt);
            }}
            > Search</button>
            </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestraunts(filteredList);
            }}
          >
            Top Rating Restaurant
          </button>
          <div className="restaurant-conatiner">
            {filteredRestraunts.map((restaurants) => (
              <Link key={restaurants.info.id} to={"/restaurants/"+ restaurants.info.id}>
              <RestaurantCard
                
                restData={restaurants}
              />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Body;
