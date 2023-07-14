let conatiner = document.getElementById('container1');

const loader = document.querySelector('.loader');

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    
    loader.style.display = "none";
    console.log(json);
    json.map((item) => {
      createDiv(item);
    })
  });



function createDiv(product) {
  let newDiv = document.createElement('div');
  newDiv.innerHTML = `

    <div class="card">
    <h4 class="card-title">${product.title}</h4>
    <img class="card-img-top" src="${product.image}">
    <b>$${product.price}</b>
    <p >${product.description}</p>
    <b>${product.category}</b>
    <button>Buy Now</button>
    </div>

    `;
  conatiner.appendChild(newDiv);
}


// window.addEventListener("load", ()=>{
//   const loader = document.querySelector(".lds-spinner");

//   loader.classList.add("loader-hidden");

//   loader.addEventListener("transitionend", ()=>{
//     document.body.removeChild("loader");
//   })
// })


