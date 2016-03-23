import React from 'react';

// Component #1
// class App extends React.Component {
//   render() {
//     // React.createElement('h1', null, 'Hello World');
//     return <h1>Hello World</h1>;
//   }
// }


// Component #2
// Stateless function component
// const App = () => <h1>Hello World</h1>;

// Component #3
// We need to return a single DOM node (which is why we wrap this in a div)
class App extends React.Component {
  render() {
    return (<div><h1>Hello World</h1><b>Bold</b></div>);
  }
}

export default App;
