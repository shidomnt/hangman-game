import html from '../core.js'

export default function answerBox(answer, process) {
  return html`
    ${answer.reduce((acc, cur) => {
      return acc + `<span>${!process.includes(cur) ? cur : '_'}</span>`
    }, '')}
  `
}
