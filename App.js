import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
      super();
      this.state = { val: 0 }
      this.update = this.update.bind(this);
    }

    componentWillMount() {
      this.setState({ m: 2 })
    }

    componentDidMount() {
      this.inc = setInterval(this.update, 500)
    }

    componentWillUnmount() {
        clearInterval(this.inc)
    }

    update() {
      this.setState({ val: this.state.val + 1 })
    }

    render () {
      console.log('rendering!')
      return (
        <button onClick={this.update}>
          {this.state.val * this.state.m}
        </button>
      );
    }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;
