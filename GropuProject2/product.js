let api = 'https://64228af2001cb9fc20290cae.mockapi.io/products'


let mainbody = document.querySelector("#product-container>div")
let max = document.getElementById("max")
let priceslider = document.getElementById("priceslider")

max.value = priceslider.value


priceslider.oninput = function(){
  max.value = priceslider.value
}




window.addEventListener("load",()=>{
  fetchandremder()
})

async function fetchandremder(){
  let res = await fetch(api)
  let data = await res.json()
  mainbody.innerHTML = renderingdata(data)
  console.log(data)
}

function renderingdata(data){
  return `
    ${data.map((item)=>{
  return getcard(item.id, item.avatar , item.name,item.brand, item.description, item.category,item.price , item.quantity)
}).join("")}

  `
}
function getcard(id,image, title, brand,description, category, price, totalquantity){
  return `
  <div class="card-item">
      <img src="${image}" alt="product">
        <h3>${title}</h3>
        <p>${brand}</p>
        <p>${description}</p>
        <p>${category}</p>
        <p>${price}</p>
        <p>Hurry! only <span>${totalquantity}</span> left...</p>

        <button class="catrbtn">Add to cart</button>
    </div>
  `
}
