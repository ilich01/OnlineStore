import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload: object, { rejectWithValue }) => {
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
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        const status = axiosError.response?.status;
        const message =
          status === 401 ? "Wrong login or password" : "Something went wrong";
        return rejectWithValue({ status, message });
      }
      return rejectWithValue({ status: 500, message: "Internal Server Error" });
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
  state.success = true;
};
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    formType: "signUp",
    showForm: false,
    success: false,
    error: "", // Добавляем поле для хранения текста ошибки
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
    builder.addCase(createUser.fulfilled, addCurrentUser);
    builder.addCase(loginUser.fulfilled, addCurrentUser);
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "ogin or pasword error";
    });
  },
});

export const { toggleForm, toggleFormType, setSuccess, setError } =
  userSlice.actions;
export default userSlice.reducer;
