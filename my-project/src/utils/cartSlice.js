import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action) => {

            // Vanilla (older redux) => Dont mutate state , returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // redux tool kit
            // We have to mutate the state
            //behind the scene redux do above vanilla something 
            /*immer redux uses this library -> immer finding the different between the org state, 
                the mutate state and the give back the new state which is 
                immutate state so as a developer we dnt need to take crae of this immer libary do this
            */
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            state.items.pop();
        }, 
        clearCart: (state) =>   {
            //RTK - either Mutate the existing  state or return a new State
            // state.items.length = 0; // originalState = []

            return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
        },
        incrementItem: (state,action) => {
            const item = state.items.find(item => item.card.info.id === action.payload);
            if(item){
                item.quantity = (item.quantity || 1) + 1;
            }
        },
        decrementItem: (state,action) => {
            const item = state.items.find(item => item.card.info.id === action.payload);
            if(item && item.quantity > 1){
                item.quantity -= 1;
            }
        },
    },
});

export const {addItem , removeItem , clearCart , incrementItem, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;