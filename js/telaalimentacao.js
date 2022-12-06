document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body');

    main = body.querySelector('main');

    spans = main.querySelectorAll('span');

    spans[0].innerHTML = '--';
    spans[1].innerHTML = '--';
    spans[2].innerHTML = '--';
    spans[3].innerHTML = '--';

    proteinas_set = (localStorage.getItem('proteinas')!=null);

    if (proteinas_set){
        spans[0].innerHTML = parseFloat(localStorage.getItem('proteinas')).toFixed(2);
        spans[1].innerHTML = parseFloat(localStorage.getItem('carboidratos')).toFixed(2);
        spans[2].innerHTML = parseFloat(localStorage.getItem('gorduras')).toFixed(2);
        spans[3].innerHTML = parseFloat(localStorage.getItem('kcal_consumido')).toFixed(0);
    }
    else{
        localStorage.setItem("proteinas", 0);
        localStorage.setItem("carboidratos", 0);
        localStorage.setItem("gorduras", 0);
        localStorage.setItem("kcal_consumido", 0);
    }
})