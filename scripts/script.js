function init() {
    showInformationsOnTheEntireMenu();
};

function showInformationsOnTheEntireMenu() {
    for (let a = 0; a < menu.length; a++) {
        for (let b = 1; b <= 4; b++) {

            const htmlNameId = `meal-category-${a + 1}-name-${b}`
            const htmlPriceId = `meal-category-${a + 1}-price-${b}`
            const htmlDescriptionId = `meal-category-${a + 1}-meal-description-${b}`

            const componentKey = `menu-component-${b}`
            const nameKey = `meal-name-${b}`
            const priceKey = `meal-price-${b}`
            const ingredientKey = `meal-ingredients-${b}`

            const nameElement = document.getElementById(htmlNameId);
            const priceElement = document.getElementById(htmlPriceId);
            const descriptionElement = document.getElementById(htmlDescriptionId);

            const component = menu[a][componentKey];
            if (!component) continue;

            const nameData = component[nameKey];
            const priceData = component[priceKey];
            const ingredientData = component[ingredientKey];

            if (nameElement) nameElement.innerHTML = nameData || '';
            if (priceElement) priceElement.innerHTML = priceData || '';
            if (descriptionElement) descriptionElement.innerHTML = ingredientData || '';
        }
    }
};