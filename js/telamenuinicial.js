document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body');

    main = body.querySelector('main');

    spans = main.querySelectorAll('span');

    agua_set = (localStorage.getItem('agua_bebida')!=null);

    kcal_set = (localStorage.getItem('kcal_consumido')!=null);

    if (!agua_set){
        console.log('teste');
        spans[0].innerHTML = 0;
        spans[1].inerHTML = 2.45;
    }
    else{
        spans[0].innerHTML = parseFloat(localStorage.getItem('agua_bebida')).toFixed(2);
        spans[1].innerHTML = parseFloat(localStorage.getItem('agua_diaria')).toFixed(2);
    }
})