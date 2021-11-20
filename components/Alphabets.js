import html from '../core.js'

export default function Alphabets(chosen) {
  let alphabetHtml = ''
  for (let i = 97; i < 123; i++) {
    const char = String.fromCharCode(i)
    alphabetHtml += html`<li
      data-value="${char}"
      onclick="dispatch('answer',this.dataset.value,this)"
      class="alphabet ${chosen.includes(char) && 'chosen'}"
    >
      ${char}
    </li>`
  }
  return html` ${alphabetHtml} `
}
