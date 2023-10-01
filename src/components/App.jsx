import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Articles from '../pages/Articles';

import NotFound from '../pages/NotFound';
import Layout from './Layout';
import SingleArticle from '../pages/SingleArticle';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="articles" replace />} />
      <Route path="articles" element={<Articles />} />
      <Route path="articles/:slug" element={<SingleArticle />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
