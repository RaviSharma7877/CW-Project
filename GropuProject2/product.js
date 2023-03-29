let api = 'https://63c9170d320a0c4c9540575f.mockapi.io/products?_limit=10&page=1'
let form = document.querySelector("#category-filter form")
let min = document.getElementById("min")
let clear1 = document.querySelector(".clear")
let mainbody = document.querySelector("#product-container>div")
let max = document.getElementById("max")
let priceslider = document.getElementById("priceslider")
let mensfilter = document.querySelector("#Mens")
let womensfilter = document.querySelector("#Womens")
let check = document.querySelectorAll(".check")



check.forEach((element)=>{
  check.addEventListener("change",(event)=>{
    let ischecked = event.target.checked
    if(ischecked){
      console.log(element.value)
    }
  })
  
  
})









max.value = priceslider.value


priceslider.oninput = function(){
  max.value = priceslider.value
}
clear1.addEventListener("click",()=>{
  max.value = 50
  min.value = 0
  priceslider.value = 50
})

window.addEventListener("load",(e)=>{
  e.preventDefault()
  fetchandremder()
})


async function fetchandremder(){
  try {
    mainbody.innerHTML = null
  let res = await fetch(`${api}`)
  let data = await res.json()
  mainbody.innerHTML = renderingdata(data)




  mensfilter.addEventListener("change",(event)=>{
    let ischecked = event.target.checked
    
    if(ischecked){
      let filtered1 = data.filter((element)=>{
        if(element.category=="mens"){
          return true
        }
      })
      mainbody.innerHTML = renderingdata(filtered1)
    }else{
      mainbody.innerHTML = renderingdata(data)
    }
    
    })



  womensfilter.addEventListener("change",(event)=>{
    let ischecked = event.target.checked
    
    if(ischecked){
      let filtered1 = data.filter((element)=>{
        if(element.category=="women"){
          return true
        }
      })
      mainbody.innerHTML = renderingdata(filtered1)
    }else{
      mainbody.innerHTML = renderingdata(data)
    }
    
    })






  form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let lower = +(min.value)
    let upper = +(max.value)

    console.log(lower+" "+upper)
let filtered = data.filter((element)=>{
  if(element.price>=lower && element.price<=upper){
    return true
  }else{
    return false
  }
})
mainbody.innerHTML = renderingdata(filtered)

  })
  console.log(data)
  } catch (error) {
    console.log(error)
  }
}

function renderingdata(data){
  return `
    ${data.map((item)=>{
  return getcard(item.id, item.src , item.name,item.brand, item.description, item.category,item.price , item.totalquantity)
}).join("")}

  `
}
function getcard(id,image, title, brand,description, category, price, totalquantity){
  return `
  <div class="card-item">
      <img src="${image}" alt="product">
        <h3>${title}</h3>
        <p>${brand}</p>
        <p>${price}</p>
        <p>Hurry! only <span>${totalquantity}</span> left...</p>

        <button class="catrbtn">Add to cart</button>
    </div>
  `
}
