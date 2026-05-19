// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList=document.getElementById("cart-list");
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  document.querySelector(`[data-id="${product.id}"]`).addEventListener("click",()=>{addToCart(product.id)});
  });
	
}

// Render cart list
function renderCart() {
let product;
	products.forEach((item)=>{
		if( JSON.parse(sessionStorage.getItem(item.id))
		{
			product= JSON.parse(sessionStorage.getItem(item.id));
		}
	cartList.innerHTML+=`<li>${product.productname} - $${product.productprice} <button class="clear-item-btn" data-id1="${item.id}">Clear item</button>`;
})
}

// Add item to cart
function addToCart(productId) {
	let productName,productPrice;
	
	products.forEach((item)=>{
		if(productId===item.id)
		{
productName=item.name;
		productPrice=item.price;}	
	})
    let product={productname:productName,productprice:productPrice};
	sessionStorage.setItem(productId, JSON.stringify(product));
	cartList.innerHTML+=`<li>${productName} - $${productPrice} <button class="clear-item-btn" data-id1="${productId}">Clear item</button>`;
document.querySelector(`data-id1="${productId}"`).addEventListener("click",()=>{removeFromCart(productId);})

}

function removeFromCart(productId) {
       document.querySelector(`[data-id1=${productId}]`).parentElement.remove();
	sessionStorage.removeItem(productId);
  }










// Clear cart
function clearCart() {
	sessionStorage.clear();
	cartList.innerHTML="";
}

// Initial render
renderProducts();
renderCart();
