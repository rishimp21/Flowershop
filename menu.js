let allProducts = [];

fetch("products.json")
  .then((response) => response.json())
  .then((data) => {

    allProducts = data;

    displayProducts(allProducts);

  });


// Display Function
function displayProducts(products) {

  let cards = "";

  products.forEach((item) => {

    cards += `

    <div class="card">

      <div class="heart">
        <i class="fa-sharp fa-solid fa-heart"></i>
      </div>

      <img src="${item.image}" alt="${item.name}" />

      <div class="rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>

      <h3>${item.name}</h3>

      <p>₹${item.price}</p>

      <button class="cart-btn">
        <i class="fa-solid fa-cart-shopping"></i>
        Add to Cart
      </button>

    </div>

    `;

  });

  document.getElementById("product-container").innerHTML = cards;
}


// Search Function
document.getElementById("search").addEventListener("keyup", function () {

  let searchValue = this.value.toLowerCase();

  let filteredProducts = allProducts.filter((item) =>
    item.name.toLowerCase().includes(searchValue)
  );

  displayProducts(filteredProducts);

});