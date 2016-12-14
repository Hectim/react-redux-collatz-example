import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Collatz from './components/Collatz'
import collatz from './reducers'

const store = createStore(collatz)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Collatz
    value={store.getState().value}
    count={store.getState().count}
    calculate={() => store.dispatch({ type: 'COLLATZ CALCULATE' })}
    updateValue={(v) => store.dispatch({ type: 'UPDATE VALUE', value: v })}
  />,
  rootEl
)

render()
store.subscribe(render)
