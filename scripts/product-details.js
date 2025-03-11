// Product Data
const products = {
    "aavakaya": {
        "title": "Aavakaya Pickle",
        "image": "images/aavakaya.png",
        "description": "A traditional Andhra mango pickle made with premium quality ingredients for authentic taste.",
        "price": "₹650"
    },
    "tomato": {
        "title": "Tomato",
        "image": "images/tomato.png",
        "description": "Fresh Tomato pickle.",
        "price": "₹400/kg"
    },
    "lemon": {
        "title": "Lemon",
        "image": "images/lemon.jpeg",
        "description": "Fresh Lemon Pickle.",
        "price": "₹400/dozen"
    }
};

// Function to Load Product Details
function loadProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (products[productId]) {
        document.getElementById("product-title").textContent = products[productId].title;
        document.getElementById("product-img").src = products[productId].image;
        document.getElementById("product-description").textContent = products[productId].description;
        document.getElementById("product-price").textContent = products[productId].price;
    } else {
        document.querySelector(".product-details").innerHTML = "<h2>Product Not Found</h2>";
    }
}

// Run Function on Page Load
window.onload = loadProduct;
