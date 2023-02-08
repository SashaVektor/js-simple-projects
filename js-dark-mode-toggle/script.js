const toggleDarkMode = document.querySelector(".toggle-darkmode")
const toggleText = document.querySelector(".toggle-text")

let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    toggleText.textContent = "Light"
    localStorage.setItem("darkMode", "enabled")
}

const disabledDarkMode = () => {
    document.body.classList.remove("darkmode")
    toggleText.textContent = "Dark"
    localStorage.setItem("darkMode", null)
}

if(darkMode === "enabled") {
    enableDarkMode();
}

toggleDarkMode.addEventListener("click", () => {
    let darkMode = localStorage.getItem("darkMode");

    if(darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disabledDarkMode();
    }
})



