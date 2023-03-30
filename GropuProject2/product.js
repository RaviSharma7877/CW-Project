let api = 'https://63c9170d320a0c4c9540575f.mockapi.io/products?_limit=10&page=1'
let form = document.querySelector("#category-filter form")
let min = document.getElementById("min")
let clear1 = document.querySelector(".clear")
let mainbody = document.querySelector("#product-container")
let max = document.getElementById("max")
let priceslider = document.getElementById("priceslider")
let check = document.querySelectorAll(".check")
let allproductsfilter = document.querySelector("#allproducts")
let mensfilter = document.querySelector("#mens")
let womensfilter = document.querySelector("#womens")
let kidsfilter = document.querySelector("#kids")
let bagsfilter = document.querySelector("#bags")
let decorefilter = document.querySelector("#decore")
let giftsfilter = document.querySelector("#gifts")
let nikefilter = document.querySelector("#nike")
let Adidasfilter = document.querySelector("#Adidas")
let Louisfilter = document.querySelector("#Louis")
let Cartierfilter = document.querySelector("#Cartier")
let Zarafilter = document.querySelector("#Zara")
let topsfilter = document.querySelector("#topsfilter")
let jeanfilter = document.querySelector("#jeanfilter")
let bagpacks = document.querySelector("#bagpacks")
let searchform = document.querySelector("#form")
let stars = document.querySelectorAll(".star")
let output = document.querySelector(".displayrating")





for(let i=0;i<stars.length;i++){
  stars[i].starvalue = i+1
  ["click","mouseover","mouseout"].forEach((e)=>{
    stars[i].addEventListener(e, showrating)
  })
}

function showrating(e){
  let type = e.type
  let starvalue = this.starvalue

  stars.forEach((elem,ind)=>{
    if(type === "click"){
      if(ind< starvalue){
        
      }
    }
  })
}






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




  searchform.addEventListener("submit",(e)=>{
    e.preventDefault()
    let searchpara = searchform.search.value
console.log(searchpara)
    let filtered1 = data.filter((element)=>{
        if(element.name.toUpperCase().includes(searchpara.toUpperCase())===true){
            return true
        }else{
            return false
        }
    })
    mainbody.innerHTML = renderingdata(filtered1)
  })

















allproductsfilter.addEventListener("click",()=>{
  mainbody.innerHTML = renderingdata(data)
  allproductsfilter.style.backgroundColor = "rgb(17, 17, 153)"
})
mensfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="mens"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
womensfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="women"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
kidsfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="kids"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
bagsfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="bags"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
decorefilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="homedecore"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
giftsfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.category=="gifts"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})








nikefilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="nike"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
Adidasfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="adidas"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
Louisfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="louis vuitton"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
Cartierfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="cartier"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
Zarafilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.brand=="zara"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})





topsfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.product_badge=="top"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
jeanfilter.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.product_badge=="jeans"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
})
bagpacks.addEventListener("click",()=>{
  let filtered = data.filter((ele)=>{
    if(ele.product_badge=="bags"){
      return true
    }else{
      return false
    }
  })
  mainbody.innerHTML = renderingdata(filtered)
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
  <div class="card" >
  <div class="img_div">
      <a href="">
        <img src="${image}">
    </a>
    </div>
    <div class="desc">
      <h2>${title}</h2>
      <ul class="stars">
      <li class="star"><i class="fa-solid fa-star"></i></li>
      <li class="star"><i class="fa-solid fa-star"></i></li>
      <li class="star"><i class="fa-solid fa-star"></i></li>
      <li class="star"><i class="fa-solid fa-star"></i></li>
      <li class="star"><i class="fa-solid fa-star"></i></li>
      </ul>
       <p class="displayrating"></p>
      <h4>
      ${brand}
      </h4>
      <div class="button-div">
        <a href="">Add to Cart</a>
        <a href="">Buy Now</a>
      </div>
    </div>
  </div>
					
    `
}
console.log(stars)
output.innerHTML = "yes"