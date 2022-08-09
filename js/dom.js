// const form = document.querySelector('.login-form')

// form.addEventListener('input', onFormInput)
// form.addEventListener('submit', onFormSubmit)

// const users = []
//  let user = {}
    

// function onFormInput(evt) {
//     evt.preventDefault()
    
   
//     user[evt.target.name] = evt.target.value
//     console.log(user);
// }
 
// function onFormSubmit(evt) {
//      evt.preventDefault()
//     users.push(user)
//     console.log(users);
//     user = {}
//     evt.target.reset()
// }
const tagsContainer = document.querySelector('.js-tags')
tagsContainer.addEventListener('click', onTagsContainerClick)
const selectedTags = new Set()

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return
  }
  const btn = evt.target
  const tag = btn.dataSet.value
  const isActive = btn.classList.contains('tags--btn__active')

  if (isActive) {
    selectedTags.delete(tag)
  } else {
    selectedTags.add(tag)
  }

  btn.classList.toggle('tags--btn__active')
}