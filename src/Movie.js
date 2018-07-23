import React, { Component } from "react";
import PropTypes from "prop-types";

// this is now a stateless component
const Movie = () => (
  <div>
    <h3>{props.movie.title}</h3>
  </div>
);

// you cannot set default props on a nested property
// static defaultProps = {
//   desc: 'Description not available',
// };

// defines what props make an appearance here
// and throws errors if things passed in don't match or are required
// static propTypes  = {
//   movie: PropTypes.shape({
//     title: PropTypes.string.isRequired
//   }),
// }
