const btn = document.querySelector('#btn')
const close = document.querySelector('.close')
const modal = document.querySelector('.modal')


btn.addEventListener("click", () => {
    modal.style.display = "block"
})

close.addEventListener("click", () => {
    modal.style.display = "none"
})
