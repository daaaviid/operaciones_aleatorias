var operaciones=["+","-"];

var simbolos=Math.floor(Math.random()* 2);
var numero1=Math.floor((Math.random()* 10) + 1);
var numero2=Math.floor((Math.random()* 10) + 1);

var sol=0;

function solucion() {
  if (operaciones[0] == operaciones[simbolos]) {
    sol=numero1+numero2;
  }
  else {
    sol=numero1-numero2;
  }
}
solucion();

var resultado=Number(prompt(`Tu operacion es: ${numero1} ${operaciones[simbolos]} ${numero2}`));
if (eval(`${resultado} == ${sol}`)) {
  alert("Tu respuesta es correcta")
  }else {
    alert(`La respuesta es incorrecta. \nLa respuesta correcta es ${sol}`)
  }
