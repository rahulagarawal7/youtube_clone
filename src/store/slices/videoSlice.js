import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addVideo,
  getAllVideos,
  getChannelVideos,
  updateVideo,
  deleteVideo,
  getVideoById,
  getAllVideoByCategory,
  getAllVideoByQuery
} from "../../services/api";

export const addVideoThunk = createAsyncThunk(
  "video/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await addVideo(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateVideoThunk = createAsyncThunk(
  "video/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await updateVideo(id, data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteVideoThunk = createAsyncThunk(
  "video/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteVideo(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getVideoByIdThunk = createAsyncThunk(
  "video/getById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getVideoById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAllVideoThunk = createAsyncThunk(
  "video/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllVideos();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAllVideoByCategoryThunk = createAsyncThunk(
  "video/Category",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getAllVideoByCategory(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAllVideoByQueryThunk = createAsyncThunk(
  "video/query",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getAllVideoByQuery(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const getChannelVideoThunk = createAsyncThunk(
  "video/getChannel",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getChannelVideos();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const videosSlice = createSlice({
  name: "video",
  initialState: {
    loading: false,
    AllVideos: null,
    channelVideo: null,
    videoDetails: null,
    errorVideoDetails: false,
    isSubscribed: false,
  },
  extraReducers: (builder) => {
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
      .addCase(getAllVideoThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllVideoThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.AllVideos = payload.videos;
      })
      .addCase(getAllVideoThunk.rejected, (state, { payload }) => {
        state.loading = false;
      });
    builder
      // get channel Video Thunk cases
      .addCase(getChannelVideoThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChannelVideoThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.channelVideo = payload.videos;
      })
      .addCase(getChannelVideoThunk.rejected, (state, { payload }) => {
        state.loading = false;
      });
    builder
      // update Video Thunk cases
      .addCase(updateVideoThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateVideoThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateVideoThunk.rejected, (state, { payload }) => {
        state.loading = false;
      });
    builder
      // delete Video Thunk cases
      .addCase(deleteVideoThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteVideoThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(deleteVideoThunk.rejected, (state, { payload }) => {
        state.loading = false;
      });
    builder
      // get  Video  by ID Thunk cases
      .addCase(getVideoByIdThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVideoByIdThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.videoDetails = payload.video;
        state.isSubscribed = payload.isSubscribed;
      })
      .addCase(getVideoByIdThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorVideoDetails = true;
      });
      builder
      // get  Video  by category Thunk cases
      .addCase(getAllVideoByCategoryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllVideoByCategoryThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.AllVideos = payload.videos;
      })
      .addCase(getAllVideoByCategoryThunk.rejected, (state, { payload }) => {
        state.loading = false;
      });
       builder
      // get  Video  by Query Thunk cases
      .addCase(getAllVideoByQueryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllVideoByQueryThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.AllVideos = payload.videos;
      })
      .addCase(getAllVideoByQueryThunk.rejected, (state, { payload }) => {
        state.loading = false;
      });
  },
});

export const {} = videosSlice.actions;
export default videosSlice.reducer;
