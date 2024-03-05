
var box =  document.querySelector("#box");
/*
box.insertAdjacentHTML("beforebegin","<span>Antes do Começo</span>");
box.insertAdjacentHTML("beforeend","<span>Antes do Fim</span>");
box.insertAdjacentHTML("afterend","<span>Depois do Fim</span>");
box.insertAdjacentHTML("afterbegin","<span>Depois do Começo</span>");
 */
var title = document.querySelector("#box #title");
title.insertAdjacentHTML("beforebegin","<span class='red'>Antes do Começo</span>");
title.insertAdjacentHTML("beforeend","<span class='red'>Antes do Fim</span>");
title.insertAdjacentHTML("afterend","<span class='red'>Depois do Fim</span>");
title.insertAdjacentHTML("afterbegin","<span class='red'>Depois do Começo</span>");
