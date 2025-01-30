import { STAR_ICON } from "../utils/constant";
const RestaurantCard = (props) => {
  const { restData, id } = props;
  const imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  // console.log("data of card is");
  // console.log(restData);
  const { cloudinaryImageId, name, locality, avgRatingString, cuisines = [], costForTwo, o2FeaturedImage = {} } = restData?.info || {};// ({resName, cuisine}) Destructring of object

  return (
    <div className="restaurant-card">
      <img src={o2FeaturedImage.url || `${imageUrl}${cloudinaryImageId}`} className="food-image"></img>
      <div className="restro-name">{name}</div>
      <div className="restro-info">{locality}</div>
      <div className="restro-info">
        <img src={STAR_ICON} className="star-icon"></img>
        {" " + avgRatingString}
      </div>
      <div className="restro-info"> {Array.isArray(cuisines) ? cuisines.join(", ") : ''}</div>
      <div className="restro-info">{costForTwo}</div>
    </div>
  );
}
export default RestaurantCard;

export const withDiscountInfo = (RestaurantCard) => {
  return (props) => {
    const {header, subHeader} = props?.restData?.info?.aggregatedDiscountInfoV3;
    console.log(props)
    return (
      <div id="enhanced-Card">
       {subHeader ? <h3 id="discount-info">{header + " " + subHeader}</h3> : ""} 
        <RestaurantCard {...props}/>
      </div>
    );
  }
}