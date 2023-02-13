import React from 'react';
import { Box } from '@mui/material';
import classes from './index.module.scss';
import Navbar from '../Navbar';
import InfoContainer from '../InfoContainer';

const MainPage = () => {
  return (
    <Box className={classes.mainPageContainer}>
      <Navbar />
      <InfoContainer />
    </Box>
  );
};

export default MainPage;
