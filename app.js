import { dados } from './dados.js';

export function pesquisar() {
     const termoBusca = document.querySelector('.search-input').value.trim();
     const resultadosDiv = document.getElementById('search-result');

    // Limpa os resultados anteriores
    resultadosDiv.innerHTML = "";

    // Verifica se o termo de busca está vazio
     if (!termoBusca) {
         resultadosDiv.innerHTML = '<p class="error">Por favor, digite um termo de busca.</p>';
      return;
     }

    // Filtra os resultados com base no termo de busca
    const resultados = dados.filter(dado => 
        dado.name.toLowerCase().includes(termoBusca.toLowerCase()) ||
        dado.description.toLowerCase().includes(termoBusca.toLowerCase()) ||
        dado.language.toLowerCase().includes(termoBusca.toLowerCase())
    );
     

    // // Exibe os resultados ou mensagem de "não encontrado"
     if (resultados.length === 0) {
         resultadosDiv.innerHTML = '<p class="error">Nenhum resultado encontrado.</p>';
     } else {
        resultados.forEach(resultado => {
            const p = document.createElement('p');
            p.innerHTML = `<br>${resultado.name}<br>${resultado.language}<br>${resultado.description}`;
            resultadosDiv.appendChild(p);
        });
    }

}
export function listar() {
    const resultadosDiv = document.getElementById('search-result');

    resultadosDiv.innerHTML = "";

    if (dados.length === 0) {
        resultadosDiv.innerHTML = '<p class="error">Nenhum resultado encontrado.</p>';
    } else {
        dados.forEach(dado => {
            const p = document.createElement('p');
            p.innerHTML = `<br>${dado.name}<br>${dado.language}<br>${dado.description}`;
            resultadosDiv.appendChild(p);
        });
    }
}


window.pesquisar = pesquisar;
window.listar = listar;
