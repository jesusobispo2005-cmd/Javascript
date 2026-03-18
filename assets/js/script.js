const btn_darkM = document.getElementById("dark_mode");
const cta = document.getElementById("cta")

console.log(cta)
// darkMode.className="boton_oscuro"
btn_darkM.addEventListener("click", ()=>{
    console.log("pepito");
    cta.style.backgroundColor='blue';
    btn_darkM.className="boton_oscuro";
})