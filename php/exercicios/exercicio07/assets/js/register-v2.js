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

forms.forEach((form) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        const options = {
            method: "post",
            body: formData
        };

        let url = "";
        if(form.id == 'registerForm') {
            url = "api/users/user-register.php";
        }

        if(form.id == 'loginForm') {
            url = "api/users/user-login.php";
        }

        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
    });
});