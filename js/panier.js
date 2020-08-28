// Initialiser les containers
let containerPanier = document.getElementById("teddies_panier");
let prixPanier = document.getElementById("panierTotal");

// Création du tableau products
let productsId = [];

// création de la variable totalpanier
let totalPanier = 0;

// récupération du localStorage
let oursonPanier = Object.keys(localStorage);
for (i=0; i < oursonPanier.length; i++) {
    let ourson = JSON.parse(localStorage.getItem(oursonPanier[i]))

    // Création de la div 
    let divcontainerpanier = document.createElement("div");
    divcontainerpanier.classList.add("bordure")
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

    // Calcul du prix total
    totalPanier = totalPanier + (ourson.price/100 * ourson.qty);

    // Push Id de l'ourson dans le tableau products
    productsId.push(ourson.id);
}

// Affichage du prix total
let prixTotal = document.createElement("p");
prixTotal.classList.add("col-lg-12");
prixTotal.classList.add("prix");
prixTotal.innerHTML = "Prix total de la commande" + " " + totalPanier + "€";
prixPanier.appendChild(prixTotal);

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

    // check champs du formulaire
    if (!document.querySelector('#firstName').value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)){
        alert('Le champs nom contient des erreurs')
    } 
    if (!document.querySelector('#lastName').value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)){
        alert('Le champs prénom contient des erreurs')
    }
    if(!document.querySelector('#address').value.match(/^([0-9]{1,3}(([,. ]?){1}[a-zA-Zàâäéèêëïîôöùûüç' ]+))$/)){
        alert('Le champs adresse contient des erreurs')
    }
    if (!document.querySelector('#city').value.match(/^([a-zA-Zàâäéèêëïîôöùûüç' ]+)$/)){
        alert('Le champs ville contient des erreurs')
    }
    if (!document.querySelector('#email').value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        alert('Le champs email contient des erreurs')
    }

    //création du nouveau client
    event.preventDefault();
    let newClient = new Client (
        document.querySelector('#firstName').value,
        document.querySelector('#lastName').value,
        document.querySelector('#address').value,
        document.querySelector('#city').value,
        document.querySelector('#email').value,
    );
    console.log(productsId);

    // Création de l'objet résultat
    let resultat = {
        contact : {
            firstName : newClient.firstName,
            lastName : newClient.lastName,
            address : newClient.address,
            city : newClient.city,
            email : newClient.email
        },
        products : productsId
    }
    
    // Apelle de fetch avec order
    fetch('http://localhost:3000/api/teddies/order', {
        method: 'POST',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify (resultat)
    })
        //réponse du serveur
        .then(response => response.json())
        .then(response => {
            console.log(response)
            localStorage.clear();
                let objCommande = {
                    idCommande : response.orderId,
                    prixTotal : totalPanier
                }
                let commande = JSON.stringify(objCommande);
                localStorage.setItem('commande', commande);
                window.location = 'confirmation.html';
            });  
})





