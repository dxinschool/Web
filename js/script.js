const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const darkModeButton = document.querySelector("button.dark-mode-button");
const body = document.body;

btn.addEventListener("click", () => {
    menu.classList.toggle("open");
});

document.querySelectorAll('.mobile-menu a, .md\\:flex a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
        menu.classList.remove('open');
    });
});

darkModeButton.addEventListener("click", () => {
    body.classList.add("transition");
    body.classList.toggle("dark-mode");
    const icon = darkModeButton.querySelector("i");
    if (body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
    setTimeout(() => {
        body.classList.remove("transition");
    }, 500);
});

window.addEventListener('DOMContentLoaded', () => {
    const locationTimeElement = document.getElementById('location-time');
    function updateLocationTime() {
        const date = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Hong_Kong',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        locationTimeElement.textContent = date;
    }

    setInterval(updateLocationTime, 1000);
    updateLocationTime();
});

window.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('ur-time');
    const timezoneOffset = new Date().getTimezoneOffset();
    const offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
    const offsetMinutes = Math.abs(timezoneOffset % 60);
    const offsetSign = timezoneOffset < 0 ? "+" : "-";
    const formattedOffset = `[GMT${offsetSign}${offsetHours}]`;

    function updateTime() {
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString();
        timeElement.textContent = formattedTime;
    }

    updateTime();
    setInterval(updateTime, 1000);
});

function calculateCountdown() {
    var currentDate = new Date();
    var birthdayDate = new Date("January 20, " + currentDate.getFullYear() + " 00:00:00 GMT+0800");
    var oneDay = 24 * 60 * 60 * 1000;

    if (currentDate.toDateString() === birthdayDate.toDateString()) {
        document.getElementById("birthday-countdown").textContent = "Right Today!";
    } else {
        if (currentDate > birthdayDate) {
            birthdayDate.setFullYear(currentDate.getFullYear() + 1);
        }

        var daysRemaining = Math.round((birthdayDate - currentDate) / oneDay);
        var hours = Math.floor((birthdayDate - currentDate) % oneDay / (1000 * 60 * 60));
        var minutes = Math.floor((birthdayDate - currentDate) % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor((birthdayDate - currentDate) % (1000 * 60) / 1000);

        document.getElementById("birthday-countdown").textContent = "Birthday In " + daysRemaining + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
    }
}

setInterval(calculateCountdown, 1000);