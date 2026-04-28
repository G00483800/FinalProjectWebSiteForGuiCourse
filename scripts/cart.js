
function calculateTotal() {
    let total = 0;
    total += parseInt(sessionStorage.getItem("Stone island"), 10) || 0;
    total += parseInt(sessionStorage.getItem("Balenciaga Pants"), 10) || 0;
    total += parseInt(sessionStorage.getItem("OFF-WHITE Shoes"), 10) || 0;
    sessionStorage.setItem("Total", total);
}
calculateTotal();

function displayTotal() {
    const total = sessionStorage.getItem("Total") || 0;
    document.getElementById("total-price").textContent = total;
}
displayTotal();
function displayCartItems() {
    const PriceForItems = [];
    const ItemsAmount = []
    const ItemsAmount1Total = parseInt(sessionStorage.getItem("Stone island")) || 0;

    const ItemsAmount2Total = parseInt(sessionStorage.getItem("Balenciaga Pants")) || 0;
    const ItemsAmoun3Total = parseInt(sessionStorage.getItem("OFF-WHITE Shoes")) || 0;

    if (sessionStorage.getItem("ItemsAmount1") > 0) {
        PriceForItems.push("Stone island: €"+ItemsAmount1Total);
        ItemsAmount.push(sessionStorage.getItem("ItemsAmount1"));
    }
    if (sessionStorage.getItem("ItemsAmount2") > 0) {
        PriceForItems.push("Balenciaga Pants: €"+ItemsAmount2Total);
        ItemsAmount.push(sessionStorage.getItem("ItemsAmount2"));
    }
    if (sessionStorage.getItem("ItemsAmount3") > 0) {
        PriceForItems.push("OFF-WHITE Shoes: €"+ItemsAmoun3Total);
        ItemsAmount.push(sessionStorage.getItem("ItemsAmount3"));
    }
    let i = 0;
    const cartList = document.getElementById("cart-items");
    if (PriceForItems.length == 0) {
        cartList.innerHTML = "<p>Your cart is currently empty.</p>";
    } else {
        while(i<PriceForItems.length){
            document.getElementById("cart-items").innerHTML += `<li>${PriceForItems[i]} (${ItemsAmount[i]})</li>`;
            i++;
        }
    }
}
displayCartItems();