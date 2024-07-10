 import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Banner from "./Banner";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); 
  useEffect(()=>{
    fetchData();
  },[]);
  
  const fetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json= await data.json();
   
    //console.log(json);
     const rest = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
     console.log(rest[0].info.avgRatingString);
     setListOfRestaurants(rest); 
     console.log( listOfRestaurants);
  };
  return (
    <div className="body">
      <Banner/>
      <div className="search">Search</div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => (res.info.avgRating) > 4.2
          );
          setListOfRestaurants(filteredList);
        }}
      >
        Top Rating Restaurant
      </button>
      {(listOfRestaurants.length === 0)? 
        <div>
         <Shimmer/> 
        </div> : 
      <div className="restaurant-conatiner">
        {listOfRestaurants.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} restData={restaurants}  />
        ))}
      </div>
       } 
    </div>
  );
};
export default Body;
