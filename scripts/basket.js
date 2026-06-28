function addBasketItem(basketItemId, countId, mealName, mealPrice, count) {
    const basketBox = document.getElementById('the-basket-list');
    if (!basketBox) return;

    const unitPrice = parsePrice(mealPrice);
    const totalPrice = unitPrice * count;

    basketBox.insertAdjacentHTML('beforeend', `
        <div class="item_in_the_basket" id="${basketItemId}">
            <p class="meal_name">${count} x ${mealName}</p>
            <div class="number_and_price_of_individual_ordered_meals">
                <div class="number_of_individual_ordered_meals">
                    <img src="./img/png/delete.png" alt="">
                    <p id="${countId}">${count}+</p>
                </div>
                <p class="price_of_individual_ordered_meals">${formatPrice(totalPrice)}</p>
            </div>
        </div>
    `);

    updateBasketTotals();
};

function updateBasketItem(basketItem, countId, mealPrice, count) {
    const countElement = document.getElementById(countId);
    if (countElement) {
        countElement.textContent = `${count}+`;
    }

    const mealNameElement = basketItem.querySelector('.meal_name');
    if (mealNameElement) {
        const mealText = mealNameElement.textContent.replace(/^[0-9]+ x\s*/, '');
        mealNameElement.textContent = `${count} x ${mealText}`;
    }

    const mealPriceElement = basketItem.querySelector('.price_of_individual_ordered_meals');
    if (mealPriceElement) {
        const unitPrice = parsePrice(mealPrice);
        const totalPrice = unitPrice * count;
        mealPriceElement.textContent = formatPrice(totalPrice);
    }

    updateBasketTotals();
}

function parsePrice(priceString) {
    const normalized = String(priceString).replace(/[, ]+/g, '.').replace(/[^\d.]/g, '');
    return Number(normalized) || 0;
}

function formatPrice(value) {
    return value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '€';
}

function updateBasketTotals() {
    const basketBox = document.getElementById('the-basket-list');
    if (!basketBox) return;

    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const buyNowButton = document.getElementById('buy-now-button');
    const deliveryFeeElement = document.getElementById('delivery-fee');

    const deliveryFee = deliveryFeeElement ? parsePrice(deliveryFeeElement.textContent) : 0;
    const basketItems = basketBox.querySelectorAll('.item_in_the_basket');

    let subtotal = 0;
    basketItems.forEach(item => {
        const priceElement = item.querySelector('.price_of_individual_ordered_meals');
        if (!priceElement) return;
        subtotal += parsePrice(priceElement.textContent);
    });

    if (subtotalElement) {
        subtotalElement.textContent = formatPrice(subtotal);
    }

    const total = subtotal + deliveryFee;
    const totalText = `Buy now (${formatPrice(total)})`;

    if (totalElement) {
        totalElement.textContent = totalText;
    }

    if (buyNowButton) {
        buyNowButton.textContent = totalText;
    }
}

function setupDeleteMealBasketBox() {
    const basketBox = document.getElementById('the-basket-list');
    if (!basketBox) return;
    basketBox.onclick = basketBoxRemove;

    function basketBoxRemove(event) {
        const target = event.target;
        if (target.tagName === 'IMG') {
            const item = target.closest('.item_in_the_basket');
            if (!item) return;

            const match = item.id.match(/^meal-basket-box-(\d+)$/);
            if (match) {
                const buttonNumber = match[1];
                const addToBasketButton = document.getElementById(`add-to-basket-${buttonNumber}`);
                if (addToBasketButton) {
                    addToBasketButton.disabled = false;
                    addToBasketButton.dataset.count = 0;
                    addToBasketButton.textContent = 'Add to basket';
                    addToBasketButton.classList.remove('orange_text');
                }
            }
            item.remove();
        }
    }
};