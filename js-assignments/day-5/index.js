var items = [];

function getAllItems() {
    return items;
}

function addItem(item) {
    items.push(item);
}

function updateItem(index, item) {
    items[index] = {...items[index], ...item};
}

function deleteItem(index) {
    items.splice(index, 1);
}

var item1 = {
    name: "TV",
    category: "Electronics",
    price: 1200
};

var item2 = {
    name: "Table",
    category: "Furniture",
    price: 250
};

addItem(item1);
addItem(item2);

console.log("Items:", getAllItems());

updateItem(1, {name: "chair", price: 150})
console.log("Items after updating:", getAllItems());

deleteItem(0);
console.log("Items after deleting:", getAllItems());
