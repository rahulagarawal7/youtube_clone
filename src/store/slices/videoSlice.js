import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addVideo, getAllVideos, getChannelVideos } from "../../services/api";

export const addVideoThunk=createAsyncThunk(
    'video/add',
    async(data,{rejectWithValue})=>{
       try {
        const response =await addVideo(data);
        return response;
       } catch (error) {
         return rejectWithValue(error.response?.data || error.message);
       }
    }
)

export const getALlVideoThunk=createAsyncThunk(
    'video/getAll',
    async(_,{rejectWithValue})=>{
       try {
        const response =await getAllVideos();
        return response;
       } catch (error) {
         return rejectWithValue(error.response?.data || error.message);
       }
    }
)

export const getChannelVideoThunk=createAsyncThunk(
    'video/getChannel',
    async(_,{rejectWithValue})=>{
       try {
        const response =await getChannelVideos();
        return response;
       } catch (error) {
         return rejectWithValue(error.response?.data || error.message);
       }
    }
)


const videosSlice=createSlice({
    name:"video",
    initialState:{
     loading:false,
     AllVideos:[],
     channelVideo:null
    },
    extraReducers:(builder)=>{
       builder
           // add Video Thunk cases
           .addCase(addVideoThunk.pending, (state) => {
             state.loading = true;
           })
           .addCase(addVideoThunk.fulfilled, (state, { payload }) => {
             state.loading = false;
           })
           .addCase(addVideoThunk.rejected, (state, { payload }) => {
             state.loading = false;
           });   
               builder
           // get All Video Thunk cases
           .addCase(getALlVideoThunk.pending, (state) => {
             state.loading = true;
           })
           .addCase(getALlVideoThunk.fulfilled, (state, { payload }) => {
             state.loading = false;
             state.AllVideos=payload.videos
           })
           .addCase(getALlVideoThunk.rejected, (state, { payload }) => {
             state.loading = false;
           });  
                builder
           // get channel Video Thunk cases
           .addCase(getChannelVideoThunk.pending, (state) => {
             state.loading = true;
           })
           .addCase(getChannelVideoThunk.fulfilled, (state, { payload }) => {
             state.loading = false;
             state.channelVideo=payload.videos
           })
           .addCase(getChannelVideoThunk.rejected, (state, { payload }) => {
             state.loading = false;
           });  
    }

})

export const {}= videosSlice.actions 
export default videosSlice.reducer