import html from '../core.js'

export default function ProgressBox(number) {
  let progressHtml = ''
  for (let i = 0; i < number; i++) {
    progressHtml += '<li></li>'
  }
  return html` ${progressHtml} `
}
