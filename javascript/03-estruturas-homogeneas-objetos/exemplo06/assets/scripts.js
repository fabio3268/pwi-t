




const names = [
    "Fábio",
    "Maria",
    "João"
];

console.log(names);

const employee = {
   Nome : "Fábio",
   Sobrenome : "Santos",
   Idade : 47,
   Salario : 5000.00
};

/*console.log(employee);
console.log(employee.name);
console.log(employee.lastName);
console.log(employee.salary);*/

let str = '';
for (let key in employee){
    console.log(key, employee[key]);
    str = str + `<div>
              <span>${key}:</span>
              <span>${employee[key]}</span>
           </div>`;
}
console.log(str);
document.body.innerHTML = str;

