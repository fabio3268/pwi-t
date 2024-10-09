const form = document.querySelector("form");
const result = document.querySelector(".result");
form.addEventListener("submit",async (e) => {
    e.preventDefault();
    const response = await fetch("api/vote.php", {
        method: "POST",
        body: new FormData(form)
    });
    const message = await response.text();
    result.textContent = message;
});

