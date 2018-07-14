import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        input: 'Hello'
    };

  // part pf mew c;asses in JS
  // used when you need to manipulate props before DOM Is loaded / rendered
  // snd setting state, etc.
  // constructor(props) {
  //     super(props);
  //     console.log('constructor');
  // };

  // fired before component renders
  // not used very often
  // componentWillMount() {
  //    console.log('will mount');
  // }

  // called immediately after rendering is finished
  // used if you need to interact with things that only exist once component exists
  // also used for data fetching and rendering
  // this will be used quite frequently
  // // will trigger a re-render
  // componentDidMount() {
  //     console.log('mounted');
  // }

  // refs are taking a DOM element and assigning it a property that you can then reference

  submit = () => {
      console.log(this.text.value);
      console.log(this.email.value);
  };

  // this is how to edit an input value - the state gets updated with each keystroke
  // you can also do stuff like lowercase letters, trimming whitespaces, filtering over based on the input state, etc.
  // example of a controlled input
  updateInput = (event) => {
      this.setState({
          input: event.target.value.trim()
      })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to Using Props" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <h3>{this.state.input}</h3>
          <input type='text' value={this.state.input} onChange={this.updateInput} />
          <input type='text' ref={(input) => this.text = input }/>
          <input type='email' ref={(input) => this.email = input }/>
          <button onClick={this.submit}>Show Value</button>
      </div>
    );
  }
}

class Welcome extends Component {
    render() {
        // deconstruct the object so you don't have to keep writing this.props...
        const { text } = this.props;
        return (
            <h1 className="App-title">{text}</h1>
        )
    }
}

export default App;
