async function myFunc() {
    const res = await fetch('https://reqres.in/api/users');
    const users = await res.json(); // dados em texto
    console.log(users);
    const myDiv = document.querySelector("div");
    users.data.forEach((user) => {
        console.log(user);
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `
             Nome: ${user.first_name} - E-mail: ${user.email} - <img src="${user.avatar}">
        `;
        myDiv.appendChild(newDiv);
    });
}
document.querySelector("button").addEventListener("click",myFunc);
