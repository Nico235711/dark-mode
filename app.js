const themeButton = document.querySelector("#theme-switch")
const iconThemeButton = document.querySelector("#theme-switch img")

// console.log(themeButton);


function switchTheme() {
  document.body.classList.toggle("darkmode")
  switchIcon()
}

function switchIcon() {
  if (iconThemeButton.src.includes("img/moon.svg")) {
    iconThemeButton.src = "img/sun.svg"
    iconThemeButton.alt = "icono de modo claro"  
  }
  else {
    iconThemeButton.src = "img/moon.svg"
    iconThemeButton.alt = "icono de modo oscuro"
  }
}

themeButton.addEventListener("click", switchTheme)