let container = document.querySelector(".container")
let pwshowhide = document.querySelector(".shoehidepw")
let pwfield = document.querySelector(".password")
let password = document.querySelector(".password1")
let message  =document.querySelector("#message")

pwshowhide.addEventListener("click",()=>{
    if(pwfield.type === "password"){
        pwfield.type = "text";
    }else{
        pwfield.type = "password"
    }
})


function checkpassword(){
    console.log(pwfield.value , password.value)
    if(password.length !=0){
        if(password.value === pwfield.value){
            message.textContent = "Password match"
            message.style.color = "green"
        }else{
            message.textContent = "Check password"
            message.style.color = "red"
        }
    }
}