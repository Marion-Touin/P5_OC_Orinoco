// Initialiser le container
let container = document.getElementById("teddie_container");
let option = document.getElementById("option");
let container2 = document.getElementById("teddie_container2");
let res = document.getElementById('result');
result = parseInt(res.value,10);    
let plus = document.getElementById('plus');
let moins = document.getElementById('moins');


//recuperer id
let params = new URLSearchParams (document.location.href.split('?')[1]);
let url = params.get("id_ourson");
fetch('http://localhost:3000/api/teddies/'+ url)
.then(response => response.json())
.then(ourson => {
    // Création de la div 
    let divcontainer = document.createElement("div");
    divcontainer.classList.add("bordure2");
    container.appendChild(divcontainer);
        
    //Ajout de l'image
    let imgTeddy = document.createElement("img");
    imgTeddy.classList.add("card-img2");
    imgTeddy.setAttribute('src', ourson.imageUrl);
    divcontainer.appendChild(imgTeddy);
            
    // Ajout du h2
    let h2Teddy = document.createElement("h2");
    h2Teddy.classList.add("card-title2");
    h2Teddy.innerHTML = ourson.name;
    divcontainer.appendChild(h2Teddy);

    // Ajout du prix
    let pTeddy = document.createElement("p");
    pTeddy.classList.add("card-prix");
    pTeddy.innerHTML = "Prix : " + " " + ourson.price/100 + "€";
    divcontainer.appendChild(pTeddy);

    // Ajout de la description
    let descriptionTeddy = document.createElement("p");
    descriptionTeddy.classList.add("card-description");
    descriptionTeddy.innerHTML = ourson.description;
    divcontainer.appendChild(descriptionTeddy);

    //Ajout de l'élément option
    let firstoption = document.createElement("option");
    firstoption.setAttribute('disabled', "disabled");
    firstoption.setAttribute('selected', "true");
    firstoption.setAttribute('value', 0 );
    firstoption.textContent = "Sélectionner une couleur";
    option.appendChild(firstoption);
        
    //boucle pour récupérer les couleurs individuellement
    for(let i = 0; i<ourson.colors.length; i++){
        let colorsOption = document.createElement('option');
        option.classList.add("choix");
        option.appendChild(colorsOption);
        colorsOption.setAttribute('value', 1);
        colorsOption.textContent = ourson.colors[i];
    }

    // ajout des quantités
    plus.addEventListener('click', function() {
        if(result >= 1 && result < 99){
        result++;
        document.getElementById('result').value= result;
        }
    });
    moins.addEventListener('click', function() {
        if(result > 1 && result <= 99){
        result--;
        document.getElementById('result').value= result;
        }
    });

    //ajout du bouton pour ajouter l'ourson au panier
    let divcontainer2 = document.createElement("btn");
    teddie_container2.appendChild(divcontainer2);

    let linkPanier = document.createElement("a");
    linkPanier.classList.add("btn");
    linkPanier.classList.add("btn__centre");
    linkPanier.innerHTML = "Ajouter au panier";
    divcontainer2.appendChild(linkPanier);

    // Ecoute de l'évènement valider la commande
    linkPanier.onclick =
        function (){
            let select=document.querySelector('select');
            let choixCouleur = select.selectedIndex;
            if( choixCouleur == 0 ){
                alert('Vous devez choisir une couleur');
            }else{
                let teddiePanier = {
                    id : ourson._id,
                    name : ourson.name,
                    price : ourson.price,
                    description : ourson.description,
                    imageUrl : ourson.imageUrl,
                    qty : result
                }
                let oursonPanier = JSON.stringify(teddiePanier);
                localStorage.setItem(ourson._id, oursonPanier);
                alert(message = 'vos articles ont bien été ajouté au panier');
                }
            }    
}).catch(error => console.log(error))

