import { showToast } from "./functions.js";

console.log('patient-register.js');

// Função para chamar o toast ao clicar no h1 da página
document.querySelector("h1").addEventListener("click", (event) => {
    showToast("Teste de Toast", "error");
    event.stopPropagation();
});

const formPatientRegister = document.querySelector("#patientForm");
formPatientRegister.addEventListener("submit", (event) => {
    event.preventDefault();
    // restante do código

});
