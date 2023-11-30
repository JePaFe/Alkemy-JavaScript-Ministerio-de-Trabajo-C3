const sections = document.getElementsByTagName("section");

// console.log(sections[0].innerText);
console.log(sections[0].textContent);

sections[0].innerHTML += '<h2 class="destacado">Algo...</h2>';

// sections[0].className = "rojo";

// ---

sections[0].classList.add("rojo");
sections[0].classList.remove("rojo");
sections[0].classList.contains("rojo");
sections[0].classList.toggle("rojo");
