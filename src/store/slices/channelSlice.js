import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createChannel,
  getChannelById,
  updateChannel,
  getAllChannel,
  toggleSubscription,
} from "../../services/api";

// Async thunk for creating a channel
export const createChannelThunk = createAsyncThunk(
  "channel/create",
  async (channelData, { rejectWithValue }) => {
    try {
      const response = await createChannel(channelData); // calls API
      return response; // return channel data
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// Async thunk for creating a channel
export const getUserChannelThunk = createAsyncThunk(
  "channel/get",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getChannelById(id); // calls API
      return response; // return channel data
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

// Async thunk for creating a channel
export const updateChannelThunk = createAsyncThunk(
  "channel/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await updateChannel(id, data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for get all channel
export const getAllChannelThunk = createAsyncThunk(
  "channel/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllChannel();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for get all channel
export const toggleSubscriptionThunk = createAsyncThunk(
  "channel/toggleSubscribe",
  async (id, { rejectWithValue }) => {
    try {
      console.log("00", id);
      const response = await toggleSubscription(id);

      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channel: null,
    loading: false,
    error: null,
    success: false,
    allChannelList: [],
    Channelcount: null,
  },
  reducers: {
    resetChannelState: (state) => {
      state.channel = null;
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // createChannelThunk cases
      .addCase(createChannelThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createChannelThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.channel = payload.channel; // from backend response
      })
      .addCase(createChannelThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    // createChannelThunk cases
    builder
      .addCase(getUserChannelThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getUserChannelThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.channel = payload.channel; // from backend response
      })
      .addCase(getUserChannelThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    // update ChannelThunk cases
    builder
      .addCase(updateChannelThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateChannelThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.channel = payload.channel; // from backend response
      })
      .addCase(updateChannelThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    // get all  ChannelThunk cases
    builder
      .addCase(getAllChannelThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getAllChannelThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.Channelcount = payload.count;
        state.allChannelList = payload.channels; // from backend response
      })
      .addCase(getAllChannelThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    //   toggleSubscriptionThunk cases
    builder
      .addCase(toggleSubscriptionThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleSubscriptionThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log("payload - ful ", payload);
      })
      .addCase(toggleSubscriptionThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        console.log("payload - rej ", payload);
      });
  },
});

export const { resetChannelState } = channelSlice.actions;
export default channelSlice.reducer;
