const inputGoal = document.querySelector('#inputGoal')
const goal_list = document.querySelector('#goal-list')
const btn = document.querySelector('.btn')
const content = document.querySelector('.content')
const second = document.querySelector('.second')
const third = document.querySelector('.third')


btn.addEventListener('click', (e) => {
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
  const date = document.createElement('small')
  date.innerHTML = `<strong>${today}</strong>`

  div.appendChild(p)
  div.appendChild(date)
  goal_list.appendChild(div)
})

content.addEventListener('click', (e) => {
  console.log(e.target)

  second.style.display = 'block'
  second.style.visibility = 'visible'
  third.style.display = 'block'
  third.style.visibility = 'visible'
})

content.addEventListener('blur', (e) => {
  console.log(e.target)

  second.style.display = 'none'
  second.style.visibility = 'hidden'
  third.style.display = 'none'
  third.style.visibility = 'hidden'
})
