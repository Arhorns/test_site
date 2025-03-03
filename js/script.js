// Фон с сердечками
function createHearts() {
    const heartContainer = document.createElement('div');
    heartContainer.className = 'heart-bg';
    
    for(let i = 0; i < 50; i++) {
        const heart = document.createElement('span');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heartContainer.appendChild(heart);
    }
    document.body.prepend(heartContainer);
}

// Адаптация календаря
function initCalendar() {
    const calendar = document.getElementById('calendar');
    const weddingDate = new Date(2024, 5, 11);
    const daysInMonth = new Date(2024, 6, 0).getDate();
    
    let html = '';
    const firstDay = new Date(2024, 5, 1).getDay();
    for(let i = 0; i < firstDay; i++) {
        html += `<div class="day empty"></div>`;
    }

    for(let day = 1; day <= daysInMonth; day++) {
        const isWeddingDay = day === 11;
        html += `
            <div class="day ${isWeddingDay ? 'heart-date' : ''}">
                ${isWeddingDay ? '<div class="heart-animation">11</div>' : day}
            </div>
        `;
    }
    calendar.innerHTML = html;
}

// Адаптивное меню
function initMobileMenu() {
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '☰';
    document.body.prepend(menuButton);

    menuButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('menu-open');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    initCalendar();
    initMobileMenu();
});
// Анимация финальной секции
function initFinalAnimation() {
    const decorElements = document.querySelectorAll('.final-decor span');
    decorElements.forEach((el, index) => {
        el.style.animationDelay = index * 0.3 + 's';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // ... предыдущий код ...
    initFinalAnimation();
});