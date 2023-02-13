import React from 'react';
import { Grid, Typography } from '@mui/material';

import classes from './index.module.scss';

const Header = () => {
  return (
    <Grid container className={classes.header}>
      <Grid item className={classes.headerLogo}>
        <Typography variant="h1">POKEMAPP</Typography>
      </Grid>
      <Grid item className={classes.headerText}>
        <Typography variant="subtitle1">Find your perfect pokemon</Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
