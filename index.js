function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(potato => potato.json())
    .then(nicePotat => console.log(nicePotat));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

const body = document.getElementById('body')

const inputLoader = () => {
  // create input
  // append the input to the main
  const input = document.createElement('input')
  input.id = 'input'
  input.type = 'text'
  body.appendChild(input)
}
const buttonLoader = () => {
  const button = document.createElement('button')
  button.type = 'button'
  button.id = 'nice-button'
  button.innerText = 'fiiiind'
  body.appendChild(button)
}

const functionality = () => {
  const button = document.getElementById('nice-button')
  const input = document.getElementById('input')
  button.addEventListener('click', () => {
    // console.log(input.value)
    fetch(`https://jsonplaceholder.typicode.com/posts/${input.value}`)
      .then(res => res.json())
      .then(data => putThisStuffOnScreen(data))
  })
}

const putThisStuffOnScreen = (data) => {
  const p = document.createElement('p')
  p.innerText = data.title
  body.appendChild(p)
}

inputLoader()
buttonLoader()
functionality()
