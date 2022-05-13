// Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: ", ladoCuadrado, "cm.");

function perimetroCuadrado(lado) {
  return lado * 4;
}

// console.log("El perímetro del cuadrado es: ", perimetroCuadrado, "cm.");

function areaCuadrada(lado) {
  return lado * lado;
}

// console.log("El área del cuadrado es: ", areaCuadrada, "cm^2");
console.groupEnd();

// Código del cuadrado

// Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "Los lados del triángulo miden: ",
//   ladoTriangulo1,
//   "cm, ",
//   ladoTriangulo2,
//   "cm, ",
//   baseTriangulo,
//   "cm"
// );

// const alturaTriangulo = 5.5;

// console.log("La altura del triángulo es de: ", alturaTriangulo, "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// console.log("El perímetro del triángulo es de: ", perimetroTriangulo, "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// console.log("El área del triángulo es: ", areaTriangulo, "cm^2");
console.groupEnd();
// Código del triángulo

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: ", radioCirculo, "cm.");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}
// console.log("El diámetro del círculo es: ", diametroCirculo, "cm.");

// PI
// const PI = 3.1415;
const PI = Math.PI;
// console.log("PI es: ", PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// console.log("El perímetro del círculo es: ", perimetroCirculo, "cm.");

// Área
function areaCirculo(radio) {
  return radio * radio * PI;
}
// console.log("El área del círculo es: ", areaCirculo, "cm^2.");

console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);

  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrada(value);

  alert(area);
}

function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("inputLado1");
  const valueLado1 = Number(inputLado1.value);
  const inputLado2 = document.getElementById("inputLado2");
  const valueLado2 = Number(inputLado2.value);
  const inputBase = document.getElementById("inputBase");
  const valueBase = Number(inputBase.value);

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);

  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("inputBase");
  const valueBase = inputBase.value;
  const inputAltura = document.getElementById("inputAltura");
  const valueAltura = inputAltura.value;

  const area = areaTriangulo(valueBase, valueAltura);

  alert(area);
}

function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("inputRadio");
  const radio = inputRadio.value;

  const perimetro = perimetroCirculo(radio);

  alert(perimetro);
}
function calcularAreaCirculo() {
  const inputRadio = document.getElementById("inputRadio");
  const radio = inputRadio.value;

  const area = areaCirculo(radio);

  alert(area);
}
