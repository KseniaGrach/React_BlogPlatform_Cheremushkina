import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articles';

export default configureStore({
  reducer: {
    articles: articlesReducer,
  },
});
