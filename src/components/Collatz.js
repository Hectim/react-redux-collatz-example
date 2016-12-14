import React, { Component, PropTypes } from 'react'

class Collatz extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    calculate: PropTypes.func.isRequired,
    updateValue: PropTypes.func.isRequired
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.count !== this.props.count){
      this.calculateAsync()
    } else {
      console.log('all done')
    }
  }

  calculateAsync = () => {
    setTimeout(this.props.calculate, 200)
  }

  doSomething = (event) => {
    if(event.key === 'Enter'){
      this.props.updateValue(parseInt(event.target.value, 10))
    }
  }

  render() {
    const { value, count} = this.props
    return (
      <p>
        Value: {value}, Chain-Length: {count}<br />
        { value !== 1 ?
          <button onClick={this.calculateAsync}>calculate</button> :
          'All Done!' }
        <br />
        New Seed:
        <input type="number" name="number" onKeyUp={this.doSomething} />
      </p>
    )
  }
}

export default Collatz
