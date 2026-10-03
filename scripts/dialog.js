const dialog = document.getElementById('basket-dialog');
const basketButton = document.getElementById('basket-button');

basketButton.onclick = () => {
    dialog.showModal();
};

/*dialog.querySelector("button.close").oncklick = () => {
    dialog.close();
};*/