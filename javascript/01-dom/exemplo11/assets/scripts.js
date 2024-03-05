
    var myBox = document.createElement("div");
    myBox.setAttribute("id","box");
    console.log(myBox);

    var mySpan = document.createElement("span");
    mySpan.textContent = "Informática";
    mySpan.setAttribute("id","title");
    console.log(mySpan);

    var mySpan02 = document.createElement("span");
    mySpan02.textContent = "Programação Web I";
    mySpan02.setAttribute("id","content");

    document.querySelector("body").insertAdjacentElement(
        "afterbegin",myBox);
    myBox.insertAdjacentElement("afterbegin",mySpan);
    myBox.insertAdjacentElement("beforeend",mySpan02);
