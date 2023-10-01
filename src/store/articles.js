/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getArticles = createAsyncThunk('articles/getAll', async ({ limit, offset }, { rejectWithValue }) =>
  fetch(`https://blog.kata.academy/api/articles?${new URLSearchParams({ limit, offset })}`)
    .then(async (response) =>
      response.ok ? response.json() : rejectWithValue({ status: response.status, statusText: response.json() })
    )
    .catch((error) => rejectWithValue({ status: error.status, statusText: error.message }))
);

export const getSingleArticle = createAsyncThunk('articles/getSingle', async (slug, { rejectWithValue }) =>
  fetch(`https://blog.kata.academy/api/articles/${slug}`)
    .then(async (response) =>
      response.ok ? response.json() : rejectWithValue({ status: response.status, statusText: response.json() })
    )
    .catch((error) => rejectWithValue({ status: error.status, statusText: error.message }))
);

const articles = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    singleArticle: null,
    articlesCount: null,
    requestStatus: '',
    apiError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state) => {
      state.requestStatus = 'pending';
      state.apiError = null;
    });

    builder.addCase(getSingleArticle.pending, (state) => {
      state.requestStatus = 'pending';
      state.apiError = null;
    });

    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.articles = [...action.payload.articles];
      state.articlesCount = action.payload.articlesCount;
      state.requestStatus = 'fulfilled';
    });

    builder.addCase(getSingleArticle.fulfilled, (state, action) => {
      state.singleArticle = { ...action.payload.article };
      state.requestStatus = 'fulfilled';
    });

    builder.addCase(getArticles.rejected, (state, action) => {
      state.requestStatus = 'rejected';
      state.apiError = action.payload;
    });

    builder.addCase(getSingleArticle.rejected, (state, action) => {
      state.requestStatus = 'rejected';
      state.apiError = action.payload;
    });
  },
});

export default articles.reducer;
