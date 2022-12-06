document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body')

    main = body.querySelector('main')

    spans = main.querySelectorAll('span')

    if (spans[0].innerHTML == "0" && localStorage.getItem("flag_agua") == "false"){
        spans[1].innerHTML = parseFloat(localStorage.getItem("agua_diaria")).toFixed(3)
        localStorage.setItem("agua_bebida", 0)
    }
    else{
        agua_bebida = localStorage.getItem("agua_bebida")
        spans[0].innerHTML = agua_bebida
        spans[1].innerHTML = parseFloat(localStorage.getItem("agua_diaria") - agua_bebida).toFixed(3)
    }

    if (parseFloat(spans[1].innerHTML) <= 0){
        window.location.href = "telaaguacompleta.html";
    }
})