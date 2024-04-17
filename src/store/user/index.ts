import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  messages: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userFetch: (state) => {
      state.loading = true;
    },
    userFetchSuccess: (state, { payload }) => {
      state.users = payload.users;
      state.loading = false;
    },
    userFetchFailed: (state, { payload }) => {
      state.messages = payload.messages;
      state.loading = false;
    },
  },
});

export const { userFetch, userFetchSuccess, userFetchFailed } =
  userSlice.actions;

export default userSlice.reducer;
