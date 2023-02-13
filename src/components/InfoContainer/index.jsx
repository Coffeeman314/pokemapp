import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import classes from './index.module.scss';

const InfoContainer = () => {
  const detailsResults = useSelector((state) => state.details);
  const { name, sprites: image, abilities, types } = detailsResults;

  return (
    <Grid container className={classes.infoContainer}>
      <Grid item className={classes.imageBox}>
        <img src={image} alt="alt" />
      </Grid>
      <Grid container className={classes.information}>
        <Grid item className={classes.name}>
          <Typography variant="h2" textTransform="capitalize">
            {`Name: ${name}`}
          </Typography>
          <Grid item className={classes.abilities}>
            <Typography variant="body1">
              Abilities:
              {abilities.map((ability, index) => {
                const { name: abilityName } = ability.ability;
                return (
                  <span key={abilityName}>
                    {` ${abilityName}${
                      abilities.length - 1 !== index ? ', ' : '.'
                    }`}
                  </span>
                );
              })}
            </Typography>
          </Grid>
          <Grid item className={classes.types}>
            <Typography variant="body1">
              Type:
              {types.map((type, index) => {
                const { name: typeName } = type.type;
                return (
                  <span key={typeName}>
                    {` ${typeName}${types.length - 1 !== index ? ', ' : '.'}`}
                  </span>
                );
              })}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoContainer;
