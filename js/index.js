function verificarDados(){
    let nomeStyle = document.querySelector("input[name='nome']")
    let nomeCompleto = document.querySelector("input[name='nome']").value;
    let emailStyle = document.querySelector("input[name='email']");
    let email = document.querySelector("input[name='email']").value;
    let telefoneStyle = document.querySelector("input[name='telefone']");
    let telefone = document.querySelector("input[name='telefone']").value;
    let mensagemStyle = document.querySelector("textarea[name='mensagem']");
    let mensagem = document.querySelector("textarea[name='mensagem']").value;

    let errorText1 = document.querySelector("span[name='errorText1']");
    let errorText2 = document.querySelector("span[name='errorText2']");
    let errorText3 = document.querySelector("span[name='errorText3']");
    let errorText4 = document.querySelector("span[name='errorText4']");

    if (nomeCompleto===""){
        nomeStyle.style.border = '1px #F52E2E solid'
        errorText1.innerHTML = 'campo obrigatório'
    } else{
        nomeStyle.style.border = '1px #00C22B solid'
        errorText1.innerHTML = ''
    }
    if (email===""){
        emailStyle.style.border = '1px #F52E2E solid'
        errorText2.innerHTML = 'campo obrigatório'
    } else{
        emailStyle.style.border = '1px #00C22B solid'
        errorText2.innerHTML = ''
    }
    if (telefone===""){
        telefoneStyle.style.border = '1px #F52E2E solid'
        errorText3.innerHTML = 'campo obrigatório'
    } else{
        telefoneStyle.style.border = '1px #00C22B solid'
        errorText3.innerHTML = ''
    }
    if (mensagem===""){
        mensagemStyle.style.border = '1px #F52E2E solid'
        errorText4.innerHTML = 'campo obrigatório'
    } else{
        mensagemStyle.style.border = '1px #00C22B solid'
        errorText4.innerHTML = ''
    }
}
