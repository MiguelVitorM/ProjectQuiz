const ranking = document.getElementById("containerRank")
const users = JSON.parse(localStorage.getItem('users') ?? '[]')
const tabela = document.createElement('table')

ranking.appendChild(tabela)

const linhaTitulos = document.createElement('thead')

const posicao = document.createElement('th')
posicao.innerHTML = '#'

const nome = document.createElement('th')
nome.innerHTML = 'Nome'

const score = document.createElement('th')
score.innerHTML = 'Pontuação'

linhaTitulos.append(posicao, nome, score)

tabela.appendChild(linhaTitulos)

users.sort((a, b) => b.score - a.score)

let ultimaPosicao = 0

for (let i = 0; i < users.length; i++) {
    const linha = document.createElement('tr')

    const posicao = document.createElement('td')

    if (users[i - 1]?.score != users[i].score) {
        ultimaPosicao++
    }

    posicao.innerHTML = ultimaPosicao

    const username = document.createElement('td')
    username.innerHTML = users[i].username

    const score = document.createElement('td')
    score.innerHTML = users[i].score

    linha.append(posicao, username, score)

    tabela.appendChild(linha)
}   