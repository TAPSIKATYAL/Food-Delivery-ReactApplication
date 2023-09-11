import {STAR_ICON} from "../utils/constant";
const RestaurantCard = (props) => {
    const { restData } = props; 
    console.log(props);
    const {name, image, locality, rating, cft,cuisine} = restData?.info;// ({resName, cuisine}) Destructring of object
    return(
      <div className="restaurant-card">
      <img src={image.url} className="food-image"></img>
      <div className="restro-name">{name}</div>
      <div className="restro-info">{locality.name}</div>
      <div className="restro-info">
        <img src={STAR_ICON} className="star-icon"></img>
        {" "+ rating.rating_text}
      </div>
      <div className="restro-info">{cuisine.map(cuisine => cuisine.name+", ")}</div>
      <div className="restro-info">{cft.text}</div>
    </div>
    );
  }
export default RestaurantCard;