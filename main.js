const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    let nomeComoArray = nomeCompleto.trim().split(' ');
    for (let i = 0; i < nomeComoArray.length; i++) {
        if (nomeComoArray[i].length >= 3) { 
            break;
        } else {
            return false;
        }
    }
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.succes-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        // alert(mensagemSucesso);

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } /* else {
            document.querySelector('.error-message').style.display = 'block';
            nomeBeneficiario.style.border = '2px solid rgb(194, 6, 6)'
            // alert("O nome não está completo");
    } */
})

nomeBeneficiario.addEventListener('change', function(e) { // OU 'keyup', para respostas imediatas do teclado
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        // nomeBeneficiario.style.border = '2px solid rgb(194, 6, 6)';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        nomeBeneficiario.style = '';
        document.querySelector('.error-message').style.display = 'none';
    }
})

// console.log(form)

// * O form tem o problema de aceitar um espaço em branco como 'sobrenome'.