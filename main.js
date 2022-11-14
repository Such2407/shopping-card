// show cart
const mainAmount = document.querySelector(".main-amount");
(function(){
 const cartInfo = document.querySelector(".cart-info");
 const cart = document.querySelector(".cart");
 
 cartInfo.addEventListener("click", function(){
    cart.classList.toggle("show-cart");
 })



})();

// add items to the card
(function(){
    const cartBtn = document.querySelectorAll(".inner-cart-icon");
    cartBtn.forEach(function(btn){
        btn.addEventListener("click", function(event){

            // console.log(event.target);
            if(event.target.parentElement.classList.contains("inner-cart-icon")){
                  let fullPath = event.target.parentElement.parentElement.firstElementChild.src;
                //   console.log(fullPath);
                  let pos = fullPath.indexOf("pictures") ;
                //   console.log(pos);
                let partPath =fullPath.slice(pos)
                // console.log(partPath);
                const item ={};
                item.pictures = `${partPath}`;
                let itemName = event.target.parentElement.previousElementSibling.children[0].textContent;
                let itemPrice = event.target.parentElement.previousElementSibling.children[1].textContent;
                // console.log(itemName);
                // console.log(itemPrice);
                item.itemName=itemName;
                item.itemPrice=itemPrice;
                // console.log(item);
                const cardItem = document.createElement("div");
                cardItem.classList.add("row","cart-bg");
                cardItem.innerHTML=`
                    <div class="col2">
                        <img src="${item.pictures}" class="col-img" alt="">
                    </div>
                    <div class="col2 cnt">
                        <div class="cart-item-name">${item.itemName}</div>
                        <div class="price">${item.itemPrice}</div>
                    </div>
                    <div class="col2">
                    <img src="pictures/icons8-trash-50.png" class="cartIcon delete" alt="">
                    </div>`;
                    const cart = document.querySelector(".cart");
                    const total = document.querySelector(".total");
                    // console.log(cardItem);
                    cart.insertBefore(cardItem, total);
                    alert("you have add one item")

            }
            if(event.target.parentElement.classList.contains("inner-cart-icon")){
                let itemPrice = event.target.parentElement.previousElementSibling.children[1].textContent;
            let itemIndex=itemPrice.indexOf("$")+1;
            let amountSlice=itemPrice.slice(itemIndex);
            const stringNumber =parseInt(mainAmount.textContent);
            const stringNumber2 =parseInt(amountSlice)
            // console.log(stringNumber);
            const payable= stringNumber2 + stringNumber;
            // console.log(payable);
            mainAmount.innerHTML=payable
            }
        });
    });

})();

// cart item delete
(function(){
    const cart = document.querySelector(".cart");
    cart.addEventListener("click", function(event){
        let itemPrice = event.target.parentElement.previousElementSibling.children[1].textContent;
        // console.log(itemPrice);
        let itemIndex=itemPrice.indexOf("$")+1;
        let amountSlice=itemPrice.slice(itemIndex);
        // console.log(amountSlice);
        let me=event.target.classList;
        const cardBody = event.target.parentElement.parentElement;
        if(me.contains("delete")){
            // console.log(cardBody);
        cardBody.innerHTML=""
        mainAmount.innerHTML-= amountSlice
        }
        else{
            return
        }
        
        
    })


})();

// payment
(function(){
    const chechBox = document.querySelector(".check");
    const pay = document.querySelector(".send");
    chechBox.addEventListener("click", function(event){
        pay.classList.toggle("add-pay")
       
    })


})();
