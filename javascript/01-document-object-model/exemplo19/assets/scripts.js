



const input = document.querySelector("#text-box");
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
    //console.log("oi");
    if(checkbox.checked){
        input.setAttribute("disabled",true);
    } else {
        input.removeAttribute("disabled");
    }
});


