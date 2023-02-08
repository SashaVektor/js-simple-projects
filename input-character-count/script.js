const count = document.querySelector('.count')
const input = document.querySelector('.input-text');


input.addEventListener("input", () => {
    count.innerHTML = input.value.length;
})
