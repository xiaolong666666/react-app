import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  articles: [],
  messages: "",
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    articleFetch: (state) => {
      state.loading = true;
    },
    articleFetchSuccess: (state, { payload }) => {
      state.articles = payload.articles;
      state.loading = false;
    },
    articleFetchFailed: (state, { payload }) => {
      state.messages = payload.messages;
      state.loading = false;
    },
  },
});

export const { articleFetch, articleFetchSuccess, articleFetchFailed } =
  articleSlice.actions;

export default articleSlice.reducer;
