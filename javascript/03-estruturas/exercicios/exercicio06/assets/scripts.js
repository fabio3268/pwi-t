

let studentsArray = [];

document.querySelector("#submit").addEventListener("click",() => {
    let student = {
        name: document.querySelector("#name").value,
        subject : document.querySelector("#subject").value,
        grade : document.querySelector("#grade").value
    };
    //console.log("Oi");
    //console.log(student);
    studentsArray.push(student);
    console.log(studentsArray);
    const rowStudent = document.createElement("tr");
    rowStudent.innerHTML = `<td>${student.name}</td><td>${student.subject}</td><td>${student.grade}</td><td><button type="button">Excluir</button></td>`;
    document.querySelector("tbody").appendChild(rowStudent);
});

document.querySelector("tbody").addEventListener("click", (event) => {
    if(event.target.tagName = "BUTTON"){
        // remover da lista de objetos
        // pegar o conteúdo da segunda célula da TR
        const studentName = event.target.parentElement.parentElement.children[0].textContent;
        // remover o estudante contido no studantNAme do array studentsArray com a função splice
        event.target.parentElement.parentElement.remove();
        console.log(studentsArray);
    }
});
