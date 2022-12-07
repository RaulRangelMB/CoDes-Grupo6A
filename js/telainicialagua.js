document.addEventListener('DOMContentLoaded', function() {

    main = document.querySelector('main');

    h3 = main.querySelector('h3');

    span = main.querySelector('span');

    peso = localStorage.getItem('peso');

    if (peso != null) {

        h3.innerHTML = peso;

        agua_diaria = peso*0.035;

        kcal_diario = peso*2216/70;

        localStorage.setItem("agua_diaria",agua_diaria);

        localStorage.setItem("kcal_diario",kcal_diario);

        span.innerHTML = agua_diaria.toFixed(2);
    }
    else{
        agua_diaria = 70*0.035;

        kcal_diario = 70*2216/70;

        localStorage.setItem("agua_diaria",agua_diaria);

        localStorage.setItem("kcal_diario",kcal_diario);
    }
})
