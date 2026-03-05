// ===== EFEITO FOLHAS =====
// Seleciona o botão que vai ativar o efeito
const leafButton = document.getElementById('leafButton');

// Função que cria uma folha na posição do clique (ou posição aleatória)
function criarFolha(x, y) {
    // Cria um elemento <span> que conterá o emoji da folha
    const folha = document.createElement('span');
    
    // Coloca o emoji de folha (pode trocar por 🍂 ou 🌿)
    folha.innerHTML = '🍃';
    
    // Estilos CSS aplicados diretamente para a folha
    folha.style.position = 'fixed';   // fixed em relação à tela
    folha.style.left = x + 'px';
    folha.style.top = y + 'px';
    folha.style.fontSize = Math.random() * 30 + 20 + 'px'; // tamanho entre 20px e 50px
    folha.style.pointerEvents = 'none'; // a folha não atrapalha cliques
    folha.style.zIndex = 9999;
    folha.style.opacity = 1;
    folha.style.transition = 'transform 2s, opacity 2s';
    folha.style.transform = 'rotate(0deg)';
    
    // Adiciona a folha ao corpo da página
    document.body.appendChild(folha);
    
    // Pequeno atraso para a animação começar (força o navegador a aplicar o estado inicial)
    setTimeout(() => {
        // Define uma direção aleatória para a folha voar
        const deltaX = (Math.random() - 0.5) * 300;  // -150 a 150 pixels
        const deltaY = -Math.random() * 300 - 100;    // sobe entre 100 e 400 pixels
        const rotacao = Math.random() * 720 - 360;    // gira entre -360 e 360 graus
        
        folha.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotacao}deg)`;
        folha.style.opacity = 0;  // some no final
    }, 10);
    
    // Remove a folha do DOM depois de 2 segundos (duração da animação)
    setTimeout(() => {
        folha.remove();
    }, 2000);
}

// Função que espalha várias folhas de uma vez
function espalharFolhas(event) {
    // Se o clique veio do botão, podemos pegar a posição do botão
    // ou gerar várias folhas em posições aleatórias próximas ao centro da tela
    const numFolhas = 15;  // quantidade de folhas por clique
    
    for (let i = 0; i < numFolhas; i++) {
        // Posição aleatória em volta do centro da tela (para parecer que saem do botão)
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const offsetX = (Math.random() - 0.5) * 200;  // variação de -100 a 100
        const offsetY = (Math.random() - 0.5) * 200;
        
        criarFolha(centerX + offsetX, centerY + offsetY);
    }
}

// Adiciona o evento de clique no botão
leafButton.addEventListener('click', espalharFolhas);