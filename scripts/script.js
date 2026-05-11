function init() {
    showInformationsOnTheEntireMenu();
};

function showInformationsOnTheEntireMenu() {
    showAllMenuNames();
    showAllMenuPrices();
};

function showAllMenuNames() {
    document.getElementById('meal-category-1-name-1').innerHTML = menu[0]['menu-component-1']['meal-name-1'];
    document.getElementById('meal-category-1-name-2').innerHTML = menu[0]['menu-component-2']['meal-name-2'];
    document.getElementById('meal-category-1-name-3').innerHTML = menu[0]['menu-component-3']['meal-name-3'];
    document.getElementById('meal-category-1-name-4').innerHTML = menu[0]['menu-component-4']['meal-name-4'];
};

function showAllMenuPrices() {
    document.getElementById('meal-category-1-price-1').innerHTML = menu[0]['menu-component-1']['menu-price-1'];
    document.getElementById('meal-category-1-price-2').innerHTML = menu[0]['menu-component-2']['menu-price-2'];
    document.getElementById('meal-category-1-price-3').innerHTML = menu[0]['menu-component-3']['menu-price-3'];
    document.getElementById('meal-category-1-price-4').innerHTML = menu[0]['menu-component-4']['menu-price-4'];
};