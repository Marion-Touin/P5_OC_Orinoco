fetch('http://localhost:3000/api/teddies/'+ url)
.then(response => response.json())
.then(ourson => {
    localStorage.getItem('id');
    localStorage.getItem('colors');
    localStorage.getItem('description');
    localStorage.getItem('name');
    localStorage.getItem('price');
    localStorage.getItem('imageURl');
}