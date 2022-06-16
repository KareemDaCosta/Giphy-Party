const requestURI ="https://api.giphy.com/v1/gifs/search?api_key=i2qJHc29PphPkoRtxjHuzFxQL2kRjLHd&q=";
const limits = "&limit=25&offset=0&rating=g&lang=en";

var searchParams;
const submit = document.querySelector('#form');
const images = document.querySelector("#results");

function renderGifs(gifs) {
    const data = gifs["data"];
    for(let i = 0; i < data.length; i++) {
        results.innerHTML += `<img src="${data[i]["images"]["original"]["url"]}" />`;
    }
}

async function fetchGifs() {
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
    results.innerHTML = "";
    searchParams = document.getElementById("input").value;
    fetchGifs();
});