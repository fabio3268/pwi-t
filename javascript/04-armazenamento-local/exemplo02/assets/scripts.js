

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    };

    const usersList = JSON.parse(localStorage.getItem("usersList")) ?? [];
    usersList.push(user);
    localStorage.setItem("usersList",JSON.stringify(usersList));
    console.log(usersList);

    // if(localStorage.getItem("usersList")) {
    //     let usersList = JSON.parse(localStorage.getItem("usersList"));
    //     usersList.push(user);
    //     localStorage.setItem("usersList",JSON.stringify(usersList));
    // } else {
    //     let usersList = [];
    //     usersList.push(user);
    //     localStorage.setItem("usersList",JSON.stringify(usersList));
    // }

    //localStorage.setItem("usersList",JSON.stringify(usersList));

});