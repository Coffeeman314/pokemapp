import http from './http';

const details = {
  getDetails: (pokemonNumber) => {
    const url = `pokemon/${pokemonNumber}/`;
    return http.get(url);
  },
};

export default details;
