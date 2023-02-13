import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonNumber } from '../../utils/stringParser';
import { getPokemons } from '../../store/pokemons.reducer';
import { getDetails } from '../../store/details.reducer';
import classes from './index.module.scss';

const LIMIT = '12';
const Navbar = () => {
  const dispatch = useDispatch();
  const prevPageLink = useSelector((state) => state.pokemons.previous);
  const nextPageLink = useSelector((state) => state.pokemons.next);
  const pokemonsResults = useSelector((state) => state.pokemons.results);
  const [activeButton, setActiveButton] = useState('');

  const prevOffset = prevPageLink
    ? new URL(prevPageLink).searchParams.get('offset')
    : prevPageLink;
  const nextOffset = nextPageLink
    ? new URL(nextPageLink).searchParams.get('offset')
    : nextPageLink;

  useEffect(() => {
    dispatch(getPokemons({ offset: 0, limit: LIMIT })).then(({ payload }) => {
      const [firstPokemon] = payload.results;
      setActiveButton(firstPokemon.name);
      dispatch(
        getDetails({ pokemonNumber: getPokemonNumber(firstPokemon.url) })
      );
    });
  }, [dispatch]);

  return (
    <Grid container className={classes.navbar}>
      <Grid item className={classes.navbarNames}>
        {pokemonsResults.map((pokemon) => (
          <Button
            key={pokemon.name}
            variant="outlined"
            className={`${classes.pokemonName} ${
              pokemon.name === activeButton ? classes.selected : null
            }`}
            onClick={() => {
              setActiveButton(pokemon.name);
              return dispatch(
                getDetails({ pokemonNumber: getPokemonNumber(pokemon.url) })
              );
            }}
          >
            {pokemon.name}
          </Button>
        ))}
      </Grid>
      <Grid item className={classes.navbarPagination}>
        <Button
          variant="contained"
          disabled={!prevOffset}
          onClick={() =>
            dispatch(getPokemons({ offset: prevOffset, limit: LIMIT }))
          }
        >
          Prev
        </Button>
        <Button
          variant="contained"
          disabled={!nextOffset}
          onClick={() =>
            dispatch(getPokemons({ offset: nextOffset, limit: LIMIT }))
          }
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
