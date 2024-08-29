import {getItem,getItemSize,getAllItems} from './items.js'

const itemsArray = getAllItems();
const indicator =document.querySelectorAll(".indicator");
const itemContainer =document.querySelector(".item-container");
const carousellSlider = document.getElementById("carousell-slider");
let carousellPosition = 0;
let itemSlider = 0;



initializeMovementButton();
function initializeMovementButton(){
    const movementButton = document.querySelectorAll('.movement-button');
    movementButton.forEach(button =>button.addEventListener('click',moveFlashSales));
}
function moveFlashSales(event){
    console.log(itemSlider);
    const item = document.querySelector('.item');
    
    if(event.target.id ==='nextButton'){
        console.log(event.target.id);
        itemContainer.scrollTo(itemSlider+=item.clientWidth,0);

    }
    else if(event.target.id ==='backButton'){
        console.log(event.target.id);
        itemContainer.scrollTo(itemSlider-=item.clientWidth,0);

    }
}

indicatorSlider();
setItems();
function setItems(){
    itemsArray.forEach((element,index)=>{
            const itemDiv= document.createElement("div");
            itemDiv.className="container item";
            itemDiv.id = "item"+index;

            const productImageTag = document.createElement("img");
            productImageTag.src=element.productImage;
            productImageTag.alt =element.productName;
            itemDiv.appendChild(productImageTag);


            const itemInfoDiv= document.createElement("div");
            itemInfoDiv.className="container item-info";
            const productNameTag = document.createElement("p");
            productNameTag.className= "product-name";
            productNameTag.textContent =element.productName;
            itemInfoDiv.appendChild(productNameTag);

            const productDiscountTag = document.createElement("p");
            productDiscountTag.className="product-discount";
            productDiscountTag.textContent = element.productDiscount;
            itemInfoDiv.appendChild(productDiscountTag);

            const productPriceTag = document.createElement("p");
            productPriceTag.className ="product-price"; 
            productPriceTag.textContent=element.productPrice;
            itemInfoDiv.appendChild(productPriceTag);

            itemDiv.appendChild(itemInfoDiv);
            itemContainer.appendChild(itemDiv);
    });
    const items = document.querySelectorAll('.item');
    items.forEach((item,index )=> {
        item.addEventListener('click',()=>{
            localStorage.setItem('productID',index+1);
            window.location.href="product_details.html";
        });
    });
}


//Set the EventListener for carousell navigation
function indicatorSlider(){
    indicator.forEach((element,index)=>{
        element.addEventListener('click',()=>clickedHandle(index));
    });
    carousellSlide();
    clickedHandle(carousellPosition);
}
function clickedHandle(index){
    //Get the clicked indicator
    let clickedItem = indicator[index].id;
    carousellPosition = index;

    //Set those other indicators background color to white  
    indicator.forEach(element=>element.style.backgroundColor="#ffffff");
    //Set the clicked indicator to blue
    document.getElementById(clickedItem).style.backgroundColor="#757575";
    
    //Slide the carousell
   sliderPosition(index);

}
function sliderPosition(position){
        
        let childWidth = Number(carousellSlider.clientWidth);
        carousellSlider.scrollTo(childWidth*position,0);
}

function carousellSlide(){

   
    setInterval(()=>{
        
       clickedHandle(carousellPosition);
        //sliderPosition(carousellPosition);
        carousellPosition++;
        if(carousellPosition==5){
            carousellPosition=0;
        }
    },3000);
}
