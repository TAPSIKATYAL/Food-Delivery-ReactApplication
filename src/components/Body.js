import RestaurantCard from "./RestaurantCard";
import arrayRestro from "../utils/mockData";

const Body = () => {
    return(
      <div className="body">
       <div className="search">Search</div>
        <div className="restaurant-conatiner">
          {
          arrayRestro.map(restaurant => <RestaurantCard key={restaurant.info.resId} restData = { restaurant } />)
          }
        </div>
      </div>
    );
  }
  export default Body;