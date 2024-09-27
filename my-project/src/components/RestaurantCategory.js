import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data,showItems,setShowItems}) =>{

    const handleClick = () => {
        setShowItems();
    }

    return <div>
        {/* Header accordins */}
        <div className="w-full bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
            <div className="flex justify-between" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {showItems && <ItemList items={data.itemCards} /> }
        </div>
        {/* accordins body */}
    </div>
}

export default RestaurantCategory;