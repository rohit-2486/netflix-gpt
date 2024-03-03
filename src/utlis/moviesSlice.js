import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies", 
    initialState: {
        trailerVideo: null,
        playingMoviesNow : null,
        popularMovies: null, 
        topRatedMovies:null,
        upcomingMovies: null,
       
    }, 
    reducers : {
        addPlayingMoviesNow: (state, action) =>{
            state.playingMoviesNow = action.payload;
        },
        addUsePopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
        addTopRated: (state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) =>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state , action ) =>{
            state.trailerVideo = action.payload;
        },
    }
})

export const {addPlayingMoviesNow , addTrailerVideo , addUsePopularMovies , addTopRated , addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
