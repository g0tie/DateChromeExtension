document.addEventListener('DOMContentLoaded', function() {
    const tdate = document.querySelector(".tdate");
    const clock = document.querySelector(".clock");
    const days = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
    ];
    const months = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
    ];

    function checkZeros(i)
    {
        if (i < 10) {
            i = "0" + i;
        }

        return i;
    }

    function getDate()
    {
        let date = new Date();
        let day_nb = date.getDate();
        let month_nb = date.getMonth();
        let day_index = date.getDay();
        let year_label = date.getFullYear();

        day_label = days[day_index];
        month_label = months[month_nb];

        tdate.innerHTML = `${day_label} ${checkZeros(day_nb)} ${month_label} ${year_label}`
    }

    function setClock()
    {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        hours = checkZeros(h);
        minutes = checkZeros(m);
        seconds = checkZeros(s);

        clock.innerHTML = hours + ":" + minutes + ":" + seconds;
    }

    setClock();
    getDate();
    setInterval(setClock, 1000);
});