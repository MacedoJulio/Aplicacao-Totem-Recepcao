// ===============================
// QR CODE
// ===============================

function abrirQRCode() {
    const modal = document.getElementById("modalQR");
    if (modal) {
        modal.style.display = "flex";
    }
}

function fecharQRCode() {
    const modal = document.getElementById("modalQR");
    if (modal) {
        modal.style.display = "none";
    }
}

// ===============================
// BLOQUEIOS
// ===============================

document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "u")
    ) {
        e.preventDefault();
    }
});

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});