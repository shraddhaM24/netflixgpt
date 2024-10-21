import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayMovies: null,
        trailerVideo: null,
        popularMovies: null,
    },
    reducers: {
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayMovies = action.payload;
        },
        addTrailerVideos : (state,action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.popularMovies = action.payload;
        },
        addTrendingMovies : (state,action) => {
            state.trendingMovies = action.payload;
        },
        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state,action) => {
            state.upcomingMovies = action.payload;
        },
    }
});

export const {addNowPlayingMovies, addTrailerVideos, addPopularMovies, addTrendingMovies, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;