const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggle.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
    } else {
        localStorage.setItem("theme", "light");
        toggle.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
    }
});