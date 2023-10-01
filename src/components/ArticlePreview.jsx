/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Box, Checkbox, Chip, Grid, Typography } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

import formatTime from '../utils/formatTime';
import getUniqueKey from '../utils/getUniqueKey';

import avatarPicture from '../assets/images/avatar.png';

const ArticlePreview = (props) => {
  const { article, singlePage } = props;

  return (
    // eslint-disable-next-line id-length
    <Grid container sx={{ p: 2 }}>
      <Grid item xs={9}>
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={{ mb: 1, gap: 1 }}>
          {!singlePage && (
            <Link to={`${article.slug}`} style={{ textDecoration: 'none' }}>
              <Typography variant="h5" color="#1890FF">
                {article.title}
              </Typography>
            </Link>
          )}
          {singlePage && (
            <Typography variant="h5" color="#1890FF">
              {article.title}
            </Typography>
          )}
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} disabled />
          <Typography sx={{ mr: '5px' }}>{article.favoritesCount}</Typography>
        </Grid>
        {article.tagList.map(
          (tag) =>
            tag && (
              <Chip
                key={getUniqueKey()}
                label={tag}
                variant="outlined"
                size="small"
                sx={{ mr: 1, borderRadius: '4px' }}
              />
            )
        )}
        <Typography align="justify" sx={{ mt: 1 }}>
          {article.description}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Grid container direction="row-reverse" sx={{ mb: 3 }}>
          <Avatar alt="Avatar" src={article.author.image || avatarPicture} sx={{ width: 46, height: 46 }} />
          <Box sx={{ mr: 1 }}>
            <Typography variant="h6" align="right">
              {article.author.username}
            </Typography>
            <Typography variant="body2" align="right" sx={{ color: '#808080' }}>
              {formatTime(article.createdAt)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ArticlePreview;
