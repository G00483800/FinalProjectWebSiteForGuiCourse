function paymentTotal(){
    let total = parseInt(sessionStorage.getItem("Total"), 10) || 0;
    if (total>0) {
        document.getElementById("payment-total").textContent = total.toFixed(2);
    } else {
        document.getElementById("payment-total").textContent = "0.00";
    }
}paymentTotal();
function shippingCost(){
    let shippingCost = parseInt(sessionStorage.getItem("ShippingCost"), 10) || 0;
    let total = parseInt(sessionStorage.getItem("Total"), 10) || 0;
    total -= shippingCost;
    sessionStorage.setItem("Total", total);
    sessionStorage.setItem("ShippingCost", 0);
}
function itemCount(){
    let itemCount = 0;
    itemCount += parseInt(sessionStorage.getItem("ItemsAmount1"), 10) || 0;
    itemCount += parseInt(sessionStorage.getItem("ItemsAmount2"), 10) || 0;
    itemCount += parseInt(sessionStorage.getItem("ItemsAmount3"), 10) || 0;
    document.getElementById("item-count").textContent = itemCount;
}itemCount();
function confirmation(){
    let cardNumber = document.getElementById("card-number").value.trim();
    let expiryDate = document.getElementById("expiry").value.trim();
    let cvv = document.getElementById("cvv").value.trim();

    if (cardNumber.length !== 16){
        alert("Please enter a valid card number.");
        return;
    }
    if (expiryDate.length !== 5){
        alert("Please enter a valid expiry date.");
        return;
    }
    if (cvv.length !== 3){
        alert("Please enter a valid CVV.");
        return;
    }


    window.location.href = "success.html";
    sessionStorage.clear();
}