




const button = document.querySelector("button");
const usersList = [];

button.addEventListener("click", () => {
    const user = {
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#password").value
    };
    usersList.push(user);
    console.table(usersList);

    usersList.forEach((value) => {
        console.log(value.name,value.email,value.password);
    });
});
