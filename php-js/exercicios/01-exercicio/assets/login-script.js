const url = "api/user-login.php";
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const options = {
      method : "post",
      body : formData
    };

    fetch(url,options).then((response) => {
        response.json().then((user) => {
            console.log(user);
        });
    });

});
