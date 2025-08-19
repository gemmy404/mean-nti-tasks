let form = document.querySelector("form");
let tBody = document.querySelector("#products");
let submitButton = document.querySelector(".submit-btn");
let searchBar = document.querySelector("#search");
let searchButton = document.querySelector(".search-btn");
let categoryFiltering = document.getElementsByName("filtering-category");

function createProduct(tr, product) {
    tr.setAttribute("product-id", product.id);
    tr.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.description}</td>
      <td>${product.price}</td>
      <td>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </td>
    `;
    return tr;
}

let products = JSON.parse(localStorage.getItem("products")) || [];

products.forEach((product) => {
    let row = createProduct(document.createElement("tr"), product);
    tBody.appendChild(row);
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let productRequest = {}
    if (products.length > 0)
        productRequest.id = products[products.length - 1].id + 1;
    else
        productRequest.id = 1;

    productRequest.name = document.querySelector("#productName").value;
    productRequest.description = document.querySelector("#description").value;
    productRequest.price = document.querySelector("#price").value;
    productRequest.category = document.querySelector("#category").value;

    console.log(productRequest)

    products.push(productRequest);

    let row = createProduct(document.createElement("tr"), productRequest);
    tBody.appendChild(row);

    localStorage.setItem("products", JSON.stringify(products));

    form.reset();
});

searchButton.addEventListener("click", (e) => {
    let productName = searchBar.value;
    let searchedProduct = products.filter(product => product.name.startsWith(productName));
    tBody.innerHTML = "";
    searchedProduct.forEach(product => {
        tBody.appendChild(createProduct(document.createElement("tr"), product));
    })
});

categoryFiltering.forEach(category => category.addEventListener("change", (e) => {
    let selectedProducts = products.filter(product => product.category === category.value);
    tBody.innerHTML = "";
    selectedProducts.forEach(product => {
        tBody.appendChild(createProduct(document.createElement("tr"), product));
    });
}));

tBody.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("edit")) {
        let target = event.target.closest("tr");
        let productId = +target.getAttribute("product-id");
        let index;
        let savedProduct = products.find((product, idx) => {
            if (product.id === productId) {
                index = idx;
                return product;
            }
        });
        document.querySelector("#productName").value = savedProduct.name;
        document.querySelector("#price").value = savedProduct.price;
        document.querySelector("#description").value = savedProduct.description;
        document.querySelector("#category").value = savedProduct.category;
        submitButton.style.display = "none";

        let updateButton = document.createElement("button");
        updateButton.textContent = "Update"
        updateButton.classList.add("update-btn");
        form.appendChild(updateButton);

        updateButton.addEventListener("click", (e) => {
            e.preventDefault();

            savedProduct.name = document.querySelector("#productName").value;
            savedProduct.price = document.querySelector("#price").value;
            savedProduct.description = document.querySelector("#description").value;
            savedProduct.category = document.querySelector("#category").value;

            console.log(savedProduct);

            products[index] = savedProduct;
            localStorage.setItem("products", JSON.stringify(products));

            let updatedRow = createProduct(target, savedProduct);
            updateButton.remove();
            submitButton.style.display = "block";
            form.reset();
        });
    } else if (event.target.classList.contains("delete")) {
        let target = event.target.closest("tr");
        let productId = +target.getAttribute("product-id");
        products = JSON.parse(localStorage.getItem("products"));
        products = products.filter(product => product.id !== productId);
        localStorage.setItem("products", JSON.stringify(products));
        target.remove();
    }
})