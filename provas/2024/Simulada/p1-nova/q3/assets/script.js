let studentsList = [];

const student = {
    name: "",
    age: ""
};

const buttonAdd = document.querySelector("#add");
const buttonOldest = document.querySelector("#oldest");
buttonAdd.addEventListener("click", () => {
    const student = {
        name: document.querySelector("#name").value,
        age: document.querySelector("#age").value
    };
    studentsList.push(student);
    console.log(studentsList);
});

buttonOldest.addEventListener("click", () => {
    console.log("Old");
    let ageOldest = 0;
    let indexOldest = -1;
    studentsList.forEach((element,index) => {
        if(Number(element.age) > Number(ageOldest)) {
            ageOldest = element.age;
            console.log(ageOldest);
            document.querySelector("#result").textContent = element.name;
        }
    });
});
