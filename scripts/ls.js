let basket = [];

function loadBasketFromStorage() {
    try {
        const storedBasket = localStorage.getItem('menuElements');
        if (!storedBasket) return [];

        const parsedBasket = JSON.parse(storedBasket);
        return Array.isArray(parsedBasket) ? parsedBasket : [];
    } catch (error) {
        console.warn('LocalStorage konnte nicht gelesen werden:', error);
        return [];
    }
}

function initLS() {
    basket = loadBasketFromStorage();
    renderBasketFromStorage();
    console.log('Warenkorb geladen:', basket);
}

function saveToLocalStorage() {
    try {
        localStorage.setItem('menuElements', JSON.stringify(basket));
    } catch (error) {
        console.warn('LocalStorage konnte nicht gespeichert werden:', error);
    }
}

function renderBasketFromStorage() {
    const basketBox = document.getElementById('the-basket-list');
    if (!basketBox) return;

    basketBox.innerHTML = '';

    if (!basket.length) {
        const basketZone = document.querySelector('.your_basket_zone');
        if (basketZone) basketZone.classList.remove('aktiv');
        updateBasketTotals();
        return;
    }

    basket.forEach((item) => {
        const basketItemId = item.basketItemId;
        const countId = item.countId || `meals-count-${basketItemId.split('-').pop()}`;
        const addCount = Number(item.addCount || 0);

        const button = document.getElementById(`add-to-basket-${basketItemId.split('-').pop()}`);
        if (button) {
            button.dataset.count = addCount;
            button.textContent = `Added ${addCount}`;
            button.classList.add('orange_text');
        }

        addBasketItem(basketItemId, countId, item.mealName, item.mealPrice, addCount);
    });

    const basketZone = document.querySelector('.your_basket_zone');
    if (basketZone) basketZone.classList.add('aktiv');
    updateBasketTotals();
}

function onClickAddToBasket(params) {
    const { basketItemId, countId, mealName, mealPrice, addCount } = params;
    const increment = Number(addCount) || 1;

    const existingItem = basket.find(item => item.basketItemId === basketItemId);

    if (existingItem) {
        existingItem.addCount = Number(existingItem.addCount || 0) + increment;
        existingItem.countId = countId;
        existingItem.mealName = mealName;
        existingItem.mealPrice = mealPrice;
    } else {
        basket.push({
            basketItemId,
            countId,
            mealName,
            mealPrice,
            addCount: increment
        });
    }

    saveToLocalStorage();
    renderBasketFromStorage();
    console.log('Aktueller Warenkorb', basket);
}

function addRegisterItemSelection(event, params) {
    const button = event.target.closest('.menuElements');
    if (!button) return;

    const itemId = button.dataset.id;
    const countInput = document.getElementById(`add-to-basket-${itemId}`);
    const countValue = countInput ? Number(countInput.value) || 1 : 1;

    const itemParams = {
        basketItemId: `meal-basket-box-${itemId}`,
        countId: `meals-count-${itemId}`,
        mealName: button.dataset.name,
        mealPrice: Number(button.dataset.price),
        addCount: countValue
    };

    onClickAddToBasket(itemParams);
}