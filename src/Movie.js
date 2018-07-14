import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movie extends Component{

    // defines what props make an appearance here
    // and throws errors if things passed in don't match or are required
    static propTypes  = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired
        })
    };

    // you cannot set default props on a nested property
    static defaultProps = {
        desc: 'Description not available'
    };

    render() {
        return (
            <div>
                <h3>{this.props.movie.title}</h3>
            </div>
        )
    }
}