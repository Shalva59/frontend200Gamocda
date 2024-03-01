const testProduct = localStorage.getItem("card");

const showPicturesContainerID = document.getElementById("showPicturesContainer");

async function getApi() {
    const response = await fetch(`https://dummyjson.com/products/${testProduct}`);
    const changeJsonFile = await response.json();
    console.log(changeJsonFile);

    showCard(changeJsonFile);
}

getApi();


function showCard(data) {

    const newDiv = document.createElement("div");
    newDiv.classList.add("container");
    newDiv.classList.add("flex");
    newDiv.classList.add("gap-20");


    newDiv.innerHTML =
        `
  
        <div class="productImageContaincer">
            <img src="${data.thumbnail}" alt="phone">
        </div>
    
        <div  class="descriptionContainer">
            <h1>Brand : ${data.brand}</h1>
            <h4>Category : ${data.category}</h4>
            <p>Price : ${data.price}</p>
            <p>${data.description}</p>
            <div>
                <button type="button" class="btn btn-warning">Add Favorite</button>
            </div>
        </div>
    





        `




    showPicturesContainerID.appendChild(newDiv);

}