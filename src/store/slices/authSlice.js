import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { resisterUser, signinUser, logoutUser } from "../../services/api";

// Async thunk → Register
export const registerThunk = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await resisterUser(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const signinUserThunk = createAsyncThunk(
  "auth/signin",
  async (userData, thunkAPI) => {
    try {
      const response = await signinUser(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await logoutUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: {
      loginLoading: false,
      isLoggedIn: false,
      userInfo: {},
    },
    register: {
      success: false,
      loading: false,
      error: null,
    },
  },
  reducers: {
    logoutAction: (state) => {
      state.loggedIn.loginLoading = false;
      state.loggedIn.isLoggedIn = false;
      state.loggedIn.userInfo = {};
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.register.loading = true;
        state.register.error = null;
        state.register.success = false;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.register.loading = false;
        state.register.success = payload.success || false;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.register.loading = false;
        state.register.error = payload.message || payload;
      });
    builder
      .addCase(signinUserThunk.pending, (state) => {
        state.loggedIn.loginLoading = true;
      })
      .addCase(signinUserThunk.fulfilled, (state, { payload }) => {
        state.loggedIn.loginLoading = false;
        localStorage.setItem("authToken", payload?.token);
        state.loggedIn.isLoggedIn = true;
        state.loggedIn.userInfo = payload?.user;
      })
      .addCase(signinUserThunk.rejected, (state) => {
        state.loggedIn.loginLoading = false;
      });
    builder
      .addCase(logoutUserThunk.pending, (state) => {
        state.loggedIn.loginLoading = true;
      })
      .addCase(logoutUserThunk.fulfilled, (state, { payload }) => {
        state.loggedIn.isLoggedIn = false;
        state.loggedIn.loginLoading = false;
        state.loggedIn.userInfo = {};
        localStorage.removeItem("authToken");
      })
      .addCase(logoutUserThunk.rejected, (state) => {
        state.loggedIn.loginLoading = false;
      });
  },
});

export const { logoutAction } = authSlice.actions;
export default authSlice.reducer;
