document.addEventListener("DOMContentLoaded", () => {
    const productList = [
        { name: "LED Bulb", category: "electrical", price: 200, brand: "Phillips", material: "plastic", usage: "indoor" },
        { name: "Water Tap", category: "plumbing", price: 100, brand: "Jaquar", material: "metal", usage: "bathroom" },
        { name: "Ceramic Tile", category: "flooring", price: 500, brand: "Kajaria", material: "ceramic", usage: "indoor" },
        { name: "Wall Paint", category: "paints", price: 300, brand: "Asian Paints", material: "liquid", usage: "indoor" },
        { name: "Drill Machine", category: "tools", price: 1500, brand: "Bosch", material: "metal", usage: "outdoor" },
        { name: "LED Tube Light", category: "electrical", price: 200, brand: "Phillips", material: "plastic", usage: "indoor" },
        { name: "LED TV", category: "electrical", price: 20000, brand: "Sharp", material: "plastic", usage: "indoor" },

        { name: "Water Tap", category: "plumbing", price: 100, brand: "Jaquar", material: "metal", usage: "bathroom" },
        { name: "Basing", category: "plumbing", price: 2000, brand: "xyz", material: "Ceramic", usage: "bathroom" },

        { name: "Ceramic Tile", category: "flooring", price: 500, brand: "Kajaria", material: "ceramic", usage: "indoor" },
        { name: "Bathroom Tile", category: "flooring", price: 800, brand: "Kajaria", material: "ceramic", usage: "indoor" },

        { name: "Wall Paint", category: "paints", price: 300, brand: "Asian Paints", material: "liquid", usage: "indoor" },
        { name: "Drill Machine", category: "tools", price: 1500, brand: "Bosch", material: "metal", usage: "outdoor" },
    
    ];

    const productListContainer = document.getElementById("productList");
    const filterForm = document.getElementById("filterForm");

    const renderProducts = (products) => {
        productListContainer.innerHTML = products
            .map(
                (product) => `
            <div class="product-item">
                        <img src="${product.image}" alt="${product.name}" class="product-image">

                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: ₹.${product.price}</p>
                <p>Brand: ${product.brand}</p>
                <p>Material: ${product.material}</p>
                <p>Usage: ${product.usage}</p>
            </div>`
            )
            .join("");
    };

    const applyFilters = () => {
        const category = filterForm.category.value;
        const price = parseInt(filterForm.price.value, 10);
        const brand = filterForm.brand.value.toLowerCase();
        const material = filterForm.material.value;
        const usage = filterForm.usage.value;

        const filteredProducts = productList.filter((product) => {
            return (
                (category === "all" || product.category === category) &&
                product.price <= price &&
                (brand === "" || product.brand.toLowerCase().includes(brand)) &&
                (material === "all" || product.material === material) &&
                (usage === "all" || product.usage === usage)
            );
        });

        renderProducts(filteredProducts);
    };

    // Event Listeners for Filters
    filterForm.category.addEventListener("change", applyFilters);
    filterForm.price.addEventListener("input", () => {
        document.getElementById("priceValue").textContent = `0 - ${filterForm.price.value}`;
        applyFilters();
    });
    filterForm.brand.addEventListener("input", applyFilters);
    filterForm.material.addEventListener("change", applyFilters);
    filterForm.usage.addEventListener("change", applyFilters);

    // Initial render
    renderProducts(productList);
});
