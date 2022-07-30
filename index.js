const h1 = document.querySelector("h1");
const calculo1 = document.querySelector("#calculo1");
const calculo2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

function btnOnClick() {
  const suma = Number(calculo1.value) + Number(calculo2.value);
  resultado.innerText = "Resultado: " + suma;
}

// const p = document.querySelector("p");
// const parrafo = document.querySelector(".parrafo");
// const pid = document.querySelector("#pid");
// const input = document.querySelector("input");

// console.log(input.value);

// console.log({
//   h1,
//   p,
//   parrafo,
//   pid,
//   input,
// });

// h1.innerHTML = "Escribiendo desde <br>JavaScript";
// h1.innerText = "Escribiendo desde <br>JavaScript";
// console.log(h1.getAttribute("pantalla"));
// console.log(h1.getAttribute("class"));
// h1.setAttribute("class", "rojo");
// console.log(h1.getAttribute("class"));

// h1.classList.add("amarillo");
// console.log(h1.getAttribute("class"));
// h1.classList.remove("rojo");
// console.log(h1.getAttribute("class"));
// // h1.classList.toggle("rojo");
// // h1.classList.contains("rojo");

// input.value = "456";

// const img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://www.geekmi.news/__export/1641156098758/sites/debate/img/2022/01/02/disexo_-_2022-01-02t134133_864.jpg_242310155.jpg"
// );

// console.log(img);
// pid.innerHTML = "";
// pid.append(img);
