document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body');

    text = document.querySelector('input[type="text"]');

    confirmar = document.querySelector('p');

    confirmar.addEventListener('click', function(event) {

        peso = text.value;

        peso = parseInt(peso);

        if (Number.isInteger(peso)){
            localStorage.setItem('peso', peso);
            window.location.href = "telaintroducaoagua.html";
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