const itemsArray=[
    {
        productID:1,
        productName:"Ps2 Controller1", 
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"images/item-image/PS2Console.png",
        productCreator:"BandamCo",
        productReviewsCount:4,
    },
    {
        productID:2,
        productName:"Ps2 Controller2", 
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"images/item-image/ReadDed.png",
        productCreator:"BandamCo",
        productReviewsCount:5,
        
    },
    {
        productID:3,
        productName:"Ps2 Controller3",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"images/item-image/Rectangle 24.png",
        productCreator:"BandamCo",
        productReviewsCount:3,
    },
    {
        productID:4,
        productName:"Ps2 Controller4",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"images/item-image/ps2-controller.png",
        productCreator:"BandamCo",
        productReviewsCount:2,
    },
    {
        productID:5,
        productName:"Ps2 Controller5",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"images/item-image/PS4 Controller.png",
        productCreator:"BandamCo",
        productReviewsCount:5,
    },
    {
        productID:6,
        productName:"Ps2 Controller6",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"images/item-image/Rectangle 25.png",
        productCreator:"BandamCo",
        productReviewsCount:3,
    },
    {
        productID:7,
        productName:"Ps2 Controller7",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"images/item-image/Rectangle 26.png",
        productCreator:"BandamCo",
        productReviewsCount:4,
    },
    {
        productID:8,
        productName:"Ps2 Controller8",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"images/item-image/Rectangle 28.png",
        productCreator:"BandamCo",
        productReviewsCount:4,
    },
    {
        productID:9,
        productName:"Ps2 Controller9",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"images/item-image/Rectangle 29.png",
        productCreator:"BandamCo",
        productReviewsCount:1,
    },
    {
        productID:10,
        productName:"Ps2 Controller10",
        productDiscount:"₱2000",
        productPrice:"₱2000",
        productImage:"images/item-image/p2-controller.png",
        productCreator:"BandamCo",
        productReviewsCount:5,
    }
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
    