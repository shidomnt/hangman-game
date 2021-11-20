import reducer from './reducer.js'
import { createStore } from './core.js'

const {connect , attach , dispatch} = createStore(reducer)

window.dispatch = dispatch

export {
  connect,
  attach
}