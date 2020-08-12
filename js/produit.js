//recuperer id
let params = new URLSearchParams (document.location.href.split('?')[1]);
let url = params.get("id_ourson");
fetch('http://localhost:3000/api/teddies/'+ url)
.then(response => response.json())
.then(ourson => {
 
   console.log(ourson.name);
   
}).catch(error => console.log(error))
