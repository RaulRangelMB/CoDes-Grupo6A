document.addEventListener('DOMContentLoaded', function() {

    main = document.querySelector('main')

    h3 = main.querySelector('h3')

    span = main.querySelector('span')

    peso = localStorage.getItem('peso')

    localStorage.setItem("flag_agua", false)

    if (peso != null) {

        h3.innerHTML = peso

        agua_diaria = peso*0.035;

        localStorage.setItem("agua_diaria",agua_diaria)

        span.innerHTML = agua_diaria.toFixed(2)
    }
})
