document.addEventListener("DOMContentLoaded", function(){

    emailjs.init({
        publicKey: "CTNrbRgcNZtyavprL",
    });

    console.log("SCRIPT FUNCIONANDO");

    const formulario = document.getElementById("formulario");

    console.log(formulario);

    formulario.addEventListener("submit", function(event){

        event.preventDefault();

        emailjs.send(
            "service_10kebji",
            "template_8fkez0i",
            {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                empresa: document.getElementById("empresa").value,
                mensagem: document.getElementById("mensagem").value
            }
        )

        .then(function(response){

            console.log("SUCESSO", response);

            alert("Mensagem enviada!");

            formulario.reset();

            window.location.href = "obrigado.html";

        })

        .catch(function(error){

            console.log("ERRO COMPLETO:", error);

            alert("Erro: " + JSON.stringify(error));

        });

    });

});