let container = document.querySelector(".container")
let pwshowhide = document.querySelector(".shoehidepw")
let pwfield = document.querySelector(".password")
let email = document.getElementById("email")
let btn = document.getElementById("btn")
let form = document.querySelector("form")
let message  =document.querySelector("#message")
let logcheck = document.getElementById("logcheck")

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

btn.addEventListener("click",()=>{
    let ans = false
    for(let i=0;i<dataarr.length;i++){
        if(email.value===dataarr[i].email && pwfield.value===dataarr[i].password){
            ans = true
        }
    }
    if(ans == true){
        if(logcheck.checked){
            message.innerText = "Password match"
        message.style.color = "green"
        window.location.assign("homepage.html")
        alert("Login successfull")
        }else{
            pwfield.value=""
            alert("Checkbox is Empty")
        }
        
    }else{
        message.innerText = "Password error"
        message.style.color = "red"
        pwfield.value=""
        alert("Check password")
    }
})
    
    

        
   
