const form = document.getElementById("form");
const searchInput = document.getElementById("search");
const mainID = document.getElementById("main");

async function getProduct(searchTerm) {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const data = await response.json();
        console.log(data);
        showCategory(data.products);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log('Form submitted');



    const searchTerm = searchInput.value.trim();
    console.log('Search term:', searchTerm);

   
    if (searchTerm.length !== 0) {
        mainID.innerHTML = "";
        await getProduct(searchTerm);
        searchInput.value = "";
    } else {
        window.location.reload();
    }
});



const card = document.createElement("div");

function showCategory(data) {
    data.map((element) => {
        card.classList.add("col-md-12");
        card.classList.add("flex");
        card.classList.add("flex-wrap");
        card.classList.add("gap-15");
        card.classList.add("justify-content-center");

        card.innerHTML += `
        <div class="card" style="width: 18rem;">
       
        <div class="imgContainer">
           <img src="${element.thumbnail}">
        </div>
       
     
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${element.brand}</li>
            <li class="list-group-item">${element.category}</li>
            <li class="list-group-item">$${element.price}</li>
          
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
        `
    });

    mainID.appendChild(card);
}