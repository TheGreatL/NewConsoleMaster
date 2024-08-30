import {getItem,getItemSize,getAllItems} from './items.js'
const selectedItem = getItem(Number(localStorage.getItem('productID')));
console.log(selectedItem);

const productName = document.getElementById('productName');
productName.textContent = selectedItem.productName;   

const productImg = document.getElementById('productImage');
productImg.src = selectedItem.productImage;
productImg.alt = selectedItem.productName;

const otherItemPicture = document.querySelectorAll('.other-item-picture');
otherItemPicture.forEach(picture=>{
    picture.src = selectedItem.productImage;
    picture.alt = selectedItem.productName;
    
});
const productCreator = document.getElementById('creator');
productCreator.textContent = selectedItem.productCreator;

const productReviews =document.getElementById('reviewsIcon');
for(let index= 0;index<selectedItem.productReviewsCount;index++){
    productReviews.textContent+=' ⭐ ';
}
productReviews.textContent+=`${selectedItem.productReviewsCount} Reviews`;
    // document.body.appendChild(v);
const productGameKey = document.getElementById('stockId');
productGameKey.textContent =`GameKey: ${selectedItem.productID}`;   

const productPrice =document.getElementById('price');
productPrice.textContent=`Price: ${selectedItem.productPrice}`;

const quantity = document.getElementById('quantity');
const quantityButtons = document.querySelectorAll('.quantityButton');
quantityButtons.forEach(button=>{
    button.addEventListener('click',event=>{
        
        if(event.target.textContent==='+')
            quantity.textContent++;
        
        // Minus Button
        else{
            //If lower or equal to 0, do nothing
            if(quantity.textContent<=0){
                return;
            }
            quantity.textContent--;
        } 

    });
});
const description = document.getElementById('description');
description.textContent = selectedItem.productDescription;
