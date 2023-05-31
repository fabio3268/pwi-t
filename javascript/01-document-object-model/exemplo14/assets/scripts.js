





const plans = [
    { name: 'Básico', price: 0, description: 'Funcionalidades básicas' },
    { name: 'Pessoal', price: 9.99, description: 'Básico + Ferramentas avançadas' },
    { name: 'Profissional', price: 19.99, description: 'Pessoal + Suporte dedicado' },
    { name: 'Empresarial', price: 39.99, description: 'Pro + Armazenamento ilimitado' },
];

const divPlans = document.querySelectorAll(".box");
//divPlans[0].textContent = "OI";
//console.log(divPlans[0]);
divPlans.forEach((div, i) => {
    //div.textContent = "OI";
    //console.log(plans[i]);
    div.innerHTML = `
    <div class="name">${plans[i].name}</div>
        <div class="price">${plans[i].price}</div>
        <div class="active">${plans[i].description}</div>
    `;
});

divPlans.forEach((div, i) => {
    //console.log(div);
    div.addEventListener("click", (e) => {
        e.target.textContent = "OI";
        console.log(e.target);
        //e.target.remove();
    });
});
