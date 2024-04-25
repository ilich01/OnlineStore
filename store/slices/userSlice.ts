import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        payload
      );
      const login = await axios(
        "https://api.escuelajs.co/api/v1//auth/profile",
        {
          headers: {
            Authorization: `Bearer ${res.data.access_token}`,
          },
        }
      );

      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const createUser = createAsyncThunk<
  CreateUserResponse,
  CreateUserRequest
>("users/createUser", async (payload, thunkAPI) => {
  try {
    const res = await axios.post(
      "https://api.escuelajs.co/api/v1/users",
      payload
    );
    return res.data;
  } catch (err) {
    console.log(err);
    throw err; // Используйте throw для передачи ошибки вместо rejectWithValue
  }
});

const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
};
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    formType: "signUp",
    showForm: false,
  },
  reducers: {
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Error:", action.error);
      });
  },
});
export const { toggleForm } = userSlice.actions;
export default userSlice.reducer;
