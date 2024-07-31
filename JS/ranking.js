const ranking = document.getElementById("containerRank");
const users = JSON.parse(localStorage.getItem('users') ?? '[]');
const tabela = document.createElement('table');

ranking.appendChild(tabela);

// Create the table header
const linhaTitulos = document.createElement('thead');
const headerRow = document.createElement('tr');

const posicaoHeader = document.createElement('th');
posicaoHeader.innerHTML = 'Posição';

const nomeHeader = document.createElement('th');
nomeHeader.innerHTML = 'Nome';

const scoreHeader = document.createElement('th');
scoreHeader.innerHTML = 'Pontuação';

headerRow.append(posicaoHeader, nomeHeader, scoreHeader);
linhaTitulos.appendChild(headerRow);

tabela.appendChild(linhaTitulos);

// Create the table body
const tabelaBody = document.createElement('tbody');
tabela.appendChild(tabelaBody);

// Sort users by score in descending order
users.sort((a, b) => b.score - a.score);

// Initialize ranking position
let ultimaPosicao = 1;

for (let i = 0; i < users.length; i++) {
    const linha = document.createElement('tr');

    // Create and fill position cell with degree symbol
    const posicaoCell = document.createElement('td');
    if (i > 0 && users[i].score < users[i - 1].score) {
        ultimaPosicao = i + 1;
    }
    posicaoCell.innerHTML = ultimaPosicao + '°';

    // Create and fill username cell
    const usernameCell = document.createElement('td');
    usernameCell.innerHTML = users[i].username;

    // Create and fill score cell
    const scoreCell = document.createElement('td');
    scoreCell.innerHTML = users[i].score;

    linha.append(posicaoCell, usernameCell, scoreCell);
    tabelaBody.appendChild(linha);
}