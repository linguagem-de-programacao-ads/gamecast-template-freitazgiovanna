async function cadastrarAgenda() {
    const nomeDigitado = document.getElementById("nomeJogo").value;
    const dataDigitada = document.getElementById("dataJogo").value;
    const descricaoDigitada = document.getElementById("descricao").value;
    const gamersDigitados = document.getElementById("gamers").value;
    const urlImagemDigitada = document.getElementById("urlImagem").value;
    const urlLiveDigitada = document.getElementById("urlLive").value;


    const dadosAgenda = {
        nome: nomeDigitado,
        dataJogo: dataDigitada,
        descricao: descricaoDigitada,
        gamers: gamersDigitados.split(","),
        urlImagem: urlImagemDigitada,
        urlLive: urlLiveDigitada
    }

    const respostaCadastro = await fetch("https://660f44b1356b87a55c510dd2.mockapi.io/agendas", {
        method: "POST",
        body: JSON.stringify(dadosAgenda),
        headers: {
            "Content-type": "application/json ; charset=UTF-8"
        }
    });

    if (respostaCadastro.status === 201) {
        window.location.href = "agenda.html";
    } else {
        alert("Erro ao cadastrar agenda");
    }
}