import random from './Random.js'

const init = {
  isStart: false,
  lives: null,
  hintStatus: null,
  currentQuiz: null,
  specialChar: [' ', '-', '.', '+'],
  quizes: [
    {
      category: 'Games',
      answer: 'The Witcher',
      hint: 'Game Of The Year 2015',
    },
    {
      category: 'Cities',
      answer: 'London',
      hint: 'City of England',
    },
  ],
  newQuiz() {
    const quiz = this.quizes[random(this.quizes.length)]
    this.lives = 10
    this.hintStatus = false
    this.currentQuiz = {
      ...quiz,
      answer: quiz.answer.split(''),
      process: quiz.answer.split('').filter(x => !this.specialChar.includes(x)),
      chosen: [],
    }
  },
}

const properties = {
  status: {
    get() {
      return this.currentQuiz?.process.length === 0
        ? 'You Win'
        : this.lives === 0
        ? 'You Lose'
        : ''
    },
    enumerable: true,
  },
}

Object.defineProperties(init, properties)

const actions = {
  start(state) {
    state.isStart = true
    state.newQuiz()
  },
  hint(state) {
    state.hintStatus = true
  },
  reset(state) {
    state.newQuiz()
  },
  answer(state, [value]) {
    const { chosen } = state.currentQuiz
    if (!chosen.includes(value) && !state.status) {
      chosen.push(value)
      if (
        state.currentQuiz.process.includes(value) ||
        state.currentQuiz.process.includes(value.toUpperCase())
      ) {
        state.currentQuiz.process = state.currentQuiz.process.filter(
          char => char.toLowerCase() !== value
        )
      } else {
        state.lives--
      }
    }
  },
}

export default function reducer(state = init, action, args) {
  actions?.[action]?.(state, args)
  return state
}
