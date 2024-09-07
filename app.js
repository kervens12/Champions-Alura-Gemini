function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta, time ou grupo.</p>";
        return;
    }

    let resultados = "";
    
    // Percorre todos os grupos de times da Champions League
    for (let grupo of timesChampions) {
        let tituloGrupo = grupo.titulo.toLowerCase();
        let descricaoGrupo = grupo.descricao.toLowerCase();

        // Verifica se o grupo corresponde à pesquisa
        if (tituloGrupo.includes(campoPesquisa) || descricaoGrupo.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado">
                <h2>${grupo.titulo}</h2>
                <p class="descricao-meta">${grupo.descricao}</p>
                <ul>`;
            
            // Adiciona todos os times do grupo
            for (let time of grupo.times) {
                resultados += `<li>
                    <a href="${time.link}" target="_blank">${time.nome} (${time.pais}) - Títulos: ${time.tituloChampions}</a>
                </li>`;
            }
            
            resultados += `</ul></div>`;
        }

        // Pesquisa nos times de cada grupo
        for (let time of grupo.times) {
            let nomeTime = time.nome.toLowerCase();
            let paisTime = time.pais.toLowerCase();

            if (nomeTime.includes(campoPesquisa) || paisTime.includes(campoPesquisa)) {
                resultados += `<div class="item-resultado">
                    <h2>${time.nome}</h2>
                    <p class="descricao-meta">País: ${time.pais} | Títulos da Champions: ${time.tituloChampions}</p>
                    <a href="${time.link}" target="_blank">Mais Informações</a>
                </div>`;
            }
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado!</p>";
    }

    section.innerHTML = resultados;
}
