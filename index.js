// а тут логіка і фетч

async function getData(){
    let data = await fetch("http://localhost:8000/", {mode: 'no-cors',})
    console.log(data)
}

getData()