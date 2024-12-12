import { showToast, openModal, closeModal} from "./functions.js";
console.log('patient-register.js');

// Teste para chamar a função showToast clicando no h1 da página onde diz `Médicos Cadastrados`
/*document.querySelector("h1").addEventListener("click", (event) => {
    showToast("Teste de Toast", "success");
    event.stopPropagation();
});*/

// Teste para chamar a função openModal clicando no primeiro botão `Editar`
/*
document.querySelector(".edit-btn").addEventListener("click", (event) => {
    openModal();
});
*/

document.querySelector("#closeModal").addEventListener("click", (event) => {
    closeModal();
});

document.querySelector("#cancelEdit").addEventListener("click", (event) => {
    closeModal();
});

const selectFilterSpecialty = document.querySelector("#specialtyFilter");
const selectSpecialty = document.querySelector("#editSpecialty");
const doctorListSection = document.querySelector("#doctorList");

function showSelect (selectHTML, listObjects) {
    listObjects.forEach(item => {
        let option = document.createElement('option');
        option.value = item.id;
        option.text = item.name;
        selectHTML.appendChild(option);
    });
}

fetch('api/specialties-list.php').then(response => response.json()).then(specialties => {
    console.log(specialties.data);
    specialties.data.forEach(specialty => {
        console.log(specialty);
        showSelect(selectFilterSpecialty, specialties.data);
        showSelect(selectSpecialty, specialties.data);
    });
});

selectFilterSpecialty.addEventListener("change", (event) => {
    console.log(selectFilterSpecialty.value);
    fetch('api/doctors-by-speciality.php?id=' + selectFilterSpecialty.value)
        .then(response => response.json())
        .then(doctors => {
            console.log(doctors);
        });
});

