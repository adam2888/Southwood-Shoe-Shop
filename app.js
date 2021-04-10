var b = document.documentElement;
b.setAttribute('data-useragent',  navigator.userAgent);
b.setAttribute('data-platform', navigator.platform );


//Sript for the image gallery.

const current = document.querySelector('#current');
const imgs = document.querySelector('.thumbnails');
let img = document.querySelectorAll('.thumbnails img');
const border = "medium solid #ffe002";

// Create a puprle border for selected image
img[0].style.border = border;
img[1].style.border = "none ";
imgs.addEventListener('click', imgClick);

//Changes main image src to clicked image src.
function removeBorder(){

}


function imgClick(e) {
  for (let i = 0; i < img.length; i++) {
  img[i].style.border = "none";
}
  if(e.target.tagName === "IMG"){
    current.src = e.target.src
    e.target.style.border = border;

  }
  }

//Script  for drop down menus.

let sizeList = document.getElementById("sizes").childNodes;
let sizePlaceHolder = document.getElementById("sizePlaceHolder");
let sizeProduct = document.getElementById("sizes");


let coloursList = document.getElementById("colours").childNodes;
let coloursPlaceHolder = document.getElementById("coloursPlaceHolder")
let coloursProduct = document.getElementById("colours");






// Function applies click event to al list items.
//When an items clicked it goes to the top of the list.

  for (let i = 0; i < sizeList.length; i++) {
  sizeList[i].addEventListener("click",
  function(e) {
  sizes.insertBefore(this, sizes.childNodes[0])
  sizePlaceHolder.style.display = "none";
  sizes.classList.toggle("openSizeContainer")
  createSummary()
})
}
  for (let i = 0; i < coloursList.length; i++) {
  coloursList[i].addEventListener("click",
  function(e) {
  coloursProduct.insertBefore(this, coloursProduct.childNodes[0])
  coloursPlaceHolder.style.display = "none";
  coloursProduct.classList.toggle("openColourContainer")
  createSummary()
})
}



//Function creates order itinerary and unit price.

function createSummary (i){
let sizeList = document.querySelector("#fabrics");
let selectedSize = sizes.querySelector("li .dropDownName").innerHTML;
let coloursList = document.querySelector("#colours");
let selectedColour = colours.querySelector("li .dropDownName").innerHTML;


let price = 65;
let pricePounds = price.toFixed(2);
document.getElementById("totalBasketPrice").innerHTML = "£"+pricePounds+"";
document.getElementById("productSummary").innerHTML =
 "<p>Puma Trainer Suede Classic: £65.00</p><p class= 'grey'>"+selectedSize+"</p><p class='grey'> Colour: "+selectedColour+"</p>";



 document.getElementById("totalBasketPrice").style.display = "block";
 document.getElementById("updatedPrice").style.display = "none"

}


//Script works out total order price.

let itemQuantity = document.getElementById("itemQuantity");
let itemNumber = 1;
let upArrow = document.getElementById("upArrow");
let downArrow = document.getElementById('downArrow');

upArrow.addEventListener("click",function(){
 document.getElementById("totalBasketPrice").style.display = "none";
 document.getElementById("updatedPrice").style.display = "block"
  itemNumber ++;
  itemQuantity.innerText = itemNumber
  let getPrice = document.getElementById('totalBasketPrice').innerHTML.replace("£","");
  let newPrice = (getPrice * itemNumber);
  document.getElementById("updatedPrice").innerHTML =  "£"+ newPrice.toFixed(2)
})

downArrow.addEventListener("click",function(){
document.getElementById("totalBasketPrice").style.display = "none";
document.getElementById("updatedPrice").style.display = "block"
if(itemNumber > 0){
  itemNumber--;
  itemQuantity.innerText = itemNumber
  let getPrice = document.getElementById('totalBasketPrice').innerHTML.replace("£","");
  let newPrice = (getPrice * itemNumber);
  document.getElementById("updatedPrice").innerHTML =  "£"+ newPrice.toFixed(2)
};
})

//Script to animate add to basket div

let basket = document.getElementById("basket");
let basketText = document.getElementById("basketText");
let heartContainer= document.getElementById("heartContainer");
let heart = document.getElementById("heart")
let saveText = document.getElementById("saveText")



//Script to either hover or click heart depending on device used.

let = viewportWidth = window.innerWidth
if(viewportWidth > 920){
heartContainer.addEventListener("mouseover",function(){
basketText.style.width = "30%";
heartContainer.style.width= "60%";
heart.style.color = "red";
saveText.style.color = "black"
})

heartContainer.addEventListener("mouseleave",function(){
basketText.style.width = "80%";
heartContainer.style.width= "50px";
heart.style.color = "black";
saveText.style.color = "white";
})
} else {
  heartContainer.addEventListener("click",function(){
  heart.classList.toggle("heartStyleClicked");
  })
}

// This script is for a pop up to appear when a picture of a material is cliked.

let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let imgList = document.getElementsByClassName("itemImage");
for(let i = 0; i < imgList.length;i++)
imgList[i].addEventListener("click",
function(){
modal.style.display = "block";
modalImg.src = this.src;
});

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
};
