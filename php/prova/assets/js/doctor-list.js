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
    //console.log(specialties.data);
    specialties.data.forEach(specialty => {
        //console.log(specialty);
        showSelect(selectFilterSpecialty, specialties.data);
        showSelect(selectSpecialty, specialties.data);
    });
});

selectFilterSpecialty.addEventListener("change", (event) => {
    //console.log(selectFilterSpecialty.value);
    doctorListSection.innerHTML = ''; // limpa a lista de médicos
    fetch('api/doctors-by-speciality.php?id=' + selectFilterSpecialty.value)
        .then(response => response.json())
        .then(doctors => {
            //console.log(doctors);
            showToast(doctors.message, doctors.type);
            if(doctors.data) {
                doctors.data.forEach(doctor => {
                    console.log(doctor);
                    const articleDoctor = document.createElement('article');
                    articleDoctor.setAttribute('doctor-id', doctor.id);
                    articleDoctor.classList.add('doctor-card');
                    articleDoctor.innerHTML = `
                    <header>
                    <h2>${doctor.name}</h2>
                    <button class="edit-btn">Editar</button>
                    </header>
                    <section>
                        <p><strong>CRM:</strong>${doctor.crm}</p>
                        <p><strong>Especialidade:</strong> ${doctor.specialty}</p>
                    </section>
                    `;
                    doctorListSection.appendChild(articleDoctor);
                });
            }
        });
});

doctorListSection.addEventListener("click", (event) => {
    //console.log(event.target.tagName);
    if(event.target.tagName == "BUTTON") {
        const doctorId = event.target.parentElement.parentElement.getAttribute("doctor-id");
        //console.log(event.target.parentElement.parentElement);
        console.log(doctorId);
        fetch('api/doctor-get.php?id=' + doctorId)
            .then(response => response.json())
            .then(doctor => {
                console.log(doctor.data.name);
                document.querySelector("#editDoctorId").value = doctor.data.id;
                document.querySelector("#editName").value = doctor.data.name;
                document.querySelector("#editCRM").value = doctor.data.crm;
                document.querySelector("#editSpecialty").value = doctor.data.specialty_id;
                openModal();
            });
    }
});

// extra não foi cobrado na prova

const formEditDoctor = document.querySelector("#editDoctorForm");

formEditDoctor.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formEditDoctor);
    fetch('api/doctor-update.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            showToast(result.message, result.type);
    });
});