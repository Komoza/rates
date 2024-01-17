// Обработка клика кнопки "выбрать"
const buttonSubmit = document.querySelectorAll('.price__submit');
buttonSubmit.forEach((item) => {
    item.addEventListener('click', () => {
        const cardTitle = item
            .closest('.rates__card')
            .querySelector('.card__title');

        // Не понял как вывести, кинул алерт
        alert(cardTitle.textContent);
    });
});

// Запуск таймера
const deadline = '2024-02-01T14:00:00'; // дата тикает относительно дедлайна

const startTimer = (deadline) => {
    const targetDate = new Date(deadline).getTime();
    const timer = document.querySelector('.timer__time');

    const addLeadingZero = (value) => {
        return value < 10 ? `0${value}` : value;
    };

    const updateTimer = () => {
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;

        if (timeDifference > 0) {
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            const minutes = Math.floor(
                (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const hours = Math.floor(
                (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            timer.textContent = `${addLeadingZero(
                hours + 24 * days
            )}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}
            `;
        } else {
            const buttonSubmitTimer = timer
                .closest('.card')
                .querySelector('.price__submit');
            buttonSubmitTimer.classList.add('black-button--not-active');
            buttonSubmitTimer.disabled = true;

            if (timerInterval) {
                clearInterval(timerInterval);
            }
        }
    };

    updateTimer();
    var timerInterval = setInterval(updateTimer, 1000);
};

startTimer(deadline);

// Запуск эвента с подсказкой
const showHintModal = (item) => {
    const modalHint = item
        .closest('.card__info-wrap')
        .querySelector('.info__modal');
    modalHint.style.display = 'block';
};

const hideHintModal = (item) => {
    const modalHint = item
        .closest('.card__info-wrap')
        .querySelector('.info__modal');
    modalHint.style.display = 'none';
};

const buttonHint = document.querySelectorAll('.info__hint');
buttonHint.forEach((item) => {
    item.addEventListener('mouseover', () => {
        showHintModal(item);
    });
    item.addEventListener('mouseout', () => {
        hideHintModal(item);
    });

    item.addEventListener('focus', () => {
        showHintModal(item);
    });
    item.addEventListener('blur', () => {
        hideHintModal(item);
    });
});
