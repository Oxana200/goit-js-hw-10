import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector(".form").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            state === "fulfilled" ? resolve(delay) : reject(delay);
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.show({
                title: "✅ OK",
                message: `Fulfilled promise in ${delay}ms`,
                position: "topRight",
                backgroundColor: "#4CAF50",
                titleColor: "#ffffff",
                messageColor: "#ffffff",
                iconUrl: "success-icon.png", // Додай відповідну іконку
                timeout: 5000,
            });
        })
        .catch((delay) => {
            iziToast.show({
                title: "❌ Error",
                message: `Illegal operation`,
                position: "topRight",
                backgroundColor: "#E53935",
                titleColor: "#ffffff",
                messageColor: "#ffffff",
                iconUrl: "error-icon.png",
                timeout: 5000,
            });
        });

    form.reset();
});
