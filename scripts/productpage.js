document.addEventListener("DOMContentLoaded", function () {
    const categoryFilter = document.getElementById("category-filter");
    const sortFilter = document.getElementById("sort-filter");
    const productsGrid = document.querySelector(".products-grid");
    let products = Array.from(document.querySelectorAll(".product"));

    categoryFilter.addEventListener("change", filterProducts);
    sortFilter.addEventListener("change", sortProducts);

    function filterProducts() {
        let category = categoryFilter.value;
        products.forEach(product => {
            let productType = product.querySelector("h3").textContent.toLowerCase();
            product.style.display = (category === "all" || productType.includes(category)) ? "block" : "none";
        });
    }

    function sortProducts() {
        let order = sortFilter.value;
        let sortedProducts = [...products];

        if (order === "price-low-high") {
            sortedProducts.sort((a, b) => {
                return parseInt(a.querySelector(".price").textContent.replace(/₹/, '')) - 
                       parseInt(b.querySelector(".price").textContent.replace(/₹/, ''));
            });
        } else if (order === "price-high-low") {
            sortedProducts.sort((a, b) => {
                return parseInt(b.querySelector(".price").textContent.replace(/₹/, '')) - 
                       parseInt(a.querySelector(".price").textContent.replace(/₹/, ''));
            });
        }

        // Reorder products in the DOM
        productsGrid.innerHTML = "";
        sortedProducts.forEach(product => productsGrid.appendChild(product));
    }
});
