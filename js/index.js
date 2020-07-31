/*Récupération donnée vie l'api*/
const getTeddies = async function() {
    let response = await fetch('http://localhost:3000/api/teddies')
    let data = await response.json()
    console.log(data)
    /*boucle pour récupérer la description*/
    data.forEach(function(ourson){
        console.log(ourson.imageUrl);
        console.log(ourson.name);
        console.log(ourson.price);
        console.log(ourson._id);
    });
    /*Injection des produits dans le HTML vis JS*/

}
getTeddies()

