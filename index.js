const timer = document.querySelector('.timer');
const word = document.querySelector('.word');
const button = document.querySelector('.start');
const winsСount = document.querySelector('.wins-count');
let counterWins = +winsСount.innerText;

const arr = [
  'Elbrus Bootcamp',
  'JavaScript',
  'VSCode',
  'Eslint',
  'Typerro',
  'Function',
  'Array methods',
  'Recursion',
  'Asyn Iterators',
  'Typescript',
  'WebStorm',
  'Google Chrome',
  'Use strict',
  'Console log',
  'Alert',
  'Constanta',
  'BigInt',
  'String',
  'Boolean',
  'Undefined',
  'Switch case',
  'Default',
  'Function Expression',
  'Debugging',
];

button.addEventListener('click', (event) => {
  event.preventDefault();
  if (timer.innerText === '0') {
    typerro(arr[random()]);
    setTimer(51);
  }
});

function random() {
  return Math.floor(Math.random() * arr.length);
}

function setTimer(count) {
  let sec = count;
  const timerId = setInterval(() => {
    sec -= 1;
    timer.innerText = sec;
  }, 1000);
  setTimeout(() => {
    clearInterval(timerId);
    alert(`Время вышло! У Вас ${counterWins} побед!`);
    location.reload();
  }, count * 1000);
}

function createWord(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    newStr += `<span data-index=${i}>${str[i]}</span>`;
  }
  word.innerHTML = newStr;
}

function typerro(str) {
  createWord(str);

  const spans = word.childNodes;
  let count = +spans[0].dataset.index;
  spans[0].classList.add('pointer');

  window.addEventListener('keydown', (event) => {
    event.preventDefault();

    if (event.code === `Key${str[count].toUpperCase()}`) {
      spans[count].classList.remove('red');
      spans[count].classList.add('green');
      spans[count].classList.remove('pointer');
      count += 1;
    } else if (event.code === 'Space' && str[count] === ' ') {
      spans[count].classList.remove('red');
      spans[count].classList.add('green');
      count += 1;
    } else if (event.code !== `Key${str[count].toUpperCase()}`) {
      spans[count].classList.add('red');
    }
    if (count === str.length) {
      counterWins += 1;
      winsСount.innerText = counterWins;
      typerro(arr[random()]);
    }
  });
}
