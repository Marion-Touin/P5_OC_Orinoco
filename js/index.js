// Récupération des produits sur l'API
fetch('http://localhost:3000/api/teddies')
.then(response => response.json())
.then(produits => {
    //création d'une constante
    const mesOursons = document.querySelector('#mesOursons');
    //boucle pour récupérer les produits
    for(let i = 0; i < produits.length; i++){
        //insertion js dans html
        mesOursons.innerHTML += `
        <article class="col-md-10 col-lg-6">
        <div class="card mb-5">
        <img class="card-img" src="${produits[i].imageUrl}" alt="Ourson">
        <h2 class="card-title text-center">${produits[i].name}</h2>
        <p class="card-text text-center">${produits[i].price/100} €</p>
        <a href="produit.html"><button class="btn btn-lg">Voir le produit</button></a>
        </div>
        </article>` 
;
    }

});

