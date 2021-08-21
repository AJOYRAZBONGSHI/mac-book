// memory price
document.getElementById("memory-free").addEventListener("click", function () {
  extraProductCost(0, "memory");
});
document.getElementById("memory-high").addEventListener("click", function () {
  extraProductCost(180, "memory");
});
// storage price
document.getElementById("storage-free").addEventListener("click", function () {
  extraProductCost(0, "storage");
});
document
  .getElementById("storage-medium")
  .addEventListener("click", function () {
    extraProductCost(100, "storage");
  });
document.getElementById("storage-high").addEventListener("click", function () {
  extraProductCost(180, "storage");
});
// delivery price
document.getElementById("delivery-free").addEventListener("click", function () {
  extraProductCost(0, "delivery");
});
document.getElementById("delivery-high").addEventListener("click", function () {
  extraProductCost(20, "delivery");
});

// extra cons function
function extraProductCost(price, product) {
  const extraCost = document.getElementById("extra-" + product);
  if (price == 0) {
    extraCost.innerText = 0;
  }
  if (price == 20) {
    extraCost.innerText = 20;
  }
  if (price == 100) {
    extraCost.innerText = 100;
  }
  if (price == 180) {
    extraCost.innerText = 180;
  }
  calculation();
}

// total price calculation
function calculation() {
  const totalPrice = document.getElementById("total-price");
  const total = parseInt(totalPrice.innerText);
  // console.log(totalPrice.innerText);

  const extraMemoryPrice = document.getElementById("extra-memory");
  const memoryPrice = parseInt(extraMemoryPrice.innerText);
  // console.log(memoryPrice);

  const extraStoragePrice = document.getElementById("extra-storage");
  const storagePrice = parseInt(extraStoragePrice.innerText);
  // console.log(storagePrice);

  const extraDeliveryPrice = document.getElementById("extra-delivery");
  const deliveryPrice = parseInt(extraDeliveryPrice.innerText);
  // console.log(deliveryPrice);

  totalPrice.innerText = total + memoryPrice + storagePrice + deliveryPrice;
  console.log(totalPrice.innerText);
}

// total price
/* const totalPrice = document.getElementById("total-price");
console.log(totalPrice.innerText);
const extraMemoryPrice = document.getElementById("extra-memory");
console.log(extraMemoryPrice.innerText);
const extraStoragePrice = document.getElementById("extra-storage");
console.log(extraStoragePrice.innerText);
// const extraDeliveryPrice = document.getElementById("extra-delivery");
const extraDeliveryPrice = deliveryCost(20);
console.log(extraDeliveryPrice.innerText); */
