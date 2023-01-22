let body = document.querySelector(".cards")
let countcart = document.querySelector("span")

let API = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products"

let url = "https://fakestoreapi.com/products"


let cartarr = JSON.parse(localStorage.getItem("cart"))
if(cartarr===null){
    cartarr = []
}
console.log(cartarr)
countcart.innerText = cartarr.length
asyncFetch();

async function asyncFetch(){
    try {
        let request = await fetch(API)
        let data = await request.json();
        fetchdata = data.data.map(function(element){
            return{
                name: element.brand,
                img: element.img,
                category: element.category,
                descriptions:element.details,
                price: element.price,
            }
        })
        Display(fetchdata)
        
    } catch (error) {
        console.log(error)
    }
}

asyncFetch1()
async function asyncFetch1(){
    try {
        let request = await fetch(url)
        let data1 = await request.json();
        fetchdata1 = data1.map(function(element){
            return{
                name: element.title,
                img: element.image,
                category: element.category,
                descriptions:element.description,
                price: element.price,
            }
        })
        Display1(fetchdata1)
    } catch (error) {
        console.log(error)
    }
}


function Display1(data){
    data.forEach((element)=>{
        let card = document.createElement("div")
        card.setAttribute("class","card")

        let img = document.createElement("img")
        img.setAttribute("src",element.img)

        let name = document.createElement("h2")
        name.innerText = element.name

        let category = document.createElement("h5")
        category.innerText  =element.category

        let description  = document.createElement("p")
        description.innerText = element.descriptions

        let price  =document.createElement("p")
        price.innerText = element.price

        let btn = document.createElement("button")
        btn.innerText = "Add to Cart"
        btn.addEventListener("click",()=>{
            cartarr.push(element)
                localStorage.setItem("cart",JSON.stringify(cartarr))
                countcart.innerText = cartarr.length
        })


        card.append(img, name, category, description, price, btn)
        body.append(card)
    })
}

function Display(data){
    data.forEach((element)=>{
        let card = document.createElement("div")
        card.setAttribute("class","card")

        let img = document.createElement("img")
        img.setAttribute("src",element.img)

        let name = document.createElement("h2")
        name.innerText = element.name

        let category = document.createElement("h5")
        category.innerText  =element.category

        let description  = document.createElement("p")
        description.innerText = element.descriptions

        let price  =document.createElement("p")
        price.innerText = element.price

        let btn = document.createElement("button")
        btn.innerText = "Add to Cart"
        btn.addEventListener("click",()=>{
            cartarr.push(element)
                localStorage.setItem("cart",JSON.stringify(cartarr))
                countcart.innerText = cartarr.length
        })


        card.append(img, name, category, description, price, btn)
        body.append(card)
    })
}