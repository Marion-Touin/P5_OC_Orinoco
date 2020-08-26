// Initialiser le container
let containerPanier = document.getElementById("teddies_panier");
let prixPanier = document.getElementById("panierTotal");

// récupération du localStorage
let productsId = [];
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

    let prixTotal = document.createElement("p");
    prixTotal.innerHTML = "Prix total de la commande" + " " + total + "€";
    prixPanier.appendChild(prixTotal);

    //création du tableau products
    productsId.push(ourson.id);
    localStorage.setItem('products', JSON.stringify(productsId));
    console.log (productsId)
}
//Création de la classe client
class Client {
    constructor(firstName, lastName, address, city, email) {
    (this.firstName = firstName),
    (this.lastName = lastName),
    (this.address = address),
    (this.city = city),
    (this.email = email)     
    }
}

//Création de l'objet client
let form = document.querySelector('#validationCommande');
form.addEventListener('submit', (e) => {
    event.preventDefault();
    let newClient = new Client (
        document.querySelector('#firstName').value,
        document.querySelector('#lastName').value,
        document.querySelector('#address').value,
        document.querySelector('#city').value,
        document.querySelector('#email').value,
    );
    console .log(newClient);
    localStorage.setItem('contact', JSON.stringify(newClient));
})
function send(){
    let newClient = localStorage.getItem('contact');
    newClient = JSON.parse(newClient);
    let productsId = localStorage.getItem('products')
    products = JSON.parse(productsId);

    fetch('http://localhost:3000/api/teddies/order', {
        method: 'POST',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify ({
            firstName : newClient.firstName,
            lastName : newClient.lastName,
            address : newClient.address,
            city : newClient.city,
            email : newClient.email
        }),
        products : productsId,
    })
        .then(function(response) {
        if(response.ok) {
            document.querySelector('validationCommande').classList.remove('disabled');
            alert('vos informations ont bien été enregistré, vous pouvez validez votre commande!');
            response.json()
            .then((products) => {
                localStorage.setItem('orderInfos', JSON.stringify(products)); 
            })
        }
    })
}  




