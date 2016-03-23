import React from 'react';

class App extends React.Component {

  constructor() {
    super(); // gives us context for this in our Component

    this.state = { txt: 'this is the state text' };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ txt: e.target.value });
  }

  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    );
  }

}

const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.update} />
      <p>{props.txt}</p>
    </div>
  );
};

export default App;
