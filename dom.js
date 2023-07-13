let conatiner = document.getElementById('container1');

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    console.log(json);
    json.map((item) => {
      createDiv(item);
    })
  });



function createDiv(product) {
  let newDiv = document.createElement('div');
  newDiv.innerHTML = `

    <div class="card">
      <img class="card-img-top" src="${product.image}">
      <h5 class="card-title">${product.title}</h5>
      <b>$${product.price}</b>
      <p >${product.description}</p>
      <b>${product.category}</b>
      <button>Buy Now</button>
    </div>

    `;
  conatiner.appendChild(newDiv);
}
