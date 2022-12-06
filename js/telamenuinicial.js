document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body');

    main = body.querySelector('main');

    spans = main.querySelectorAll('span');

    agua_set = (localStorage.getItem('agua_bebida')!=null);

    kcal_set = (localStorage.getItem('kcal_consumido')!=null);

    if (!agua_set){
        console.log('agua nao set')
        spans[0].innerHTML = 0;
        spans[1].inerHTML = 2.45;
    }
    else{
        console.log('agua set')
        spans[0].innerHTML = parseFloat(localStorage.getItem('agua_bebida')).toFixed(2);
        spans[1].innerHTML = parseFloat(localStorage.getItem('agua_diaria')).toFixed(2);
    }

    if (!kcal_set){
        console.log('kcal nao set')
        spans[2].innerHTML = 0;
        spans[3].inerHTML = 2216;
    }
    else{
        console.log('kcal set')
        spans[2].innerHTML = parseFloat(localStorage.getItem('kcal_consumido')).toFixed(0);
        spans[3].innerHTML = parseFloat(localStorage.getItem('kcal_diario')).toFixed(0);
    }
})