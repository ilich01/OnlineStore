import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload: object, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        payload
      );
      const login = await axios(
        "https://api.escuelajs.co/api/v1/auth/profile",
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
    throw err;
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
    success: false,
    error: false,
  },
  reducers: {
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
    setSuccess: (state, { payload }) => {
      state.success = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(createUser.fulfilled, addCurrentUser);
    // builder.addCase(loginUser.fulfilled, addCurrentUser);
    builder
      // .addCase(createUser.fulfilled, (state, { payload }) => {
      //   state.currentUser = payload;
      //   state.success = true;
      // })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
        state.success = true;
      })
      // .addCase(createUser.rejected, (state) => {
      //   state.error = true;
      // })
      .addCase(loginUser.rejected, (state) => {
        state.error = true;
      });
    // builder.addCase(updateUser.fulfilled, addCurrentUser);
  },
});
export const { toggleForm, toggleFormType, setSuccess, setError } =
  userSlice.actions;
export default userSlice.reducer;
