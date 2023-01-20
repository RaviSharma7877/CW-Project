let container = document.querySelector(".container")
let pwshowhide = document.querySelector(".shoehidepw")
let pwfield = document.querySelector(".password")

pwshowhide.addEventListener("click",()=>{
    if(pwfield.type === "password"){
        pwfield.type = "text";
    }else{
        pwfield.type = "password"
    }
})