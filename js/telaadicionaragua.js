document.addEventListener('DOMContentLoaded', function() {

    body = document.querySelector('body')

    text = document.querySelector('input[type="text"]')

    confirmar = document.querySelector('p')

    confirmar.addEventListener('click', function(event) {

        agua = text.value

        agua = parseInt(agua)

        console.log(agua)

        if (Number.isInteger(agua)){
            agua_bebida = parseFloat(localStorage.getItem('agua_bebida'))
            agua_bebida += agua*0.001
            localStorage.setItem('agua_bebida', agua_bebida)
            localStorage.setItem("flag_agua", true)
            console.log(agua_bebida)
            window.location.href = "telanotificacaoagua.html";
        }
        else{
            p = document.createElement('p')
            p.innerHTML = "Atenção! Insira um valor em número para o peso!"
            if (document.querySelectorAll('p').length<4){
                body.append(p)  
            }
        }
        
    })
})