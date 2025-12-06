document.getElementById("whatsapp-btn").addEventListener("click", function () {
    const phone = "5517988776655"; 
    const message = "";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});
