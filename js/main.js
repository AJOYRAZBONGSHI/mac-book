//  function of memory cost, storage cost and delivery cost
function productCost(product, price) {
  const productPrice = document.getElementById(product + "-cost");
  productPrice.innerText = price;
  totalCost();
}

// Total Price Calculation

function totalCost() {
  const defaultPrice = document.getElementById("best-price");
  const bestCost = parseInt(defaultPrice.innerText);
  const memoryPrice = document.getElementById("memory-cost");
  const memoryCost = parseInt(memoryPrice.innerText);
  const storagePrice = document.getElementById("storage-cost");
  const storageCost = parseInt(storagePrice.innerText);
  const deliveryPrice = document.getElementById("delivery-cost");
  const deliveryCost = parseInt(deliveryPrice.innerText);
  const total = bestCost + memoryCost + storageCost + deliveryCost;
  document.getElementById("total-cost").innerText = total;
  document.getElementById("total-price").innerText = total;
}

// Discount code added

let emailField = document.getElementById("promo-word");
emailField.addEventListener("keyup", function (event) {
  const submitButton = document.getElementById("code-btn");
  const grandTotalCost = document.getElementById("total-price");
  const totalPrice = document.getElementById("total-cost").innerText;

  if (event.target.value == "stevekaku") {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", true);
  }
  submitButton.addEventListener("click", function () {
    event.target.value = "";
    grandTotalCost.innerText = totalPrice - (totalPrice / 100) * 20;
    submitButton.setAttribute("disabled", true);
  });
});
