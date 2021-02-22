// Start the app
var app = {  

    elements: [],

    init: function() {
        console.log('init');

        app.elements.daysEl = document.getElementById('days');
        app.elements.hoursEl = document.getElementById('hours');
        app.elements.minsEl = document.getElementById('mins');
        app.elements.secondsEl = document.getElementById('seconds');

        const newYears = '24 March 2021';

        function countdown() {
            const newYearsDate = new Date(newYears);
            const currentDate = new Date();

            const totalSeconds = (newYearsDate - currentDate) / 1000;

            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const mins = Math.floor(totalSeconds / 60) % 60;
            const seconds = Math.floor(totalSeconds) % 60;

            app.elements.daysEl.innerHTML = days;
            app.elements.hoursEl.innerHTML = hours;
            app.elements.minsEl.innerHTML = mins;
            app.elements.secondsEl.innerHTML = formatTime(seconds);
            
        };

        function formatTime(time) {
            return time < 10 ? (`0${time}`) : time;
        }

        setInterval(countdown, 1000)

    },
    
}

//  We want to start 'init' on the load of each page.
document.addEventListener('DOMContentLoaded', app.init);