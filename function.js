

const container =  document.getElementById('imgContainer');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const item_sales = document.getElementById('item-sales');


let currentItemDisplay=0;

nextBtn.addEventListener('click',()=>{
    scrollItem(1);
});
prevBtn.addEventListener('click',()=>{
    scrollItem(0);
});

function scrollItem(btn){
    const item = document.getElementsByClassName('item');
    
    let increment =item[0].clientWidth;
    console.log(increment);
    console.log(currentItemDisplay);
    console.log(item[0].clientWidth * (item.length-4));
    if(currentItemDisplay===0 && btn===0){
        return;
    }
    if(currentItemDisplay>=(item[0].clientWidth * (item.length-4))&&btn===1){
        return;
    }
   
   switch(btn){
    case 1:
        currentItemDisplay+=increment;
        break;
    case 0:
        currentItemDisplay-=increment;
        break;    
   }
  
        item_sales.scrollTo(currentItemDisplay,0);

}

let scrollLenth = container.clientWidth;
setInterval(()=>{
   

    container.scrollTo(scrollLenth,0);
    
    scrollLenth+=container.clientWidth;
   
    if(scrollLenth>=(container.clientWidth*5)){
        scrollLenth= 0;
    }

}
,4000);