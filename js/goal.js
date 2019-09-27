const inputGoal = document.querySelector('#inputGoal')
const goal_list = document.querySelector('#goal-list')
const btn = document.querySelector('.btn')
const content = document.querySelector('.content')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

btn.addEventListener('click', (e) => {
  if (inputGoal.value === '' || inputGoal.value === null) {
    alert('Pls Enter a Goal')
  } else {
    // Create div elemnt
    const div = document.createElement('div')
    div.className = 'cont'

    // Create p elemnt
    const p = document.createElement('p')
    p.className = 'item-goal'
    p.textContent = inputGoal.value

    // Show todays date
    const options = { weekday: 'long', month: 'short', day: 'numeric' }
    const today = new Date()
    today.toLocaleDateString('en-US', options)

    // create element o show date
    const date = document.createElement('p')
    date.classList = 'date'
    date.innerHTML = `<strong>${today}</strong>`

    // create view button for todo
    const viewBtn = document.createElement('button')
    viewBtn.classList = 'btn btn-primary viewBtn'
    viewBtn.textContent = 'View Todo'

    // create button to add todoitem
    const addBtn = document.createElement('button')
    addBtn.classList = 'btn btn-primary addBtn'
    addBtn.textContent = 'Add Todo'

    div.appendChild(p)
    div.appendChild(viewBtn)
    div.appendChild(addBtn)
    div.appendChild(date)
    goal_list.appendChild(div)

    saveinLS(inputGoal.value)

    inputGoal.value = ''

    // eslint-disable-next-line no-inner-declarations
    function saveinLS (inputGoal) {
      let inputGoals = getInputFromLS()

      inputGoals.push(inputGoal)
      localStorage.setItem('inputGoal', JSON.stringify(inputGoal))
    }

    function getInputFromLS () {
      let inputGoals
      const inputFromLS = localStorage.getItem('inputGoal')
      if (inputFromLS === null) {
        inputGoals = []
      } else {
        inputGoals = JSON.parse(inputFromLS)
      }
      return inputGoals
    }
  }
})

// content.addEventListener('click', (e) => {
//   console.log(e.target)

//   second.style.display = 'block'
//   second.style.visibility = 'visible'
//   third.style.display = 'block'
//   third.style.visibility = 'visible'
// })

// Eventlistener on addTodo Btn
const addButton = document.querySelector('#goal-list')

addButton.addEventListener('click', (e) => {
  if (e.target.classList.contains('addBtn')) {
    // console.log(e.target)
    // create input element to add todos
    const addData = document.createElement('input')
    addData.setAttribute('type', 'text')
    addData.setAttribute('placeholder', 'Add Todo')
    addData.classList = 'addInput'

    const secondColumn = document.querySelector('.second')
    secondColumn.appendChild(addData)
  }
})
