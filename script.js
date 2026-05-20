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
let cart=JSON.parse(sessionStorage.getItem("cart"))||[];
document.querySelector("#clear-cart-btn").addEventListener("click",clearCart);
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
cartList.innerHTML="";
	cart.forEach((item,index)=>{
		cartList.innerHTML+=`<li>${item.name} - $${item.price} <button class="clear-item-btn" data-id1="${index}">Clear item</button>`;
document.querySelector(`[data-id1="${index}"]`).addEventListener("click",()=>{removeFromCart(index);});
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
	   let product={id:productId,name:productName,price:productPrice};
	cart.push(product);
	
	sessionStorage.setItem("cart", JSON.stringify(cart));
renderCart();

}

function removeFromCart(index) {
	cart.splice(index,1);
	sessionStorage.setItem("cart",JSON.stringify(cart));
	renderCart();
  
}










// Clear cart
function clearCart() {
	cart=[];
	sessionStorage.setItem("cart",JSON.stringify(cart));
	renderCart();
}

// Initial render
renderProducts();
renderCart();
