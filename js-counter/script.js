const count = document.querySelector('.count')
const subtractBtn = document.querySelector('.subtract')
const resetBtn = document.querySelector('.reset')
const addBtn = document.querySelector('.add')
const buttons = document.querySelector('.buttons')


buttons.addEventListener("click", (e) => {
    if(e.target.classList.contains("add")) {
        count.innerHTML++
        setColor();
    } else if(e.target.classList.contains("reset")) {
        count.innerHTML = 0
        setColor();
    } else {
        count.innerHTML--
        setColor();
    }
})

function setColor() {
    if(count.innerHTML > 0) {
        count.style.color = "yellow"
    } else if(count.innerHTML < 0) {
        count.style.color = "orangered"
    } else {
        count.style.color = "#fff"
    }
}

// subtractBtn.addEventListener('click', () => {
//     count.innerHTML--
// })
// resetBtn.addEventListener('click', () => {
//     count.innerHTML = 0;
// })
// addBtn.addEventListener('click', () => {
//     count.innerHTML++
// })

