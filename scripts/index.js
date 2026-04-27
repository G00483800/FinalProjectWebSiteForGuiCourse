function addToCart1(){
    const priceElement = document.getElementsByClassName("price1")[0];
    const amountElement = document.getElementsByClassName("amount1")[0];
    if (!priceElement || !amountElement) return;

    const price = parseInt(priceElement.textContent, 10) || 0;
    const amount = parseInt(amountElement.value, 10) || 0;
    if (amount <= 0) return;

    const total = parseInt(sessionStorage.getItem("Boots"), 10) || 0;
    sessionStorage.setItem("Boots", total + price * amount);
    const total1 = parseInt(sessionStorage.getItem("Boots"), 10) || 0;
    sessionStorage.setItem("ItemsAmount1", total1/price || 0);
}
function addToCart2(){
    const priceElement = document.getElementsByClassName("price2")[0];
    const amountElement = document.getElementsByClassName("amount2")[0];
    if (!priceElement || !amountElement) return;

    const price = parseInt(priceElement.textContent, 10) || 0;
    const amount = parseInt(amountElement.value, 10) || 0;
    if (amount <= 0) return;

    const total = parseInt(sessionStorage.getItem("Earbuds"), 10) || 0;
    sessionStorage.setItem("Earbuds", total + price * amount);
    const total2 = parseInt(sessionStorage.getItem("Earbuds"), 10) || 0;
    sessionStorage.setItem("ItemsAmount2", total2/price || 0);
}
function addToCart3(){
    const priceElement = document.getElementsByClassName("price3")[0];
    const amountElement = document.getElementsByClassName("amount3")[0];
    if (!priceElement || !amountElement) return;

    const price = parseInt(priceElement.textContent, 10) || 0;
    const amount = parseInt(amountElement.value, 10) || 0;
    if (amount <= 0) return;

    const total = parseInt(sessionStorage.getItem("Headphones"), 10) || 0;
    sessionStorage.setItem("Headphones", total + price * amount);
    const total3 = parseInt(sessionStorage.getItem("Headphones"), 10) || 0;
    sessionStorage.setItem("ItemsAmount3", total3/price || 0);
}
function calculateTotal() {
    let total = 0;
    total += parseInt(sessionStorage.getItem("Boots"), 10) || 0;
    total += parseInt(sessionStorage.getItem("Earbuds"), 10) || 0;
    total += parseInt(sessionStorage.getItem("Headphones"), 10) || 0;
    sessionStorage.setItem("Total", total);
}
calculateTotal();
