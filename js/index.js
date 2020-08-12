// Initialiser le container
let container = document.getElementById("teddies_container");

// Récupération de l'api
fetch('http://localhost:3000/api/teddies')
.then(response => response.json())
.then(teddies => {
    // Récupération des oursons
    for(let i = 0; i < teddies.length; i++){
        // Création de la div 
        let divcontainer = document.createElement("div");
        container.appendChild(divcontainer);

        //Ajout de l'image
        let imgTeddy = document.createElement("img");
        imgTeddy.classList.add("card-img");
        imgTeddy.setAttribute('src', teddies[i].imageUrl);
        divcontainer.appendChild(imgTeddy);

        // Ajout du h2
        let h2Teddy = document.createElement("h2");
        h2Teddy.classList.add("card-title");
        h2Teddy.innerHTML = teddies[i].name;
        divcontainer.appendChild(h2Teddy);

        //création du lien vers le produit
        let linkTeddy = document.createElement("a");
        linkTeddy.classList.add("btn");
        linkTeddy.href = "html/produit.html?id_ourson="+teddies[i]._id;
        linkTeddy.innerHTML = " voir le produit";
        divcontainer.appendChild(linkTeddy);
    }
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