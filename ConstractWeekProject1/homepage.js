let next = document.getElementById("next")
let pre = document.getElementById("pre")
let imgtag = document.querySelector(".slideimg>img")
let openMenu = document.querySelector(".fa-bars")
let closeMenu = document.querySelector(".uil-times")
let mainMenu = document.querySelector(".items")
let searchform = document.getElementById("searchform")
let currentindex = 0

openMenu.addEventListener('click',show)
closeMenu.addEventListener('click',close)

function show(){
    mainMenu.style.transform = 'translateX(0%)'
}
function close(){
    mainMenu.style.transform = 'translateX(-100%)'
}

let imgarr = ["https://belk.scene7.com/is/image/Belk/wk50_2023_trendedit_fh?$DWP_PHOTO$","https://belk.scene7.com/is/image/Belk/wk51_011623_hp_fh3?&$DWP_GRAPHIC$","https://belk.scene7.com/is/image/Belk/wk50_2023_online_exclusive_hp_fh_1?$DWP_PHOTO$","https://belk.scene7.com/is/image/Belk/wk36_2022_spec_clearance_bopis_ch_fh1?$DWP_PHOTO$"]

pre.addEventListener("click",()=>{
    currentindex--
    if(currentindex<0){
        currentindex = imgarr.length-1
    }
    display()
})
next.addEventListener("click",()=>{
    currentindex++
    if(currentindex===imgarr.length){
        currentindex = 0
    }
    display()
})
setInterval(() => {
    currentindex++
    if(currentindex===imgarr.length){
        currentindex = 0
    }
    display()
}, 2000);
display()
function display(){
imgtag.setAttribute("src",imgarr[currentindex])
}
display()
