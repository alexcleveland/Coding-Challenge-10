document.addEventListener(`DOMContentLoaded`,() => {
    const sizeSelector =document.getElementById(`size-selector`);
    const productPrice = document.getElementById(`product-price`);
    const purchaseButton =document.getElementById(`Purchase-button`);

    sizeSelector.addEventListener(`change`, () => {
        const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
        const newPrice = selectedOption.getattribute(`data-price`);
        const stockStatus = selectedOption.getattribute(`data-stock`);

        productPrice.textContent=`$${newPrice}`;
        if(stockStatus === `out-of-stock`){
            purchaseButton.disabled = true;
        }else{
            purchaseButton.disabled =false;
        }
    });
});

purchaseButton.addEventListener(`click`, () => {
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
    const stockStatus = selectedOption.getattribute(`data-stock`);
    if (stockStatus === `in-stock`) {
        alert(`Thank you for shopping with us!!!`);
    } else {
        alert(`Sorry for the inconvinece this is out of stock :(`);
    }
    
});