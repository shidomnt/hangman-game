import html from '../core.js'
import Header from './components/Header.js'
import Container from './components/Container.js'
import { connect } from './store.js'

function App({ isStart }) {
  return html`
    ${Header()}
    ${!isStart &&
    `<h1 class="start-btn" onclick="dispatch('start')">Start!</h1>`}
    ${isStart && Container()}
  `
}

export default connect()(App)
