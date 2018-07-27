/* eslint react/no-did-mount-set-state:0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

// a pure component only renders when a first level prop or state has been changed (for performance gains)
// i.e. this component only checks first level stuff, not deep checking (like checking an array of objects, if one of those objects has changed)
class MoviesList extends PureComponent {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
      );
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
