import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [openSections, setOpenSections] = useState({}); // Track open/closed state for each section
    const { resId } = useParams();

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1894674&lng=72.8533941&restaurantId=" + resId
        );
        const jsonData = await data.json();
        setResInfo(jsonData.data);
    };

    if (resInfo === null) return <Shimmer />;

    const { name, avgRatingString, totalRatingsString, cuisines } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const { categories } = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const { cards } = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR;

    // Toggle section visibility
    const toggleSection = (title) => {
        setOpenSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <div className="resMenu">
            <h1>{name}</h1>
            <div className="rt-cus">
                <p>{avgRatingString} ({totalRatingsString}) - {cuisines.join(", ")}</p>
            </div>
            <div className="menu-list">
                {cards.map((list, index) => (
                    <div key={index} className="menu-container">
                        <div
                            className='list-main'
                            id={list?.card?.card?.title || 'list-not'}
                            onClick={() => toggleSection(list?.card?.card?.title)}
                            style={{ cursor: 'pointer' }} // Add cursor style for interactivity
                        >
                            <p className="list-name">{list?.card?.card?.title || 'Title not available'}</p>
                            <div className="border-class"></div>
                        </div>
                        {openSections[list?.card?.card?.title] && ( // Conditionally render based on the openSections state
                            Array.isArray(itemCards) && itemCards.length > 0 ? (
                                <div className="item-list">
                                    {itemCards.map((item) => (
                                        <div className="item-container" key={item.card.info.id}>
                                            <div className="food-name">
                                                <div className="des">
                                                    <p className="item-name">{item.card.info.name}</p>
                                                    <p className="item-price">{item.card.info.defaultPrice / 100 || item.card.info.price / 100}</p>
                                                    <p className="item-desc">{item.card.info.description}</p>
                                                </div>
                                                <div className="food-img">
                                                    <img src={"https://media-assets.swiggy.com/" + item.card.info.imageId} width="150" height="144" />
                                                </div>
                                            </div>
                                            <div className="border-class"></div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <ul>
                                    {categories.map((item) => (
                                        <div className="menulist" key={item.id}>
                                            <li>{item.title}</li>
                                            {item.itemCards.map((list) => (
                                                <div key={list.card.info.id}>{list.card.info.name}</div>
                                            ))}
                                        </div>
                                    ))}
                                </ul>
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;
