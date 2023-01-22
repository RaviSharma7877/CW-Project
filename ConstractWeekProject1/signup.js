let container = document.querySelector(".container")
let pwshowhide = document.querySelector(".shoehidepw")
let pwfield = document.querySelector(".conpassword")
let password = document.querySelector(".password")
let message  =document.querySelector("#message")
let name1  = document.getElementById("name")
let email1 = document.getElementById("email")
let logcheck = document.getElementById("logcheck")

let form = document.querySelector("form")

pwshowhide.addEventListener("click",()=>{
    if(pwfield.type === "password"){
        pwfield.type = "text";
    }else{
        pwfield.type = "password"
    }
})
let dataarr = JSON.parse(localStorage.getItem("data"))
if(dataarr===null){
    dataarr = []
}
console.log(dataarr)





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

function test(){

    checkpassword()
    let obj = {
        name: name1.value,
        email:email1.value,
        password : password.value,
        conpassword : pwfield.value
    }
    if(password.value===pwfield.value){
        if(logcheck.checked){
            dataarr.push(obj)
        localStorage.setItem("data",JSON.stringify(dataarr))
        window.location.assign("index.html")
        alert("Signup Successful pls Login")
        }else{
            alert("Checkbox is Empty")
        }
        
    }else{
        alert("password doesn't match")
    }
    
    
}
