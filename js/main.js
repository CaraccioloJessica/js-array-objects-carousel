// JS IMPORTATO DA ARRAY CAROUSEL CON ARRAY SOSTITUTI DA ARRAY OBJECTS, E FOREACH AL POSTO DEL LOOP FOR

// IMG ARRAY
const images = [ 
{ 
  image: 'img/01.webp', 
  title: 'Marvel\'s Spiderman Miles Morales', 
  text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
},
{ 
  image: 'img/02.webp', 
  title: 'Ratchet & Clank: Rift Apart', 
  text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
},
{ 
  image: 'img/03.webp', 
  title: 'Fortnite', 
  text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
}, 
{
  image: 'img/04.webp', 
  title: 'Stray', 
  text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
 },
{ 
  image: 'img/05.webp', 
  title: "Marvel's Avengers", 
  text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
}
];

//INDEX ATTUALE
let index = 0;
/* BONUS 2
  const timer = setInterval(countdown, 3000);
 */

// VARIABILE CONTAINER
let itemContenitore = document.querySelector(".item-container");

//CREARE DIV CONTENENTE IMG E DESCRIZIONE PER OGNI ELEMENTO DELL'ARRAY DI OGGETTI
images.forEach((element, i) => {
  itemContenitore.innerHTML+=
  `<div class="item" id="slide${i}">
    <img src="${element.image}">
    <div id="description">
      <h3>${element.title}</h3>
      <p>${element.text}</p>
    </div>
  </div>`;
});

// VARIABILI IMMAGINI VISUALIZZATE
let imgVisualizzata = document.getElementById("slide" + index);
imgVisualizzata.classList.add("active");

// NAVIGAZIONE
const up = document.querySelector(".up");
const down = document.querySelector(".down");

//  BOTTONE SU CLICCATO
down.addEventListener("click",
 function () {
  // AVANZA DI 1 NELL'INDICE
  index++;
  // SE L'INDICE PASSA L'ULTIMA FOTO DELL'ARRAY
  if (index > images.length - 1) {
    // INDICE TORNA A 0
    index = 0;
  }

  // DISPLAY NONE ALL'ITEM
  imgVisualizzata.classList.remove("active");
  // AVANZA DI 1
  imgVisualizzata = document.getElementById("slide" + index);
  // DAI DISPLAY BLOCK
  imgVisualizzata.classList.add("active");  
  }
);

// BOTTONE GIU CLICCATO
up.addEventListener("click",
function (){
  // DIMINUISCE DI 1 NELL'INDICE
  index--;
  // SE INDICE ATTUALLE VA SOTTO LO 0
  if (index < 0) {
    // IMPOSTA INDICE NELL'ULTIMA FOTO DELL'ARRAY
    index = images.length - 1;
  }

  // DISPLAY NONE ALL' ITEM
  imgVisualizzata.classList.remove("active");
  // AVANZA DI 1
  imgVisualizzata = document.getElementById("slide" + index);
  // DAI DISPLAY BLOCK
  imgVisualizzata.classList.add("active");
  }
);

/*
-------------------BONUS 2------------------------
// OGNI 3 SECONDI L'IMMAGINE CAMBIA DA SOLA
function countdown() {
  index++;
  // SE L'INDICE PASSA L'ULTIMA FOTO DELL'ARRAY
  if (index > images.length - 1) {
    // INDICE TORNA A 0
    index = 0;
  }

  // DISPLAY NONE ALL'ITEM
  imgVisualizzata.classList.remove("active");
  // AVANZA DI 1
  imgVisualizzata = document.getElementById("slide" + index);
  // DAI DISPLAY BLOCK
  imgVisualizzata.classList.add("active");  
}
*/