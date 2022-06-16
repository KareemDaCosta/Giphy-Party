var searchParams;
const submit = document.querySelector('#form');
const loadMore = document.querySelector("#load-more");
const images = document.querySelector("#results");
var offset = 0;
var limit = 25;

const requestURI ="https://api.giphy.com/v1/gifs/search?api_key=i2qJHc29PphPkoRtxjHuzFxQL2kRjLHd&q=";
var limits = `&limit=${limit}&offset=${offset}&rating=g&lang=en`;

function renderGifs(gifs) {
    const data = gifs["data"];
    console.log('data: ', data);
    for(let i = 0; i < data.length; i++) {
        results.innerHTML +=    `<div>
                                <img src="${data[i]["images"]["original"]["url"]}" alt="${data[i]["title"]}">
                                <div class='image-title'>${data[i]["title"]}</div>
                                <div class='user'>${data[i]["username"]}</div>
                                </div>`;
    }
}

async function fetchGifs() {
    limits = `&limit=${limit}&offset=${offset}&rating=g&lang=en`;
    try {
        const response = await fetch(requestURI + searchParams + limits);
        const results = await response.json();
        renderGifs(results);
    }
    catch {
        return null;
    }
}

submit.addEventListener('submit', (event) => {
    event.preventDefault();
    offset = 0;
    results.innerHTML = "";
    searchParams = document.getElementById("input").value;
    fetchGifs();
});

loadMore.addEventListener('click', (event) => {
    event.preventDefault();
    offset+=limit;
    fetchGifs();
});

