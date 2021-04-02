let hiddenQ = document.querySelectorAll('[data-role = "revealAnswer"]');

hiddenQ.forEach((q) =>
  q.addEventListener('click', (e) => {
    e.target.previousElementSibling.classList.toggle('answerRevealed');
  })
);

let keyframeEx = document.querySelector('.slide');

keyframeEx.addEventListener('click', (e) => {
  e.target.classList.toggle('slide');
});

let oneAtATimeContainers = [
  ...document.querySelectorAll('.oneAtATimeContainers'),
];
let oneAtATimeButtons = document.querySelectorAll('.oneAtATimeButtons');

oneAtATimeContainers.forEach((container) =>
  container.addEventListener('click', (event) => {
    let container = event.target;
    let children = [...container.children];
    let next = children.find((el) => el.style.opacity == 0);
    next.style.opacity = 1;
  })
);

let makeBlock = document.querySelector('.makeBlock');
makeBlock.addEventListener('click', (e) => {
  console.log(e.target.previousElementSibling);
  e.target.previousElementSibling.classList.toggle('block');
});

let toggleFlex = document.querySelector('.toggleFlex');
toggleFlex.addEventListener('click', (e) => {
  console.log(e.target.previousElementSibling);
  console.log(e.target.previousElementSibling.classList);
  e.target.previousElementSibling.classList.toggle('flex');
  let word = e.target.previousElementSibling.classList.contains('flex')
    ? 'flex'
    : 'block';
  e.target.nextElementSibling.innerText = `display is ${word}`;
});

let marginController = document.querySelectorAll('.margin-Controller');

marginController.forEach((one) =>
  one.addEventListener('change', (e) => {
    let marginbox = document.querySelector('.marginbox');
    let val = e.target.value;
    let prop = e.target.name;
    marginbox.style[prop] = val;
  })
);

let paddingController = document.querySelectorAll('.padding-Controller');

paddingController.forEach((one) =>
  one.addEventListener('change', (e) => {
    let paddingbox = document.querySelector('.paddingbox');
    let val = e.target.value;
    let prop = e.target.name;
    paddingbox.style[prop] = val;
  })
);

let toggleInlineBlock = document.querySelector('.toggleInlineBlock');
toggleInlineBlock.addEventListener('click', (e) => {
  e.target.previousElementSibling.classList.toggle('inline-block');
  console.log(e.target.previousElementSibling.style);
  e.target.nextElementSibling.innerText = e.target.previousElementSibling.classList.contains(
    'inline-block'
  )
    ? 'Display is inline-block'
    : 'Display is inline';
});

let interactiveExamples = document.querySelectorAll('.interactiveExample');
let interactiveInputs = document.querySelectorAll(
  '[data-role = "interactiveInput"]'
);

interactiveInputs.forEach((input) =>
  input.addEventListener('change', (e) => {
    let target = e.target;
    let value = e.target.value;
    let query = target.dataset.queriesfor;
    let propItMutates = target.dataset.cssmutated;
    let pickedExample = document.querySelector(`[data-queryName = ${query}]`);
    // let cssProp = pickedExample.dataset.cssprop;
    pickedExample.style[propItMutates] = value;
  })
);

// let showAllOneAtATime = document.querySelectorAll('.showAll');
// showAllOneAtATime.forEach(showAll => showAll.addEventListener('click', (e) => {

// })
