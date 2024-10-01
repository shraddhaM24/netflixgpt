import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddClick = (item) => {
        dispatch(addItem(item));
    }
    
    return <div>
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="border-gray-200 border-b-2 p-2 m-2 flex">
                    <div className="w-9/12">
                        <div>
                            <span className="font-bold">{item.card.info.name}</span><br/>
                            <span>₹{item.card.info.price/100}</span>
                        </div>
                        <div>
                            <p>{item.card.info.description}</p>
                        </div>
                    </div>
                   <div className="w-3/12">
                        <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                        <div className="absolute">
                        <button className="bg-black text-white shadow-lg mx-16 p-2 rounded-lg" 
                        onClick={() => handleAddClick(item)}>Add +</button>
                        </div>
                   </div>
                </div>
            ))}
        </div>
    </div>
}

export default ItemList;