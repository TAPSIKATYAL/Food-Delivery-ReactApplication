import Shimmer from "./Shimmer";
import {STAR_ICON} from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    const {resId} = useParams();
    console.log(resId);
    const restInfo = useRestaurantMenu(resId);
if(restInfo === null) return <Shimmer/>;
const {name, cuisines, costForTwoMessage, avgRatingString, totalRatingsString, areaName} = restInfo?.cards[2]?.card?.card?.info;

const cardsArray = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
const cardDetails = cardsArray.map((cardItem)=>  cardItem?.card?.card);
console.log(cardDetails)
cardDetails.shift();
return (
    <div className="rest-menu-container">
        <h1>{name}</h1>
        <h3> <img src={STAR_ICON} className="star-icon"></img>{avgRatingString}({totalRatingsString}) - {costForTwoMessage}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Outlet - {areaName}</h4>
        {
         cardDetails.map((cardDetail) => {
            const{id, title, itemCards, categories} = cardDetail;
            const cardTitle = <h2 key={cardDetail.id}>{title}</h2>;

            const renderedItemCards = itemCards ? 
             itemCards?.map((item) => { 
                const { name, price, finalPrice, defaultPrice } = item?.card?.info || {};
                return (
                    <p key={item.card.info.id}>
                        {name} - {(price / 100) || (finalPrice / 100)|| (defaultPrice/100)}
                    </p>
                );
            }): null;

            const renderedCategories = categories && categories.length > 0
                ? categories.map((category) => (
                    <>
                    <h4 key={category.id}>{category.title}</h4>
                    {
                    category.itemCards.map((item) =>   {const { name, price, finalPrice, defaultPrice} = item?.card?.info || {};
                    return (
                        <p key={item.card.info.id}>
                            {name} - {(price / 100) || (finalPrice / 100) || (defaultPrice/100)}
                        </p>
                    );})}
                    </>
                  ))
                : null;


            return (
                <div key={cardDetail.id}>
                    {cardTitle}
                    {renderedCategories || renderedItemCards}
                    
                </div>
            );
        })
    }
    </div>
)
}

export default RestaurantMenu;