// Initialiser le container
let containerPanier = document.getElementById("teddies_panier");

// récupération du localStorage
let oursonPanier = localStorage.getItem("panier");
oursonPanier = JSON.parse(oursonPanier);
console.log(oursonPanier.name)

// Création de la div 
let divcontainerpanier = document.createElement("div");
containerPanier.appendChild(divcontainerpanier);

//Ajout de l'image
let imgTeddy = document.createElement("img");
imgTeddy.classList.add("card-img");
imgTeddy.setAttribute('src', oursonPanier.imageUrl);
divcontainerpanier.appendChild(imgTeddy);

// Ajout du h2
let h2Teddy = document.createElement("h2");
h2Teddy.innerHTML = oursonPanier.name;
divcontainerpanier.appendChild(h2Teddy);

// Ajout de la description
let descriptionTeddy = document.createElement("p");
descriptionTeddy.innerHTML = oursonPanier.description;
divcontainerpanier.appendChild(descriptionTeddy);

// Ajout du prix
let pTeddy = document.createElement("p");
pTeddy.innerHTML = "prix" + " " + oursonPanier.price/100 + "€";
divcontainerpanier.appendChild(pTeddy);
 