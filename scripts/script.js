function init() {
    showInformationsOnTheEntireMenu();
    setupDeleteMealBasketBox();
    initLS();
};

function showInformationsOnTheEntireMenu() {
    for (let a = 0; a < menu.length; a++) {
        for (let b = 1; b <= 4; b++) {
            const context = allFirstConstLines(a, b);
            menuInsertingIntoTheIDs(a, b, context);
        }
    }
};

function allFirstConstLines(a, b) {
    const htmlNameId = `meal-category-${a + 1}-name-${b}`;
    const htmlPriceId = `meal-category-${a + 1}-price-${b}`;
    const htmlDescriptionId = `meal-category-${a + 1}-meal-description-${b}`;
    const componentKey = `menu-component-${b}`;
    const nameKey = `meal-name-${b}`;
    const priceKey = `meal-price-${b}`;
    const ingredientKey = `meal-ingredients-${b}`;
    const nameElement = document.getElementById(htmlNameId);
    const priceElement = document.getElementById(htmlPriceId);
    const descriptionElement = document.getElementById(htmlDescriptionId);
    return { componentKey, nameKey, priceKey, ingredientKey, nameElement, priceElement, descriptionElement };
};

function menuInsertingIntoTheIDs(a, b, context) {
    const { componentKey, nameKey, priceKey, ingredientKey,
        nameElement, priceElement, descriptionElement } = context;
    const component = menu[a][componentKey];
    if (!component) return;
    const nameData = component[nameKey];
    const priceData = component[priceKey];
    const ingredientData = component[ingredientKey];
    if (nameElement) nameElement.innerHTML = nameData || '';
    if (priceElement) priceElement.innerHTML = priceData || '';
    if (descriptionElement) descriptionElement.innerHTML = ingredientData || '';
};

function addToBasket(element) {
    const buttonNumber = element.id.split('-').pop();
    const mealComponent = element.closest('.meal_component');
    const mealHeadings = mealComponent?.querySelectorAll('.meal_component_text_top h3');
    const mealName = mealHeadings?.[0]?.textContent?.trim() || 'Meal name';
    const mealPrice = mealHeadings?.[1]?.textContent?.trim() || 'Price€';
    const basketItemId = `meal-basket-box-${buttonNumber}`;
    const countId = `meals-count-${buttonNumber}`;

    let addCount = Number(element.dataset.count || 0) + 1;
    element.dataset.count = addCount;
    element.textContent = `Added ${addCount}`;
    element.classList.add('orange_text');

    const basketZone = document.querySelector('.your_basket_zone');
    if (!basketZone.classList.contains('aktiv')) {
        basketZone.classList.add('aktiv');
    }

    const existingItem = document.getElementById(basketItemId);
    if (existingItem) {
        updateBasketItem(existingItem, countId, mealPrice, addCount);
        return;
    }

    addBasketItem(basketItemId, countId, mealName, mealPrice, addCount);
};