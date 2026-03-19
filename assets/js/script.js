const btn_darkM = document.getElementById("dark_mode");


if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    btn_darkM.textContent = "Modo Claro";
}


btn_darkM.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "true");
        btn_darkM.textContent = "Modo Claro";
    } else {
        localStorage.setItem("darkMode", "false");
        btn_darkM.textContent = "Modo Oscuro";
    }
});