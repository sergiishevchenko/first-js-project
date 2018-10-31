function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Modal - Узнать больше (табы)
    
    let btn = document.getElementsByClassName('description-btn'),
        over = document.querySelector('.overlay'),
        cross = document.querySelector('.popup-close');

    for (let i = 0; i < 4; i++) {
        
        btn[i].addEventListener('click', function() {
            over.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        cross.addEventListener('click', function() {
            over.style.display = 'none';
            btn[i].classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }
}

module.exports = modal;