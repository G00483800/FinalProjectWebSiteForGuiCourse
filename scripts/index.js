function addToCart1(){
    const priceElement = document.getElementsByClassName("price1")[0];
    const amountElement = document.getElementsByClassName("amount1")[0];
    if (!priceElement || !amountElement) return;

    const price = parseInt(priceElement.textContent, 10) || 0;
    const amount = parseInt(amountElement.value, 10) || 0;
    if (amount <= 0) return;

    const total = parseInt(sessionStorage.getItem("Boots"), 10) || 0;
    sessionStorage.setItem("Boots", total + price * amount);
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
}