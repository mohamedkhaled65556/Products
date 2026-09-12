let products = [
  { name: "iphone X", price: 400, qty: 6 },
  { name: "iphone 17", price: 1000, qty: 4 },
  { name: "iphone 14", price: 500, qty: 10 },
  { name: "iphone 15", price: 700, qty: 5 },
];
let newPhoneModal = document.getElementById("newPhoneModal");
let table = document.querySelector("tbody");
let phoneNameInput = document.querySelector("#phoneNameInput");
let phonePriceInput = document.querySelector("#phonePriceInput");
let phoneQtyInput = document.querySelector("#phoneQtyInput");
let h1 = document.querySelector("#h1");
let h2 = document.querySelector("#h2");
let editPhoneModal = document.querySelector("#editPhoneModal");
let phoneNameInputE = document.querySelector("#phoneNameInputE");
let phonePriceInputE = document.querySelector("#phonePriceInputE");
let phoneQtyInputE = document.querySelector("#phoneQtyInputE");
let globalIndex = null;
let searchInput = document.querySelector(".input");

const showProducts = () => {
  table.innerText = "";
  products.forEach((el, index) => {
    table.innerHTML += `<tr class="table">
    <td>${index + 1}</td>
    <td>${el.name}</td>
    <td class="price">${el.price}$</td>
    <td>${el.qty}</td>
    <td>
    <button id="btn2" class="btn" onclick="Edit(${index})">
    <i class="fa-regular fa-pen-to-square"></i> Edit</button>
    
    <button id="btn3" class="btn" onclick="Delete(${index})">
    <i class="fa-solid fa-trash-can"></i> Delete</button>
    </td>
    </tr>`;
  });
};
showProducts();

const openModal = () => {
  newPhoneModal.style.display = "flex";
};

const addNewPhone = () => {
  if (phoneNameInput.value == "") {
    alert("Phone name can not be empty");
  } else if (phonePriceInput.value == "") {
    alert("Phone price can not be empty");
  } else if (phoneQtyInput.value == "") {
    alert("Phone qty can not be empty");
  } else {
    let product = {
      name: phoneNameInput.value,
      price: +phonePriceInput.value,
      qty: +phoneQtyInput.value,
    };

    phoneNameInput.value = "";
    phonePriceInput.value = "";
    phoneQtyInput.value = "";
    products.push(product);
    closeModal();
    showProducts();
  }
};

const closeModal = () => {
  newPhoneModal.style.display = "none";
  editPhoneModal.style.display = "none";
};

const Delete = (index) => {
  let isConfirm = confirm("Are you sure?");
  if (isConfirm) {
    products.splice(index, 1);
    showProducts();
  }
};

const Edit = (index) => {
  globalIndex = index;
  editPhoneModal.style.display = "flex";
  phoneNameInputE.value = products[index].name;
  phonePriceInputE.value = products[index].price;
  phoneQtyInputE.value = products[index].qty;
};

const editPhone = () => {
  if (phoneNameInputE.value == "") {
    alert("Phone name can not be empty");
  } else if (phonePriceInputE.value == "") {
    alert("Phone price can not be empty");
  } else if (phoneQtyInputE.value == "") {
    alert("Phone qty can not be empty");
  } else {
    products[globalIndex].name = phoneNameInputE.value;
    products[globalIndex].price = phonePriceInputE.value;
    products[globalIndex].qty = phoneQtyInputE.value;
    showProducts();
    closeModal();
  }
};

const searchByName = () => {
  let searchValue = searchInput.value.replace(/\s+/g, "").toLowerCase();
  let IsFound = false;
  if (!searchInput.value.trim()) return;
  searchInput.value = "";
  table.innerHTML = "";
  products.forEach((el, index) => {
    let name = el.name.replace(/\s+/g, "").toLowerCase();
    if (name.includes(searchValue)) {
      IsFound = true;
      table.innerHTML += `<tr class="table">
      <td>${index + 1}</td>
      <td>${el.name}</td>
      <td class="price">${el.price}$</td>
      <td>${el.qty}</td>
      <td>
      <button id="btn2" class="btn" onclick="Edit(${index})">
      <i class="fa-regular fa-pen-to-square"></i> Edit</button>
      
      <button id="btn3" class="btn" onclick="Delete(${index})">
      <i class="fa-solid fa-trash-can"></i> Delete</button>
      </td>
      </tr>`;
    }
  });
  if (!IsFound) {
    alert("This product not found");
  }
};

products.forEach((el) => {
  let searchValue = searchInput.value.replace(/\s+/g, "").toLowerCase();
  let name = el.name.replace(/\s+/g, "").toLowerCase();
  if (name.includes(searchValue)) {
    let list = document.querySelector("#list");
    list.innerHTML += `<option value="${el.name}"></option>`;
  }
});
