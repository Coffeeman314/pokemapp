import http from './http';

const pokemons = {
  getPokemons: (offset, limit) => {
    const url = `pokemon/?offset=${offset}&limit=${limit}`;
    return http.get(url);
  },
};

export default pokemons;
