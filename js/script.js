let start = document.querySelector('#iniciar').addEventListener("click", iniciar)
let pause = document.querySelector('#pausar').addEventListener("click", pausar)
let stop = document.querySelector('#parar').addEventListener("click", parar)
let ver = document.querySelector('#watch').addEventListener("click", watch)
let themeSwitch = document.querySelector("#themeSwitcher").addEventListener("click", switchTheme)

//Theme switcher
function switchTheme() {
    const main = document.querySelector("main")
    const root = document.querySelector(":root")
    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9")
      root.style.setProperty("--border-color", "#aaa")
      root.style.setProperty("--font-color", "#212529")
      root.style.setProperty("--primary-color", "#26834a")
      main.dataset.theme = "light"
    } else {
      root.style.setProperty("--bg-color", "#212529")
      root.style.setProperty("--border-color", "#666")
      root.style.setProperty("--font-color", "#f1f5f9")
      root.style.setProperty("--primary-color", "#4dff91")
      main.dataset.theme = "dark"
    }
  }

var sec=0
var min=0
var hr=0

var interval;

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function iniciar(){
    watch()
    interval= setInterval(watch,10)


}

function pausar(){
    clearInterval(interval)

}

function parar(){
    clearInterval(interval)
    sec=0
    min=0
    window.alert("You've stopped at: "+ document.getElementById('watch').innerText)
    document.getElementById('watch').innerText='00:00:00'

}

function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('watch').innerText= twoDigits(hr)+ ':'+ twoDigits(min)+':' + twoDigits(sec)
}