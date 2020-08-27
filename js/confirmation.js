let containerConfirmation = document.getElementById("confirmation");


let commande =  Object.keys(localStorage);
for (i=0; i < commande.length; i++) {
    let recapCommande = JSON.parse(localStorage.getItem(commande[i]))
    console.log(recapCommande)

    //création de la div
    let divConfirmation = document.createElement("div");
    containerConfirmation.appendChild(divConfirmation);

    //création du h2
    let remerciement = document.createElement("h2");
    remerciement.innerHTML = "Nous vous remerçions pour votre commande, elle sera traité dans les meilleures délais !";
    containerConfirmation.appendChild(remerciement);

    // création du h3
    let recaptilatif = document.createElement("h3");
    recaptilatif.innerHTML = "Voici le récapitulatif de votre commande !";
    containerConfirmation.appendChild(recaptilatif);

    //ajout du l'id commande
    let id = document.createElement("p");
    id.innerHTML = "Identifiant de la commande : "+ recapCommande.idCommande;
    containerConfirmation.appendChild(id);

    // Ajout du prix
    let prix = document.createElement("p");
    prix.innerHTML = "prix total de votre commande : " + recapCommande.prixTotal + " €";
    containerConfirmation.appendChild(prix);
}
localStorage.clear();
