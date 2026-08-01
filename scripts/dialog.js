const basketDialog = document.getElementById('basket-dialog');

function initBasketDialog() {
    if (!basketDialog) return;

    basketDialog.addEventListener('click', (event) => {
        if (event.target === basketDialog) {
            closeBasketDialog();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && basketDialog.open) {
            closeBasketDialog();
        }
    });
}

function openBasketDialog() {
    if (!basketDialog) return;

    if (window.innerWidth <= 349) {
        if (!basketDialog.open) {
            basketDialog.showModal();
        }
    }
}

function closeBasketDialog() {
    if (!basketDialog) return;

    if (basketDialog.open) {
        basketDialog.close();
    }
}

function showDialog() {
    if (window.innerWidth <= 349) {
        openBasketDialog();
    } else {
        closeBasketDialog();
    }
}

function toggleBasketDialog() {
    if (!basketDialog) return;

    if (basketDialog.open) {
        closeBasketDialog();
    } else {
        openBasketDialog();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBasketDialog);
} else {
    initBasketDialog();
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 349 && basketDialog?.open) {
        closeBasketDialog();
    }
});