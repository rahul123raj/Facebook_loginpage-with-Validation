let data = [
    {
        email : 'rahul123rajkr@gmail.com',
        password : 'Rahul@9931#'
    },

    {
        email : 'rahul123raj@gmail.com',
        password : '12345'
    },

    {
        email : 'rahulrajkr@gmail.com',
        password : 'password'
    }
]

let login_btn = document.querySelector("#login")

login_btn.addEventListener('click',()=>{
    let input_username = document.querySelector("#username")
    let input_password = document.querySelector("#password")
    let inValid = false;

    for(user of data){
        if(user.email === input_username.value && user.password === input_password.value){
            console.log("welcome")
            inValid = true             
        }
    }

    if(inValid){
        console.log("welcome")
        window.location.href = './welcome.html'
        input_username.value = ''
    }else{
        console.log("incorrect password")
    }
})