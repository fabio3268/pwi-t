



const employee = {
    name : "Fábio Santos",
    email: "fabiosantos@ifsul.edu.br",
    password: "123456"
};
console.table(employee);
console.log(employee.name);
console.log(employee.email);
console.log(employee.password);
employee.name = "Ricardo Santos";
employee.email = "ricardosantos@gmail.com";
console.table(employee);

/*const field = window.prompt("Informe o atributo: ");
if(!employee[field]){
    console.log("Atributo não existe!");
} else {
    console.log(employee[field]);
}*/

console.log(Object.keys(employee));
console.log(Object.values(employee));
console.table(Object.entries(employee));

const employee02 = employee;
employee.name = "Fábio Santos";
employee.email = "fabiosantos@ifsul.edu.br";
console.log(employee02);

let str = '';
for (let key in employee) {
    const value = employee[key];
    str += `<div>
        <span>Chave: ${key}</span>
        <span>Valor: ${value}</span>
    </div>`;
}
document.body.innerHTML = str;