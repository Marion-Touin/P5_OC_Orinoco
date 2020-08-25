// Initialiser le container
let containerPanier = document.getElementById("teddies_panier");
let prixPanier = document.getElementById("panierTotal");

// récupération du localStorage
let totalPanier = 0;
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

    //Bouton supprimer produit
    let btnSupprimer = document.createElement("a");
    btnSupprimer.classList.add("btn");
    btnSupprimer.classList.add("btn__centre");
    btnSupprimer.innerHTML = "Supprimer le produit";
    divcontainerpanier.appendChild(btnSupprimer);

    //Prix total
    let total = totalPanier + (ourson.price/100 * ourson.qty);
    console.log(total)

    let prixTotal = document.createElement("p");
    prixTotal.innerHTML = "Prix total de la commande" + " " + total + "€";
    prixPanier.appendChild(prixTotal);
}
    //gestion du formulaire

    //Création de l'objet client
    class client {
        constructor(firstName, lastName, address, city, email) {
            (this.firstName = firstName),
            (this.lastName = lastName),
            (this.address = address),
            (this.city = city),
            (this.email = email)     
        }
    }

    // initialisation du tableau products
    let productsId = [];
    for (i=0; i < oursonPanier.length; i++) {
        productsId.push(oursonPanier[i]._id);
    }
    localStorage.setItem("products", JSON.stringify(productsId));
    productsId = localStorage.getItem("products");
    prorductsId = JSON.parse(productsId);

    //Au click sur valider la commande
    let boutonValider = document.querySelector(".order-submit");
    boutonValider.addEventListener("click", function(event){
        event.preventDefault();
        //création nouveau client
        let newClient = new client (
            firstName.value,
            lastName.value,
            address.value,
            city.value,
            email.value
        );
        //fetch avec méthode post
        fetch("http://localhost:3000/api/teddies/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contact : {
                    firstName: newClient.firstName,
                    lastName: newClient.lastName,
                    address: newClient.address,
                    city: newClient.city,
                    email: newClient.email,
                },
                products :productsId,
            }),
        })
        console.log(products)
    })
