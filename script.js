const api_key = "8OfWr8DvX9sRWkEtUiu5HNa4zbwdBVCU";
const base_api = "https://api.giphy.com/v1/gifs";
const api_search = "https://api.giphy.com/v1/gifs/search";
const key_search = "&api_key=8OfWr8DvX9sRWkEtUiu5HNa4zbwdBVCU"


//Mostrar imagenes al inicio!!

const root = document.getElementById('root');

const mostrarImg = (element) => {
      const img = document.createElement("img");
      img.src = element.images.original.webp;
      img.alt = element.title;
      return img;
} 

const fechData = async () => {
    const res = await fetch(`${base_api}/trending?api_key=${api_key}`);
    const {data} = await res.json();
    return data;
}

const principalFunction = async () => {
    const data = await fechData();
    const templates = data.map((img) => mostrarImg(img));
    root.append(...templates);
}

window.addEventListener("load", principalFunction);

//Buscador!!

let busqueda = "?q=";
let q = "";
let urlCompleta = "";
const limite = "&limit=20"

const btn = document.getElementById('btn');

btn.onclick = () => {
    q = document.getElementById("busqueda").value;
    urlCompleta = url + busqueda + q + key_search;
    getData();
}

const getData = async () => {
    await fetch(urlCompleta).then((res) => {
        return res.json();
    }).then((giphy) => {
        console.log(giphy);
    
        for(let i = 0; i < giphy.data.length; i++){
            const gif = document.createElement('img');
            gif.src = giphy.data[i].images["original"].url;
            document.getElementById("root").appendChild(gif);
        }
    })
}
getData();