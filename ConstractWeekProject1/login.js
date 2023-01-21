let container = document.querySelector(".container")
let pwshowhide = document.querySelector(".shoehidepw")
let pwfield = document.querySelector(".password")
let email = document.getElementById("email")
let btn = document.getElementById("btn")
let form = document.querySelector("form")
let message  =document.querySelector("#message")

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
    Display(dataarr)
})
    function Display(data){
    data.forEach((element)=>{
        if(email.value===element.email && pwfield.value===element.password){
            
            console.log(email.value,pwfield.value)
        }
    })
    }

        
   
