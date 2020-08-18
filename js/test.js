fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(ourson => {
        //première boucle pour récupérer le tableau des couleurs
        for(let i = 0; i < ourson.length; i++){
            console.log(ourson[i].colors);
            //deuxième boucle pour récupérer les couleurs individuellement
            for(let j = 0; j < ourson[i].colors.length; j++){
                console.log(ourson[i].colors[j])
            }
        }
    })

        //création du lien vers le produit
        let linkTeddy = document.createElement("a");
        linkTeddy.classList.add("btn");
        linkTeddy.setAttribute('href', "produit.html?_id="+teddies[i]._id);
        linkTeddy.innerHTML = " voir le produit";
        divcontainer.appendChild(linkTeddy);

let urlParams = new URLSearchParams(document.location.href.substring('?')[1]);
let idTeddies = params.get("_id");
let params = new URLSearchParams(urlParams)
// Récupération de l'api
fetch('http://localhost:3000/api/teddies/'+ idTeddies)
.then(response => response.json())
.then(ourson => {
    console.log(ourson.name);
}).catch(error => console.log(error))

<section class="row border border-link mt-5 mb-5 personnaliser">
<h2 class="col-lg-12 text-dark text-center pt-3 pb-4"><u>Personnaliser le produit</u></h2>
<select class="col-7 col-md-6 col-lg-5 btn btn-lg mr-5 mb-5 mt-3">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
</select>
<button class="col-7 col-md-6 col-lg-5 btn btn-lg mb-5 mt-3">Ajouter au panier</button>
</section>




btnValid.onclick = function () {
    let teddiesPanier = {
        id: ourson._id,
        name: ourson.name,
        colors: ourson.colors,
        description: ourson.description,
        imageURL: ourson.imageURL,
        price: ourson.price
    }
    localStorage.setItem('panier', teddiesPanier);
}

// page produit
linkPanier.onclick =
function produit(){
    localStorage.name = ourson.name
}

//page panier
let containerPanier = document.getElementById("teddies_panier");

window.onload = () => {
    if(localStorage.name != null) {
         var name = localStorage.name
     }else{
         var name = prompt("Entrez votre prénom")
     }
    // Création de la div 
    let divcontainerpanier = document.createElement("div");
    containerPanier.appendChild(divcontainerpanier);

    // Ajout du h2
    let h2Teddy = document.createElement("h2");
    h2Teddy.innerHTML = name;
    divcontainerpanier.appendChild(h2Teddy);


       
     console.log(name)
 }
