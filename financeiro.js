document.addEventListener("DOMContentLoaded", function(){

    emailjs.init({
        publicKey: "7nGeNQ8UlprINdB4K"
    });

    const formulario =
    document.getElementById("formulario-financeiro");

    formulario.addEventListener("submit", function(event){

        event.preventDefault();

        emailjs.send(
            "service_zra3dss",
            "template_2e4xcwi",
            {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                empresa: document.getElementById("empresa").value,
                assunto: document.getElementById("assunto").value,
                mensagem: document.getElementById("mensagem").value
            }
        )

        .then(function(){

            window.location.href =
            "obrigado-financeiro.html";

        })

        .catch(function(error){

    console.error("ERRO COMPLETO:", error);

    alert(
        "Erro: " +
        JSON.stringify(error)
    );

});

    });

});