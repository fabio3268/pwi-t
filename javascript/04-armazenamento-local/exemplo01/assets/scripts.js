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

localStorage.setItem("name","Fábio Santos");
localStorage.setItem("age", "48");

const studentsListJSON = JSON.stringify(studentsList);
console.log(studentsListJSON);
localStorage.setItem("studentsList",studentsListJSON);


