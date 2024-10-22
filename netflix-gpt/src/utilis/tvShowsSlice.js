import { createSlice } from "@reduxjs/toolkit";

const tvShowsSlice = createSlice({
    name: "tvshows",
    initialState:{
        airingToday: null,
        tvShowsTrailerVideo: null,
    },
    reducers:{
        airingTodayShows: (state,action) => {
            state.airingToday = action.payload;
        },
        addTvShowsTrailerVideo: (state,action) => {
            state.tvShowsTrailerVideo = action.payload;
        },
    }
});

export const {airingTodayShows, addTvShowsTrailerVideo} = tvShowsSlice.actions;

export default tvShowsSlice.reducer;