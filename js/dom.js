const form = document.querySelector('.login-form')

form.addEventListener('input', onFormInput)
form.addEventListener('submit', onFormSubmit)

const users = []
 let user = {}
    

function onFormInput(evt) {
    evt.preventDefault()
    
   
    user[evt.target.name] = evt.target.value
    console.log(user);
}
 
function onFormSubmit(evt) {
     evt.preventDefault()
    users.push(user)
    console.log(users);
    user = {}
    evt.target.reset()
}
