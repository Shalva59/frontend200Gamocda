const sectionSlider = document.getElementById("sectionSlider");
const cardsContainerID = document.getElementById("cardsContainerID");
const fourCard = document.getElementById("fourCard");
const cardContainer = document.querySelector("cardContainer");
const cardContainerID = document.getElementById("cardContainer");
const searchID = document.getElementById("search");


async function getApi() {
    const response = await fetch("https://dummyjson.com/products");
    const changeJsonFile = await response.json();
    console.log(changeJsonFile);

    showOnlineShopping(changeJsonFile.products);
    renderCard(changeJsonFile.products);
}

getApi();


function showOnlineShopping(params) {
    console.log(params);

    const newDivElement = document.createElement("div");

    newDivElement.innerHTML = `
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
       <div class="containerDiv">
             <div class="carousel-inner">
                         <div class="carousel-item active">
                             <img src="${params[4].thumbnail}" class="d-block w-100" alt="...">
                         </div>
                         <div class="carousel-item">
                             <img src="${params[8].thumbnail}" class="d-block w-100" alt="...">
                         </div>
                         <div class="carousel-item">
                             <img src="${params[10].thumbnail}" class="d-block w-100" alt="...">
                         </div>

                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                         data-bs-slide="prev">
                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span class="visually-hidden">Previous</span>
                     </button>
                     
                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                         data-bs-slide="next">
                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
                         <span class="visually-hidden">Next</span>
                     </button>
              </div>

             <div class="description">
                   <h1 class="roboto-regular">Shalva's Shop</h1>
                   <p class="roboto-thin">Online store where you can buy the item you want</p>
             </div>

     
         </div>
        </div>

  
    `

    sectionSlider.appendChild(newDivElement);

}






function renderCard(product) {
    //cardsContainerID
    //fourCard

    const {
        thumbnail,
        title,
    } = product;



    product.map((element) => {
        const getFourCard = document.createElement("div");

        fourCard.classList.add("flex");
        fourCard.classList.add("gap-20");


        getFourCard.innerHTML =
            `
            <div  class="cardContainer " id="cardContainer">
               <div onclick="containsId(${element.id})" class="CardIMgContainer">
                    <img src="${element.thumbnail}" alt="">
               </div>

               <div  class="CardTitle">
                   <h2>${element.title}</h2>
               </div>
               <button onclick="fullCategory('${element.category}')" type="button" class="btn btn-warning">Product Page</button>
           </div>
   `

        fourCard.appendChild(getFourCard);

        // getFourCard.addEventListener("click" , (e)=>
        // {
        //     e.preventDefault();
        //     //window.location.href=`description.html?id=${element.id}`;
        //     console.log(element.id);
        // });
    });



}


function containsId(id) {
    console.log(id);
    localStorage.setItem("card", JSON.stringify(id));
    window.location.href = `description.html`;

}

 function fullCategory(category) {
 //     const response = await fetch(`https://dummyjson.com/products/category/${category}`);
 //     const changeJsonFile = await response.json();
      //console.log(changeJsonFile);
    
 
      localStorage.setItem("category", category);
      console.log(category);
      window.location.href = `shopPage.html`;

    } 