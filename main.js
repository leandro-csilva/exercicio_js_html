const form = document.getElementById('form-comparar');
let formEValido = false;

form.addEventListener('submit', function(e){
    e.preventDefault();

    var primeiroNumero = document.getElementById('primeiro-numero');
    var segundoNumero = document.getElementById('segundo-numero');
    const mensagemSucesso = `O valor B: <b>${segundoNumero.value}</b> é maior que o valor A: <b>${primeiroNumero.value}</b>`;
    const mensagemErro = `O valor B é menor do que o valor A`

    function validarForm(primeiroNumero, segundoNumero){
        return primeiroNumero.value < segundoNumero.value;
    }

    formEValido = validarForm(primeiroNumero, segundoNumero)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none'

        primeiroNumero.style.border ='';
        segundoNumero.style.border ='';

        primeiroNumero.value = '';
        segundoNumero.value = '';

    } else {
        primeiroNumero.style.border ='1px solid red';
        segundoNumero.style.border ='1px solid red';

        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        document.querySelector('.success-message').style.display = 'none'
    }
})