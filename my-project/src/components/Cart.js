import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, incrementItem, decrementItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items); // Fetch items from Redux store
    const dispatch = useDispatch();

    const handleClearClick = () => {
        dispatch(clearCart());
    };

    const handleRemoveClick = (itemId) => {
        dispatch(removeItem(itemId)); // Pass the ID to remove a specific item
    };

    const handleIncrementClick = (itemId) => {
        dispatch(incrementItem(itemId)); // Increment item quantity
    };

    const handleDecrementClick = (itemId) => {
        dispatch(decrementItem(itemId)); // Decrement item quantity
    };

    return (
        <div className="text-center m-4 p-4">
            <div className="text-2xl font-bold">
                <h1>Cart</h1>
                <button className="p-1 m-2 bg-black text-white rounded-lg" onClick={handleClearClick}>
                    Clear all
                </button>
            </div>

            {cartItems.length === 0 ? (
                <h1 className="text-2xl mt-5 font-bold">Cart is empty. Add items to the cart.</h1>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.card.info.id} className="w-6/12 m-auto">
                            <div className="flex justify-end">
                                <button className="p-1 m-2" onClick={() => handleRemoveClick(item.card.info.id)}>
                                    ❌
                                </button>
                            </div>

                            <div className="border-gray-200 border-b-2 p-2 m-2 flex">
                                <div className="w-9/12">
                                    <div>
                                        <span className="font-bold">{item.card.info.name}</span><br />
                                        <span>₹{item.card.info.price / 100}</span>
                                    </div>
                                    <div>
                                        <p>{item.card.info.description}</p>
                                    </div>
                                </div>
                                <div className="w-3/12">
                                    <img src={CDN_URL + item.card.info.imageId} className="w-full" alt={item.card.info.name} />
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <button className="p-1 m-2" onClick={() => handleDecrementClick(item.card.info.id)}>
                                    ➖
                                </button>
                                <span>{item.quantity}</span>
                                <button className="p-1 m-2" onClick={() => handleIncrementClick(item.card.info.id)}>
                                    ➕
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
