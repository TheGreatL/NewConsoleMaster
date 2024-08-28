const itemsArray=[
    {productID:1,productName:"Ps2 Controller1", productDiscount:"P2000",productPrice:"P2000",productImage:"images/item-image/PS2Console.png"},
    {productID:2,productName:"Ps2 Controller2", productDiscount:"P2000",productPrice:"P2000",productImage:"images/item-image/ReadDed.png"},
    {productID:3,productName:"Ps2 Controller3", productDiscount:"P2000",productPrice:"P2000",productImage:"images/item-image/Rectangle 24.png"},
    {productID:4,productName:"Ps2 Controller4", productDiscount:"P2000",productPrice:"P2000",productImage:"images/item-image/ps2-controller.png"},
    {productID:5,productName:"Ps2 Controller5", productDiscount:"P2000",productPrice:"P2000",productImage:"images/item-image/PS4 Controller.png"},
    {productID:6,productName:"Ps2 Controller6", productDiscount:"P2000",productPrice:"P2000",productImage:"images/item-image/Rectangle 25.png"},
    {productID:7,productName:"Ps2 Controller7", productDiscount:"P2000",productPrice:"P2000",productImage:"images/item-image/Rectangle 26.png"},
    {productID:8,productName:"Ps2 Controller8", productDiscount:"P2000",productPrice:"P2000",productImage:"images/item-image/Rectangle 28.png"},
    {productID:9,productName:"Ps2 Controller9", productDiscount:"P2000",productPrice:"P2000",productImage:"images/item-image/Rectangle 29.png"},
    {productID:10,productName:"Ps2 Controller10",productDiscount:"P2000",productPrice:"P2000",productImage:"images/item-image/p2-controller.png"}
    ];
  
 export   function getItem(productID){
      return itemsArray.find(item=>{
          return item.productID===productID;
      }); 
  
      }
      export function getAllItems(){
          return itemsArray;
      }
      export function getItemSize(){
      return itemsArray.length;
  }    
    