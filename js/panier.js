// Initialiser le container
let containerPanier = document.getElementById("teddies_panier");

// récupération du localStorage
let oursonPanier = Object.keys(localStorage);
for (i=0; i < oursonPanier.length; i++) {
    let ourson = JSON.parse(localStorage.getItem(oursonPanier[i]))

    // Création de la div 
    let divcontainerpanier = document.createElement("div");
    divcontainerpanier.classList.add("bordure");
    divcontainerpanier.classList.add("col-lg-5");
    containerPanier.appendChild(divcontainerpanier);

    //Ajout de l'image
    let imgTeddy = document.createElement("img");
    imgTeddy.classList.add("card-img");
    imgTeddy.setAttribute('src', ourson.imageUrl);
    divcontainerpanier.appendChild(imgTeddy);

    // Ajout du h2
    let h2Teddy = document.createElement("h2");
    h2Teddy.classList.add("card-title");
    h2Teddy.innerHTML = ourson.name;
    divcontainerpanier.appendChild(h2Teddy);

    // Ajout du prix
    let pTeddy = document.createElement("p");
    pTeddy.classList.add("card-prix");
    pTeddy.innerHTML = "prix" + " " + ourson.price/100 + "€";
    divcontainerpanier.appendChild(pTeddy);

    //Quantité commandé
    let qtyTeddy = document.createElement("p");
    qtyTeddy.classList.add("card-prix");
    qtyTeddy.innerHTML = "Quantité produits :" + " " + ourson.qty;
    divcontainerpanier.appendChild(qtyTeddy);

}


 