function init() {
    showInformationsOnTheEntireMenu();
};

function showInformationsOnTheEntireMenu() {
    for (let a = 0; a < menu.length; a++) {
        for (let b = 1; b <= 4; b++) {

            const htmlNameId = `meal-category-${a + 1}-meal-name-${a}`
            const htmlPriceId = `meal-category-${a + 1}-meal-price-${a}`
            const htmlDescriptionId = `meal-category-${a + 1}-meal-description-${a}`

            const componentKey = `menu-compotent-${b}`
            const nameKey = `meal-name-${b}`
            const priceKey = `meal-price-${b}`
            const ingredientKey = `meal-ingredients-${b}`

            const nameElement = document.getElementById(htmlNameId);
            const priceElement = document.getElementById(htmlPriceId);
            const descriptionElement = document.getElementById(htmlDescriptionId);

            const component = menu[a][componentKey];
            if (!component) countinue;

            const name = component[nameKey];
            const price = component[priceKey];
            const ingredient = component[ingredientKey];



            if (nameElement) nameElement.innerHTML = nameData || '';
            if (priceElement) priceElement.innerHTML = priceData || '';
            if (descriptionElement) descriptionElement.innerHTML = ingredientData || '';
        }
    }
};