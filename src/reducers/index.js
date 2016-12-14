var initialState = {
  value: 31,
  count: 0
}

function collatzReducer(state, action){
  switch (action.type) {
    case 'COLLATZ EVEN':
      console.log('collatzReducer action', action.type)
      if(state.value%2 === 0){
        return {
          value: state.value/2,
          count: state.count + 1
        }
      } else {
        return state
      }
    case 'COLLATZ ODD':
      console.log('collatzReducer action', action.type)
      if(state.value%2 !== 0){
        return {
          value: state.value * 3 + 1,
          count: state.count + 1
        }
      } else {
        return state
      }
    default:
      return state
  }
}


export default (state=initialState, action) => {
  switch (action.type) {
    case 'COLLATZ CALCULATE':
      console.log('called with action', action.type)
      if(state.value === 1){
        return state
      } else if(state.value%2 === 0){
        return collatzReducer(state, {type: 'COLLATZ EVEN'})
      } else {
        return collatzReducer(state, {type: 'COLLATZ ODD'})
      }
    case 'UPDATE VALUE':
      // reset count when setting a new value
      return {
        value: action.value,
        count: 0
      }
    default:
      return state
  }
}
