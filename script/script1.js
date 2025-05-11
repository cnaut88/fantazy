const video = document.getElementById("background-video");

video.addEventListener("ended", function () {
video.classList.add("looping");
setTimeout(() => {
    video.currentTime = 0; 
    video.classList.remove("looping");
    video.play(); 
}, 1000); 
});
function toggleForm() {
    document.getElementById("login-box").classList.toggle("hidden");
    document.getElementById("register-box").classList.toggle("hidden");
}
    function togglePassword(id) {
    const input = document.getElementById(id);
    const eyeIcon = document.getElementById(id + "-eye");
    if (input.type === "password") {
        input.type = "text";
        eyeIcon.src = "../img/eye-open.png";
    } else {
        input.type = "password";
        eyeIcon.src = "../img/eye-cloyse.png";
    }
}
function login(event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem("loggedInHero", username); 
        alert("Вхід успішний!");
        window.location.href = "index.html";
    } else {
        alert("Невірні дані. Спробуйте ще раз.");
    }
}
function register(event) {
    event.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.username === username)) {
        alert("Користувач вже існує!");
        return;
    }
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Реєстрація успішна! Тепер увійдіть.");
    toggleForm();
}