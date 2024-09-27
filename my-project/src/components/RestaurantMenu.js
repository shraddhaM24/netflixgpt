import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showItems,setShowItems] = useState(0);

    if (resInfo === null) return <Shimmer />;

    const { name, avgRatingString, totalRatingsString, cuisines } = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.['card']?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return (
        <div className="resMenu">
            <h1 className="text-center font-bold text-lg">{name}</h1>
            <div className="rt-cus text-center">
                <p>{avgRatingString} ({totalRatingsString}) - {cuisines.join(", ")}</p>
            </div>
            {/* categories accordins */}
            {categories.map((category,index) => (
                <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} 
                showItems = {index === showItems ? true : false}
                setShowItems={() => setShowItems(index)} /> 
            ))}
        </div>
    );
}

export default RestaurantMenu;
