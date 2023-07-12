let conatiner = document.getElementById('container1');

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                json.map((item)=>{
                    createDiv(item);
                })
            });



function createDiv(product){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `

<div class="card">
  <img class="card-img-top" src="${product.image}">
  
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
    <a href="#" class="btn-btn-primary">Buy Now</a>
  </div>
</div>
    `;
    conatiner.appendChild(newDiv);
}






/* <div class="title-img">
                <p>${product.title}</p>
                <img class="image" src="${product.image}">
            </div>

            <div class="price-rating">
                <p class="${product.price}"></p>
                <p class="${product.rating}"></p>
            </div>

            <div class="buy-cart">
                <button>buy now</button>
                <button>cart</button>
            </div> */






{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${product.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div> */}






// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>{
//                 json.map((items)=>{
//                     x.innerHTML =  `<img src="${items.image}">`
//                 })
//             });

