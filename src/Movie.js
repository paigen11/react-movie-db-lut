import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const POSTER_PATH='http://image.tmdb.org/t/p/w154';

// this is now a functinoal stateless component
const Movie = ({ movie }) => (
  <div>
    <Link to={`/${movie.id}`}>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
  </div>
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
  }).isRequired,
};
