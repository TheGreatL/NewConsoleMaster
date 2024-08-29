import {getItem,getItemSize,getAllItems} from './items.js'
const selectedItem = getItem(Number(localStorage.getItem('productID')));
console.log(selectedItem);
// const productname =document.createElement('p');
// productname.textContent = ""+localStorage.getItem('productName');
//     // document.body.appendChild(v);
//     document.body.append(productname);

// const productDiscount =document.createElement('p');
// productDiscount.textContent = ""+localStorage.getItem('productDiscount');
//     // document.body.appendChild(v);
//     document.body.append(productDiscount);
    
// const productPrice =document.createElement('p');
// productPrice.textContent = ""+localStorage.getItem('productPrice');
//     document.body.append(productPrice);
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
    // document.body.appendChild(v);
   