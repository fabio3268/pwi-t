console.log("oi");

const url = "api/user-list.php";
const options = {
    method : "get"
};

fetch(url, options).then((response) => {
    response.json().then((users) => {
        users.forEach((user) => {
            console.log(user.email);
            const tbody = document.querySelector("tbody");
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                </tr>
            `;
            tbody.appendChild(tr);
        });
    })
});
