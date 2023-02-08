const hex = document.querySelector('.hex')
const generateBtn = document.querySelector('.reset')
const body = document.querySelector('body')

generateBtn.addEventListener('click', () => {
    let color = Math.random().toString(16).slice(2, 8); // Переводим в 16-ричную систему 1-f
    hex.innerHTML = `#${color}`
    body.style.background = `#${color}`
})
