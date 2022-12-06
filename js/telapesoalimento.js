document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body');

    text = document.querySelector('input[type="text"]');

    confirmar = document.querySelector('p');

    confirmar.addEventListener('click', function(event) {

        peso_alimento = text.value;

        peso_alimento = parseInt(peso_alimento);

        if (Number.isInteger(peso_alimento)){
            localStorage.setItem('peso_alimento', peso_alimento);
            window.location.href = "telaadicionaralimento.html";
        }
        else{
            p = document.createElement('p')
            p.innerHTML = "Atenção! Insira um valor em número para o peso!";
            if (document.querySelectorAll('p').length<3){
                body.append(p);
            }
        }
        
    })
})