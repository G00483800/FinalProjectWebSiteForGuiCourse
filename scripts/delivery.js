function proceedToPayment() {
    if (document.getElementById("name").value.trim() == "") {
        alert("Please enter your name.");
        return;
    }
    if (document.getElementById("address").value.trim() == "") {
        alert("Please enter your delivery address.");
        return;
    }
    if(document.getElementById("shipping-speed").value == 10) {
        let total = parseInt(sessionStorage.getItem("Total"), 10) || 0;
        let shippingCost = 10; // Example shipping cost for express delivery
        sessionStorage.setItem("ShippingCost", shippingCost);
        total += shippingCost; // Add shipping cost
        sessionStorage.setItem("Total", total);
    }
    else{
        sessionStorage.setItem("ShippingCost", 0); // No additional cost for standard delivery
    }
    // If all validations pass, redirect to payment page
    window.location.href = "payment.html";
}