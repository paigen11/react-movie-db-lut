/* eslint react/no-did-mount-set-state:0 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Movie from './Movie';
import { getMovies } from './actions';

/* a pure component only renders when a first level prop or state has been changed
(for performance gains)i.e. this component only checks first level stuff, not deep checking
(like checking an array of objects, if one of those objects has changed) */
class MoviesList extends PureComponent {
  componentDidMount() {
    // fires dispatch then getMovies from our action
    const { getMovies, isLoaded, moviesLoadedAt } = this.props;
    const oneHour = 60 * 60 * 1000;
    console.log(new Date() - new Date(moviesLoadedAt));
    // check if movies are loaded and if so, check if they're over 1 hour old and fetch if they are
    if (!isLoaded || new Date() - new Date(moviesLoadedAt) > oneHour) {
      getMovies();
      // this.props.getMovies();
    }
  }

  render() {
    const { movies } = this.props;
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
  moviesLoadedAt: state.movies.moviesLoadedAt,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesList);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  moviesLoadedAt: PropTypes.string.isRequired,
  getMovies: PropTypes.func.isRequired,
};

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
