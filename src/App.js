/* eslint react/no-did-mount-set-state:0 */
/* allows for individual eslinting of files */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

class App extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      // get data
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
      );
      // make data into json to read
      const movies = await res.json();
      // set movies into state
      // eslint-disable-line
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
