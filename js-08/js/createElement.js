const section = document.createElement("section");

const h2 = document.createElement("h2");
h2.textContent = "Sección 2";

const p = document.createElement("p");
p.textContent = "Un párrafo...";

// section.appendChild(h2);
// section.appendChild(p);

section.append(h2, p);

console.log(section);

const main = document.getElementById("principal");
main.appendChild(section);

section.removeChild(p);

section.remove();
