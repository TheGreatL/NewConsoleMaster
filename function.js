const indicator =document.getElementsByClassName("indicator");
const itemContainer =document.getElementsByClassName("item-container")[0];
const carousellSlider = document.getElementById("carousell-slider");
let carousellPosition = 0;
indicatorSlider();
setItems();

function setItems(){
    for(let index=0; index<=5;index++){
    let s=`<div class="container item">
                                        <img src="images/p2-controller.png" alt="">
                                        <div class="container item-info">
                                            <p class="product-name" id="productName">Product Name</p>
                                            <p class="product-discount" id="productDiscount">product Discount</p>
                                            <p class="product-price" id="productPrice">Product Price</p>
                                        </div>
                                    </div>`;

    itemContainer.innerHTML+=s;        
    }                        
}


//Set the EventListener for carousell navigation
function indicatorSlider(){
    console.log(indicator.length);
    for(let index = 0; index< indicator.length;index++){
        //Will Pass the index of clicked navigation
        indicator[index].addEventListener('click', ()=>clickedHandle(index));
       
    }
    carousellSlide();
    clickedHandle(carousellPosition);
}
function clickedHandle(index){
    //Get the clicked indicator
    let clickedItem = indicator[index].id;
    carousellPosition = index;

    //Set those other indicators background color to white
    for(let index = 0; index  < indicator.length;index++){
        indicator[index].style.backgroundColor="#ffffff";
    }
    //Set the clicked indicator to blue
    document.getElementById(clickedItem).style.backgroundColor="#001DB5";
    
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
