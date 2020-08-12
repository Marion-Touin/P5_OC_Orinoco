//recuperer id
let params = new URLSearchParams ('document.location.href');
let url = params.get("_id");
for (let p of params){
    console.log(p[1]);
}
fetch('http://localhost:3000/api/teddies/'+url)
.then(response => response.json())
.then(oursons => {
 
   console.log('ourson[i].name');
   
}).catch(error => console.log(error))
