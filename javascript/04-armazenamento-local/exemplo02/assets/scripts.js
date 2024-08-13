


const usersList = [];

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    };
    usersList.push(user);
    console.log(usersList);
    localStorage.setItem("usersList",JSON.stringify(usersList));

});