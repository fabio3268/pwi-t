// console.table(plans);
// console.table(plans[1]);
// console.table(plans[1].description);
// console.table(plans[1].name);
const plans = [
    { name: 'Básico', price: 0, description: 'Funcionalidades básicas' },
    { name: 'Pessoal', price: 9.99, description: 'Básico + Ferramentas avançadas' },
    { name: 'Profissional', price: 19.99, description: 'Pessoal + Suporte dedicado' },
    { name: 'Empresarial', price: 39.99, description: 'Pro + Armazenamento ilimitado' },
];

const myBox = document.querySelectorAll(".box");
console.log(myBox);
myBox.forEach((e,i) => {
    console.log(`${i} - ${e.innerHTML}`);
    e.innerHTML = `<div class="name">${plans[i].name}</div>
                   <div class="price">R$ ${plans[i].price.toFixed(2)}</div>
                   <div>${plans[i].description}</div>`;
    e.addEventListener('click', () => {
        document.querySelectorAll(".box").forEach(t => {
            console.log(t);
            //if(t !== e && t.classList.contains('active')){
                t.classList.remove('active');
            //}
        });
        e.classList.add("active");
    });
});