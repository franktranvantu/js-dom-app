const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('.addItemButton');
const list = listUl.children;

function attachListItemButtons(li) {
  const up = document.createElement('button');
  up.textContent = 'Up';
  up.className = 'up';
  li.appendChild(up);

  const down = document.createElement('button');
  down.textContent = 'Down';
  down.className = 'down';
  li.appendChild(down);

  const remove = document.createElement('button');
  remove.textContent = 'Remove';
  remove.className = 'remove';
  li.appendChild(remove);
}

for (let i = 0; i < list.length; i++) {
  attachListItemButtons(list[i]);
}

listUl.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.className === 'remove') {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      ul.removeChild(li);
    }

    if (event.target.className === 'up') {
      const button = event.target;
      const li = button.parentNode;
      const prevLi = li.previousElementSibling;
      const ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }

    if (event.target.className === 'down') {
      const button = event.target;
      const li = button.parentNode;
      const nextLi = li.nextElementSibling;
      const ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display === 'none') {
    listDiv.style.display = 'block';
    toggleList.textContent = 'Hide list';
  } else {
    listDiv.style.display = 'none';
    toggleList.textContent = 'Show list';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});