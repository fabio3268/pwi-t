const studentsList = [
    {
        name: "John",
        grade: 8.5
    },
    {
        name: "Alice",
        grade: 9.2
    },
    {
        name: "Mike",
        grade: 7.8
    },
    {
        name: "Emily",
        grade: 9.0
    },
    {
        name: "Daniel",
        grade: 8.7
    },
    {
        name: "Sarah",
        grade: 9.5
    },
    {
        name: "Alex",
        grade: 8.1
    },
    {
        name: "Olivia",
        grade: 8.9
    },
    {
        name: "William",
        grade: 9.3
    },
    {
        name: "Sophia",
        grade: 8.8
    }
];


const tableStudents = document.querySelector("tbody");

studentsList.forEach((student) => {
   //console.log(student);
   let tr = document.createElement("tr");
   tr.innerHTML = `<td>${student.name}</td><td>${student.grade}</td>`;
   tableStudents.insertAdjacentElement("beforeend",tr);
});

const buttonAverage = document.querySelector("#calculate-average");
buttonAverage.addEventListener("click",() => {
    console.log("oi");
    let sum = 0;
    studentsList.forEach((student) => {
        console.log(student.grade);
        sum = sum + parseFloat(student.grade);
    });
    console.log(`Média das notas ${sum / studentsList.length}`);
    document.querySelector("#average-div").textContent =
        `${sum / studentsList.length}`;
});

