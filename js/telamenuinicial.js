document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body');

    main = body.querySelector('main');

    spans = main.querySelectorAll('span');

    peso_set = (localStorage.getItem('peso')!=null);

    agua_set = (localStorage.getItem('agua_bebida')!=null);

    kcal_set = (localStorage.getItem('kcal_consumido')!=null);

    if (!agua_set){
        spans[0].innerHTML = 0;
    }
    else{
        spans[0].innerHTML = parseFloat(localStorage.getItem('agua_bebida')).toFixed(2);
    }

    if (!kcal_set){
        spans[2].innerHTML = 0;
    }
    else{
        spans[2].innerHTML = parseFloat(localStorage.getItem('kcal_consumido')).toFixed(0);
    }

    if (!peso_set){
        spans[1].inerHTML = 2.45;
        spans[3].inerHTML = 2216;
    }
    else{
        spans[1].innerHTML = parseFloat(localStorage.getItem('agua_diaria')).toFixed(2);
        spans[3].innerHTML = parseFloat(localStorage.getItem('kcal_diario')).toFixed(0);
    }
})