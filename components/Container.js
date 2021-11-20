import html from '../core.js'
import Alphabets from './Alphabets.js'
import ProgressBox from './ProgressBox.js'
import { connect } from '../store.js'
import answerBox from './AnswerBox.js'

function Container({
  currentQuiz: { chosen, answer, process, category, hint },
  lives,
  hintStatus,
  status,
}) {
  return html`
    <section class="container">
      <p class="guide">
        Use the alphabet below to guess the word, or click hint to get a clue.
      </p>
      <ul class="alphabets">
        ${Alphabets(chosen)}
      </ul>
      <div class="chosen-category">The Chosen Category Is ${category}</div>
      <div class="answer-box">${answerBox(answer, process)}</div>
      <div class="live-count">You have ${lives} lives</div>
      <div class="clue">Clue - ${hintStatus && hint}</div>
      <div class="status">${status}</div>
      <div class="progress-box">
        <ul>
          ${ProgressBox(10 - lives)}
        </ul>
      </div>
      <div class="control-btns">
        <div onclick="dispatch('hint')" class="btn hint">Hint</div>
        <div onclick="dispatch('reset')" class="btn reset">Play again</div>
      </div>
    </section>
  `
}

export default connect()(Container)
