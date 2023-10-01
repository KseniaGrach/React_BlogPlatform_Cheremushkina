import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppBar, Button, Toolbar, Typography } from '@mui/material';

const Header = () => {
  const location = useLocation();

  return (
    <AppBar position="fixed" color="inherit" sx={{ boxShadow: 'unset' }}>
      <Toolbar sx={{ gap: 2 }}>
        <Link style={{ textDecoration: 'none', flexGrow: 1 }} to="/articles">
          <Typography color="black" variant="h6" component="div">
            Realworld Blog
          </Typography>
        </Link>

        <Link to="/sign-in" style={{ textDecoration: 'none' }} state={{ from: location }}>
          <Button sx={{ textTransform: 'none', color: 'black' }}>Sign In</Button>
        </Link>

        <Link to="/sign-up" style={{ textDecoration: 'none' }}>
          <Button color="success" variant="outlined" sx={{ textTransform: 'none' }}>
            Sign Up
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
