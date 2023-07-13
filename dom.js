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
