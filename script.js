const openOrderModal = () => document.querySelector('#orderModal').style.display = 'block';
const closeOrderModal = () => document.querySelector('#orderModal').style.display = 'none';

window.onclick = (e) => {
    if (e.target == document.querySelector('#orderModal')) closeOrderModal();
};

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    alert('Заказ оформлен! Мы свяжемся с вами в течение 5 минут для подтверждения оплаты и отправки плагина.');
    
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            closeOrderForm();

        }
    });
    
    this.reset();
});