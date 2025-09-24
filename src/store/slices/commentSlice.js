import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getComments,
  addComment,
  editComment,
  deleteComment,
} from "../../services/api";

// Fetch all comments for a video
export const getAllCommentsThunk = createAsyncThunk(
  "comments/getAll",
  async (videoId, { rejectWithValue }) => {
    try {
      const response = await getComments(videoId);
      return response; // return only the comments array
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Add a comment
export const addCommentThunk = createAsyncThunk(
  "comments/add",
  async ({ videoId, text }, { rejectWithValue }) => {
    try {
      const response = await addComment(videoId, text);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Edit a comment
export const editCommentThunk = createAsyncThunk(
  "comments/edit",
  async ({ commentId, text }, { rejectWithValue }) => {
    try {
      const response = await editComment(commentId, text);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete a comment
export const deleteCommentThunk = createAsyncThunk(
  "comments/delete",
  async (commentId, { rejectWithValue }) => {
    try {
      const response = await deleteComment(commentId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    allComments: [],
    loadingComments: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all comments
    builder
      .addCase(getAllCommentsThunk.pending, (state) => {
        state.loadingComments = true;
        state.error = null;
      })
      .addCase(getAllCommentsThunk.fulfilled, (state, { payload }) => {
        state.loadingComments = false;
        state.allComments = payload.comments;
      })
      .addCase(getAllCommentsThunk.rejected, (state, action) => {
        state.loadingComments = false;
      });
    // Add comment
    builder
      .addCase(addCommentThunk.pending, (state) => {
        state.loadingComments = true;
        state.error = null;
      })
      .addCase(addCommentThunk.fulfilled, (state, { payload }) => {
        state.loadingComments = false;
      })
      .addCase(addCommentThunk.rejected, (state) => {
        state.loadingComments = false;
      });
    // Edit comment
    builder
      .addCase(editCommentThunk.pending, (state) => {
        state.loadingComments = true;
        state.error = null;
      })
      .addCase(editCommentThunk.fulfilled, (state, { payload }) => {
        state.loadingComments = false;
      })
      .addCase(editCommentThunk.rejected, (state) => {
        state.loadingComments = false;
      });
    //  Delete comment
    builder
      .addCase(deleteCommentThunk.pending, (state) => {
        state.loadingComments = true;
        state.error = null;
      })
      .addCase(deleteCommentThunk.fulfilled, (state, { payload }) => {
        state.loadingComments = false;
      })
      .addCase(deleteCommentThunk.rejected, (state) => {
        state.loadingComments = false;
      });
  },
});

export default commentSlice.reducer;
