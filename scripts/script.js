function init() {
    showInformationsOnTheEntireMenu();
};

function showInformationsOnTheEntireMenu() {
    for (let a = 0; a < menu.length; a++) {
        for (let b = 1; b <= 4; b++) {
            const context = allConstLines(a, b);
            menuInsertingIntoTheIDs(a, b, context);
        }
    }
};

function allConstLines(a, b) {
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
}

function addToBasket(element) {
    const addedIntoTheBasket = 'Added 1';
    element.innerHTML = addedIntoTheBasket;
    element.classList.add('orange_text');
};
