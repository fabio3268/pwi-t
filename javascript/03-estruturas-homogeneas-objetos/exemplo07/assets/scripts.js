


const employeesArrayObj = [
    {
        name : "Fábio",
        lastName : "Santos",
        age : 47,
        salary : 5000.00
    },
    {
        name : "José",
        lastName : "Silva",
        age : 34,
        salary : 7000.00
    },
    {
        name : "Fernando",
        lastName : "Moraes",
        age : 57,
        salary : 17000.00
    },
    {
        name : "Lara",
        lastName : "Tavares",
        age : 15,
        salary : 17000.00
    }
];

function showEmployees (employee){
    console.log(employee.name, employee.age);
    const div = document.createElement("div");
    console.log(div);
    div.innerHTML = `<span>${employee.name}</span>
                     <span>${employee.age}</span>`;
    document.body.insertAdjacentElement("beforeend",div);
}
employeesArrayObj.forEach(showEmployees);
