document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body');

    main = body.querySelector('main');

    h3s = main.querySelectorAll('h3');

    h3s[0].addEventListener('click', function(event){
        localStorage.setItem('alimento', 'Arroz');
        window.location.href = "telaadicionaralimento.html";
    })
    h3s[1].addEventListener('click', function(event){
        localStorage.setItem('alimento', 'Feijão');
        window.location.href = "telaadicionaralimento.html";
    })
    h3s[2].addEventListener('click', function(event){
        localStorage.setItem('alimento', 'Ovo');
        window.location.href = "telaadicionaralimento.html";
    })  
    h3s[3].addEventListener('click', function(event){
        localStorage.setItem('alimento', 'Banana');
        window.location.href = "telaadicionaralimento.html";
    })
    h3s[4].addEventListener('click', function(event){
        localStorage.setItem('alimento', 'Bife');
        window.location.href = "telaadicionaralimento.html";
    })

})