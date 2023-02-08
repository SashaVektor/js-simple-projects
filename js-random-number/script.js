const number = document.querySelector(".number")
const generateBtn = document.querySelector(".reset")

generateBtn.addEventListener('click', () => {
    number.innerHTML = Math.floor(Math.random() * 100)
})