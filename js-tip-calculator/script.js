const btn = document.querySelector('.btn'),
    tip = document.querySelector('.tip'),
    total = document.querySelector('.total'),
    error = document.querySelector('.error');

const hideError = () => {
    setTimeout(() => {
        error.style.display = "none";
    }, 3000)
}

const calcTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;
    if (bill === "" || rate === "") {
        error.style.display = "block";
        hideError();
    } else if (isNaN(bill)) {
        error.innerHTML = "Please, enter a number"
        error.style.display = "block";
        hideError();
    } else {
        let tipAmount = bill * rate;
        let totalBill = Number(bill) + tipAmount
        tip.innerHTML = `Tip: $${tipAmount.toFixed(2)}`
        total.innerHTML = `Total bill: $${totalBill}`
    }
}

btn.addEventListener("click", calcTip)