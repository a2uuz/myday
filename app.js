let btnCreate = document.querySelector('.btn-main');

btnCreate.addEventListener(`click`, () =>{
  // Local Variables
  const input = document.querySelector('.input-main');
  const list = document.querySelector('ul')
  
  list.insertAdjacentHTML(
    `afterbegin`,
    ` <li>${input.value}</li>`
  )

  input.value = '';

// update button bgcolor and border when heading updates
btnCreate.style.borderBottom = '5px solid deeppink'
btnCreate.style.backgroundColor = 'mediumvioletred' 
})



// Hide and Show List 
const toggleList = document.querySelector('.btn-toggle');
// Event Listener
toggleList.addEventListener('click', () =>{

// The Block of Elements that's gonna be effected when clicked
const showList = document.querySelector('.list-container');

/* if the list is set to display: none show it by turning it back 
  to it is default display: block or else hide it by display:none 
*/
if (showList.style.display === 'none') {
  toggleList.innerHTML = 'Hide List'
  showList.removeAttribute('style');
} else {
  toggleList.innerHTML = 'Show List'
  showList.style.display = 'none';
}
});

const btnRemove = document.querySelector('.btn-remove');
btnRemove.addEventListener(`click`, () =>{

  const lastChild = document.querySelector('li:last-child');
  lastChild.remove();
})