document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body');

    main = body.querySelector('main');

    h2 = main.querySelector('h2');

    h3 = main.querySelector('h3');

    spans = main.querySelectorAll('span');

    spans[0].innerHTML = '--';
    spans[1].innerHTML = '--';
    spans[2].innerHTML = '--';
    spans[3].innerHTML = '--';

    alimento_set = (localStorage.getItem('alimento')!=null);

    peso_alimento_set = (localStorage.getItem('peso_alimento')!=null);

    if (alimento_set){
        h2.innerHTML = localStorage.getItem('alimento');
    }
    else{
        h2.innerHTML = '----';
    }

    if (peso_alimento_set){
        peso_alimento = parseInt(localStorage.getItem('peso_alimento'));
        spans[0].innerHTML = peso_alimento;
        spans[1].innerHTML = 0.63*peso_alimento/100;
        spans[2].innerHTML = 7.03*peso_alimento/100;
        spans[3].innerHTML = 0.5*peso_alimento/100;
        kcal = 32*peso_alimento/100;
    }
    else{
        spans[0].innerHTML = '--';
        spans[1].innerHTML = '--';
        spans[2].innerHTML = '--';
        spans[3].innerHTML = '--';
    }

    h3.addEventListener('click', function(event){
        localStorage.setItem('proteinas', parseFloat(localStorage.getItem('proteinas'))+0.63*peso_alimento/100);
        localStorage.setItem('carboidratos', parseFloat(localStorage.getItem('carboidratos'))+7.03*peso_alimento/100);
        localStorage.setItem('gorduras', parseFloat(localStorage.getItem('gorduras'))+0.5*peso_alimento/100);
        localStorage.setItem('kcal_consumido', parseFloat(localStorage.getItem('kcal_consumido'))+kcal);
    })
})