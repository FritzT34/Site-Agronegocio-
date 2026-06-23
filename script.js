// Aguarda o HTML ser completamente carregado antes de aplicar as funções
document.addEventListener('DOMContentLoaded', () => {
    
    const btnTodos = document.getElementById('btn-todos');
    const btnFamiliar = document.getElementById('btn-familiar');
    const btnAgronegocio = document.getElementById('btn-agronegocio');
    const cards = document.querySelectorAll('.card');

    // Função interna para aplicar a lógica do filtro
    function filtrarConteudo(tipo, botaoAtivo) {
        // Remove a classe 'ativo' de todos os botões de filtro
        const botoes = document.querySelectorAll('.btn');
        botoes.forEach(btn => btn.classList.remove('ativo'));
        
        // Adiciona a classe 'ativo' apenas ao botão clicado
        botaoAtivo.classList.add('ativo');

        // Exibe ou oculta os cards baseando-se no tipo selecionado
        cards.forEach(card => {
            const cardTipo = card.getAttribute('data-tipo');
            if (tipo === 'todos' || cardTipo === tipo) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Atribui os escutadores de eventos de clique para cada botão
    btnTodos.addEventListener('click', (event) => {
        filtrarConteudo('todos', event.target);
    });

    btnFamiliar.addEventListener('click', (event) => {
        filtrarConteudo('familiar', event.target);
    });

    btnAgronegocio.addEventListener('click', (event) => {
        filtrarConteudo('agronegocio', event.target);
    });
});
