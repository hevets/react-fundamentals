import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor() {
      super();
      this.state = { val: 0 }
      this.update = this.update.bind(this);
    }

    componentWillMount() {
      console.log('mounting')
    }

    componentDidMount() {
      console.log('mounted');
    }

    componentWillUnmount() {
        console.log('bye!')
    }

    update() {
      this.setState({ val: this.state.val + 1 })
    }

    render () {
      console.log('rendering!')
      return <button onClick={this.update}>{this.state.val}</button>
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
