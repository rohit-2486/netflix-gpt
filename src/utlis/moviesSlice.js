import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies", 
    initialState: {
        playingMoviesNow : null,
        trailerVideo: null,
    }, 
    reducers : {
        addPlayingMoviesNow: (state, action) =>{
            state.playingMoviesNow = action.payload;
        },
        addTrailerVideo: (state , action ) =>{
            state.trailerVideo = action.payload;
        },
    }
})

export const {addPlayingMoviesNow , addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;
