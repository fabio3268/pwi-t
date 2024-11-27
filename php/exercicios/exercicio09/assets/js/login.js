function showToast(message, type) {
    const toast = document.querySelector('.toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

const tabs = document.querySelectorAll(".tab");
const forms = document.querySelectorAll(".form");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove 'active' class from all tabs and forms
        tabs.forEach(t => t.classList.remove("active"));
        forms.forEach(f => f.classList.remove("active"));
        // Add 'active' class to the clicked tab and corresponding form
        tab.classList.add("active");
        const targetForm = document.querySelector(`#${tab.dataset.tab}`);
        targetForm.classList.add("active");
    });
});

const formUserRegister = document.querySelector("#registerForm");
const formUserLogin = document.querySelector("#loginForm");

formUserRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("api/users/user-register.php", {
        method: "post",
        body: new FormData(formUserRegister)
    })
        .then((response) => {
            response.json()
                .then((user) => {
                    console.log(user);
                    showToast(user.message, user.type);
                });
        });
});

formUserLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("api/users/user-login.php", {
        method: "post",
        body: new FormData(formUserLogin)
    })
        .then((response) => {
            response.json()
                .then((user) => {
                    console.log(user);
                    showToast(user.message, user.type);
                });
        });
});
