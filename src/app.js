// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   let pronoun = ["david", "davi"];
//   let adj = ["alonso", "alon"];
//   let noun = ["dev", "developer", "desarrollador"];
//   let extension = [".net", ".es", ".com"];

//   for (let a = 0; a < pronoun.length; a++) {
//     for (let b = 0; b < adj.length; b++) {
//       for (let c = 0; c < noun.length; c++) {
//         for (let d = 0; d < extension.length; d++) {
//           let domainGenerator = pronoun[a] + adj[b] + noun[c] + extension[d];
//           console.log(domainGenerator);
//         }
//       }
//     }
//   }
// };
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["david", "davi"];
  let adj = ["alonso", "alon"];
  let noun = ["dev", "developer", "desarrollador"];
  let extension = [".net", ".es", ".com"];

  // Seleccionar el elemento del DOM donde se mostrarán los dominios
  let domainElement = document.getElementById("domainGenerator");
  let domains = "";

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < extension.length; d++) {
          let domainGenerator = pronoun[a] + adj[b] + noun[c] + extension[d];
          domains += domainGenerator + "<br>";
        }
      }
    }
  }

  // Insertar los dominios generados en el elemento seleccionado
  domainElement.innerHTML = domains;
};
