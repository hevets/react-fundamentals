import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    // this.props - available within components
    let txt = this.props.txt;
    let cat = this.props.cat;
    return (<h1>{txt} - {cat}</h1>);
  }
}

// Property types ensure we're passing proper types to the properties
// Can also require certain properties to be provided
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

// Declare default props for the App class
App.defaultProps = {
  txt: 'default text',
  cat: 5
};

// We can use ReactDOM to render to the page on a given element
ReactDOM.render(
  <App txt="steve" cat={5} />,
    document.getElementById('app')
);

export default App;
