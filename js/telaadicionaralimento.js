document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body');

    main = body.querySelector('main');

    h2 = main.querySelector('h2');

    alimento_set = (localStorage.getItem('alimento')!=null);

    if (alimento_set){
        h2.innerHTML = localStorage.getItem('alimento');
    }
    else{
        console.log('nao');
    }
})