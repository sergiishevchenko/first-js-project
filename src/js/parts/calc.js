function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('input', function() {
            this.value = this.value.replace(/\D/ig, '');
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000*place.options[place.selectedIndex].value;

            if (restDays.value == '' || persons.value == '' || persons.value == '0' || restDays.value == '0') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;                
            }
        });

        restDays.addEventListener('input', function() {
            this.value = this.value.replace(/\D/ig, '');
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000*place.options[place.selectedIndex].value;

            if (persons.value == '' || restDays.value == '' || restDays.value == '0' || persons.value == '0') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;                
            }
        });

        place.addEventListener('input', function() {
            if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        });
}

module.exports = calc;