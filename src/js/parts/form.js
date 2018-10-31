function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4 ) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++){
            input[i].value = '';
        }
    });

    // Form for contacts

    let messageContact = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let formContact = document.querySelector('.contact-form'),
        inputContact = formContact.getElementsByTagName('input'),
        statusMessageContact = document.createElement('div');
        
        let inputTel = document.getElementsByName('tel')[0];
        let inputTelTwo = document.getElementsByName('phone')[0];

            inputTel.addEventListener('input', function () {
                this.value = this.value.replace(/[^0-9+]/, '');
            });

            inputTelTwo.addEventListener('input', function () {
                this.value = this.value.replace(/[^0-9+]/, '');
            });

        statusMessageContact.classList.add('status');

    formContact.addEventListener('submit', function(event) {
        event.preventDefault();
        formContact.appendChild(statusMessageContact);

        let requestContact = new XMLHttpRequest();
        requestContact.open('POST', 'server.php');
        requestContact.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formDataContact = new FormData(formContact);

        for (let i = 0; i < inputContact.length; i++) {
            formDataContact.append(inputContact[i].getAttribute('name'), inputContact[i].value);
        }

        let objContact = {};
        formDataContact.forEach(function(value, key) {
            objContact[key] = value;
        });

        let jsonContact = JSON.stringify(objContact);

        requestContact.send(jsonContact);

        requestContact.addEventListener('readystatechange', function() {
            if (requestContact.readyState < 4 ) {
                statusMessageContact.innerHTML = messageContact.loading;
            } else if (requestContact.readyState === 4 && requestContact.status == 200) {
                statusMessageContact.innerHTML = messageContact.success;
            } else {
                statusMessageContact.innerHTML = messageContact.failure;
            }
        });

        for (let i = 0; i < inputContact.length; i++){
            inputContact[i].value = '';
        }
    });
}

module.exports = form;