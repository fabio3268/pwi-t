



// área do circulo
function areaCircle (r){
    var a = Math.PI * Math.pow(r,2);
    return Math.floor(a);
    // alternativa em uma linha
    // return Math.floor(Math.PI * Math.pow(r,2));
}
// perímetro
function circumferenceCircle(r){
    var c = 2 * Math.PI * r;
    return Math.floor(c);
}
var r = window.prompt("Informe o raio do circulo");
console.log(areaCircle(r));
console.log(circumferenceCircle(r));
