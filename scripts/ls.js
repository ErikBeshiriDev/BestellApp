function initLS() {
    basket = JSON.parse(localStorage.getItem('menuElements')) || [];
    console.log("Warenkorb geladen:", basket);
} 

function saveToLocalStorage() {
    localStorage.setItem('menuElements', JSON.stringify(basket));
}

function onClickAddToBasket(params) {
    const { basketItemId, countId, mealName, mealPrice, addCount } = params;
    addToBasketElements = { basketItemId, countId, mealName, mealPrice, addCount };

    const existingItem = basket.find(item => item.basketItemId === basketItemId);

    if (existingItem) {
        existingItem.addCount += Number(addCount);
    } else {
        basket.push({
            basketItemId,
            countId,
            mealName,
            mealPrice,
            addCount: Number(addCount)
        });
    }

    saveToLocalStorage();
    console.log("Aktueller Warenkorb", basket);
}

addRegisterItemSelection(event, params) {
    const button = event.target.closest('.menuElements');
    if (!button) return;

    const itemId = button.dataset.id;

    const countInput = document.getElementById(`add-to-basket-${itemId}`);
    const countValue = countInput ? countInput.value : 1;

    const params = {
        basketItemId: itemId,
        countId: `add-to-basket-${addCount}`,
        mealName: button.dataset.name,
        mealPrice: Number(button.dataset.price),
        addCount: countValue
    };

    onClickAddToBasket(params);
}