let form = document.querySelector(".form__login")
let inputs = document.querySelector(".login")

form.addEventListener('submit', e=>{
    e.preventDefault()
    const user = {}
    for(let i of inputs){
        user[i.name] = i.value
    }
    if(Object.keys(user).length>1){
        localStorage.setItem('user', JSON.stringify(user))
    }
    window.location.replace('/')

})