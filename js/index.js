const getTeddies = async function() {
    let response = await fetch('http://localhost:3000/api/teddies')
    let data = await response.json()
    console.log(data)
}

getTeddies()

