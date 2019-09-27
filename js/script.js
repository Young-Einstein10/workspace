/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */

const btn = document.querySelector('.btn')
const goal_list = document.querySelector('#goal-list')
const inputGoal = document.querySelector('#inputGoal')




// Event Listeners
btn.addEventListener('click', addGoalToList)



// Functions
var ID = function () {
  return Math.random().toString(36).substr(2, 9)
}

function addGoalToList () {
  if (inputGoal.value === '' || inputGoal.value === null) {
    alert('Pls Enter a Goal')
  } else {
    (function () {
      // Create div elemnt
      const div = document.createElement('div')
      div.className = 'cont'

      // Create p elemnt
      const p = document.createElement('p')
      p.className = 'item-goal'
      p.textContent = inputGoal.value

      // Show todays date
      const today = new Date().toLocaleString()

      // create element o show date
      const date = document.createElement('p')
      date.classList = 'date ml-2'
      date.innerHTML = `<strong>${today}</strong>`

      
      // create view button for todo
      const viewBtn = document.createElement('button')
      viewBtn.classList = 'btn btn-primary viewBtn'   
      viewBtn.id = ID()
      viewBtn.textContent = 'View Todo'

      
      // create button to add todoitem
      const addBtn = document.createElement('button')
      addBtn.classList = 'btn btn-primary addBtn'   
      addBtn.id = ID()
      addBtn.textContent = 'Add Todo'


      // create delete icon for button
      const del = document.createElement('i')
      del.classList = 'fa fa-trash-o de'
      del.setAttribute('job', 'delete')

      div.appendChild(p)
      div.appendChild(viewBtn)
      div.appendChild(addBtn)
      div.appendChild(del)
      div.appendChild(date)
      goal_list.appendChild(div)
    })()

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

    (function saveinLS (inputGoal) {
      let inputGoals = getInputFromLS()

      inputGoals.push(inputGoal)
      localStorage.setItem('inputGoals', JSON.stringify(inputGoals))
    })(inputGoal.value)

    inputGoal.value = ''
  }
}

// Eventlistener on addTodo Btn
const addButton = document.querySelector('#goal-list')

addButton.addEventListener('click', (e) => {
  if (e.target.classList.contains('addBtn')) {
    const addBtn = document.querySelectorAll('.addBtn')
    const todoContainer = document.querySelector('.todo-container')
      
    // todoContainer.classList.toggle('hide');
    todoContainer.classList.toggle('unhide')
  }
})

var todosArr = []
// Event listener for view btn
addButton.addEventListener('click', (e) => {
  if (e.target.classList.contains('viewBtn')) {
    // console.log(todosArr)       

    for (let todo of todosArr) {
      console.log(todo)
      
      const todosInput = document.querySelector('#input')
      const todoBtn = document.querySelector('.todo-btn')

      todoBtn.addEventListener('click', addTodos)

    
      function addTodos () {
        if (todosInput.value === '' || todosInput.value === null) {
          alert('Enter a Todo')
        } else {
          // store todos input in array
          todosArr.push(todosInput.value)
          // console.log(todosArr)

          todosInput.value = ''
        }
      }

      // Create ul element in second column to display todos 
      const viewDiv = document.createElement('ul')
      viewDiv.classList = 'todosList list-group'
      const li = document.createElement('li')
      li.classList = 'todo-list-item list-group-item'
      li.textContent = `${todo}`
      
      const second = document.querySelector('.second')
      
      viewDiv.appendChild(li)
      second.appendChild(viewDiv)
    }        
  }
})
