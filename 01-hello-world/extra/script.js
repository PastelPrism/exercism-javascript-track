import { hello } from './hello.js';

const input = document.getElementById('user-input');
const output = document.getElementById('output');
const screen = document.getElementById('screen');

screen.addEventListener('click', () => input.focus());

input.addEventListener('input', () => {
  input.style.width = (input.value.length + 1) + 'ch';
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const userText = input.value;
    output.textContent += `\n> ${userText}\n${hello()}\n`;
    input.value = '';
    input.style.width = '1ch';
  }
});

