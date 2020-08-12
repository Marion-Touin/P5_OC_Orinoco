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