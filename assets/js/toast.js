function Toast({
    type = '',
    message = '',
    duration = 4000,
}) {
    const main = document.querySelector('#toast');
    const isToast = document.querySelector('#toast .toast');
    const delay = (duration / 1000).toFixed(2);
    
    const icon = {
        info: '<ion-icon name="information-circle-outline"></ion-icon>',
        success: '<ion-icon name="checkmark-circle-outline"></ion-icon>',
        error: '<ion-icon name="alert-circle-outline"></ion-icon>',
    };

    isToast&&isToast.remove();
    if (main) {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.style.animation = `show-toast .4s forwards, hidden-toast .4s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="icon icon-${type}">
                ${icon[type]}
            </div>
            <div class="msg">${message}</div>
        `;
        main.insertBefore(toast, main.childNodes[0]);
        setTimeout(() => {
            main.removeChild(toast);
        }, duration + 1000);
    }
}