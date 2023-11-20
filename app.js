function addToCart(event) {
    event.preventDefault();

    const productContainer = event.target.closest('.product');
    const productName = productContainer.querySelector("h3").textContent;
    const productPrice = productContainer.querySelector(".price").textContent;
    const productImg = productContainer.querySelector("img").src;

    const addToCartContainer = document.getElementById("allCartItems");
    const addDiv = document.createElement("div");
    addDiv.innerHTML = `
        <div id="cart">
            <input type="checkbox">
            <img src="${productImg}" alt="" width="50px" height="50px">
            <p>${productName}</p>
            <h4 class="price">${productPrice}</h4>
            <button class="allpButtons">order Now</button>
        </div>
    `;

    addToCartContainer.appendChild(addDiv);
}