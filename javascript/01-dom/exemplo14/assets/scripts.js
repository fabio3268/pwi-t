const plans = [
    {
        name: 'Básico',
        price: 0,
        description: 'Funcionalidades básicas'
    },
    { name: 'Pessoal', price: 9.99, description: 'Básico + Ferramentas avançadas' },
    { name: 'Profissional', price: 19.99, description: 'Pessoal + Suporte dedicado' },
    { name: 'Empresarial', price: 39.99, description: 'Pro + Armazenamento ilimitado' },
];

const divList = document.querySelectorAll(".box");
console.log(divList);
divList.forEach((element,index) => {
    console.log(index);
    element.innerHTML = `
        <div class="name">${plans[index].name}</div>
        <div class="price">${plans[index].price}</div>
        <div class="description">${plans[index].description}</div>
    `;
});

