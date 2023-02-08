const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click", palindrome)

function palindrome() {
    const word = document.querySelector(".input-text").value;
    let len = word.length;

    // Получаем доступ к первой половине слова
    let startLetters = word.substring(0, Math.floor(len / 2)).toLowerCase();
    // Получаем доступ к второй половине слова
    let endLetters = word.substring((len - Math.floor(len / 2)), len).toLowerCase();

    // Превращаем строку в масив, переворачиваем и превращаем в строку
    let flippedLastLetters = endLetters.split("").reverse().join("");
    
    if(startLetters == flippedLastLetters) {
        result.innerHTML = `${word.toUpperCase()} is a palindrome word`
    } else {
        result.innerHTML = `${word.toUpperCase()} is NOT a palindrome word`
    }
    
}