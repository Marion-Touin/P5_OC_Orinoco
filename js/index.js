/*création requête method fetch, récuparation des données*/
fetch('http://localhost:3000/api/teddies')
    .then(response => response.json()).then(console.log)
