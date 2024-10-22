import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import tvshowsReducer from "./tvShowsSlice";

const appStore = configureStore(
    {
        reducer: {
            user : userReducer,
            movies : movieReducer,
            gpt: gptReducer,
            config: configReducer,
            tvshows: tvshowsReducer,
        },
    }
)

export default appStore;
