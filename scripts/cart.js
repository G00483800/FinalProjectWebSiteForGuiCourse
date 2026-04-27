
function calculateTotal() {
    let total = 0;
    total += parseInt(sessionStorage.getItem("Boots"), 10) || 0;
    total += parseInt(sessionStorage.getItem("Earbuds"), 10) || 0;
    total += parseInt(sessionStorage.getItem("Headphones"), 10) || 0;
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
    const bootsTotal = parseInt(sessionStorage.getItem("Boots")) || 0;

    const earbudsTotal = parseInt(sessionStorage.getItem("Earbuds")) || 0;
    const headphonesTotal = parseInt(sessionStorage.getItem("Headphones")) || 0;

    if (sessionStorage.getItem("ItemsAmount1") > 0) {
        PriceForItems.push("Boots: €"+bootsTotal);
        ItemsAmount.push(sessionStorage.getItem("ItemsAmount1"));
    }
    if (sessionStorage.getItem("ItemsAmount2") > 0) {
        PriceForItems.push("Earbuds: €"+earbudsTotal);
        ItemsAmount.push(sessionStorage.getItem("ItemsAmount2"));
    }
    if (sessionStorage.getItem("ItemsAmount3") > 0) {
        PriceForItems.push("Headphones: €"+headphonesTotal);
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