function init() {
    showInformationsOnTheEntireMenu();
};

function showInformationsOnTheEntireMenu() {
    showAllMenuNames();
};

function showAllMenuNames() {
    document.getElementById('meal-category-1-name-1').innerHTML = menu[0]['menu-component-1']['meal-name-1'];
    document.getElementById('meal-category-1-name-2').innerHTML = menu[0]['menu-component-2']['meal-name-2'];
    document.getElementById('meal-category-1-name-3').innerHTML = menu[0]['menu-component-3']['meal-name-3'];
    document.getElementById('meal-category-1-name-4').innerHTML = menu[0]['menu-component-4']['meal-name-4'];
};