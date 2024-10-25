import { createSlice } from "@reduxjs/toolkit";

const tvShowsSlice = createSlice({
    name: "tvshows",
    initialState:{
        airingToday: null,
        tvShowsTrailerVideo: null,
        topRatedTvShows: null,
    },
    reducers:{
        airingTodayShows: (state,action) => {
            state.airingToday = action.payload;
        },
        addTvShowsTrailerVideo: (state,action) => {
            state.tvShowsTrailerVideo = action.payload;
        },
        addTopRatedTvShows: (state,action) => {
            state.topRatedTvShows = action.payload;
        },
    }
});

export const {airingTodayShows, addTvShowsTrailerVideo, addTopRatedTvShows} = tvShowsSlice.actions;

export default tvShowsSlice.reducer;