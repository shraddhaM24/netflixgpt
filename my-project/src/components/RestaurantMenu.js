import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    // console.log(test);

    useEffect(() => {
        fetchMenuData();
    } ,[]);

    const fetchMenuData = async () => {
        const data = await fetch (
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1894674&lng=72.8533941&restaurantId="+resId
        );
        const jsonData = await data.json();
        setResInfo(jsonData.data);
    }
    // console.log(resId);

    if (resInfo === null) return <Shimmer /> ;

    const {name,avgRatingString,totalRatingsString,cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // const {itemTitle} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards;
    const { itemTitle } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];


    // console.log(resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards);

    return(
        <div className="resMenu">
            <h1>{name}</h1>
            <p>`{avgRatingString} ({totalRatingsString}) ` - {cuisines.join(", ")}</p>
            <div>

            </div>
            <h3>Recommended</h3>
            <ul>
                {itemCards.map((item) => (
                    <li>
                       <p>{item.card.info.name}</p>
                       <p>{item.card.info.defaultPrice/100 || item.card.info.price/100}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;