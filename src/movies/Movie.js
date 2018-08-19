import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

// this is now a functional stateless component
const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={movie.id}>
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
  </Link>
);

export default Movie;

// you cannot set default props on a nested property
// static defaultProps = {
//   desc: 'Description not available',
// };

// defines what props make an appearance here
// and throws errors if things passed in don't match or are required
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.any.isRequired,
  }).isRequired,
};

// when you include the img tag it passes right through the styled component
// you can only have one default export, but other exports are allowed
export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
