const questoes = [
    {
        enunciado: 'QUEM FOI O FILÓSOFO AUTOR DA FRASE SÓ SEI QUE NADA SEI?',
        alternativas: {
            a: 'Platão',
            b: 'Tales de Mileto',
            c: 'Sócrates',
            d: 'Pitágoras'
        },
        resposta: 'c'
    },
    {
        enunciado: 'QUAL A MOEDA USADA NO PARAGUAI?',
        alternativas: {
            a: 'Peso paraguaio',
            b: 'Dolar Americano',
            c: 'Bolíviar Paraguaio',
            d: 'Novo Sol'
        },
        resposta: 'B'
    },
    {
        enunciado: 'QUAL O JOGADOR QUE MARCOU UM GOL DE MÃO NA FINAL DE UMA COPA DO MUNDO?',
        alternativas: {
            a: 'Zinedine Zidane',
            b: 'Ruud Gullit',
            c: 'Lionel Messi',
            d: 'Diego Maradona'
        },
        resposta: 'd'
    },
    {
        enunciado: 'QUAL O PAÍS DE ORIGEM DA EMPRESA DE ELETRÔNICOS NOKIA?',
        alternativas: {
            a: 'Filândia',
            b: 'Estados Unidos',
            c: 'Japão',
            d: 'Coreia do Sul'
        },
        resposta: 'a'
    },
    {
        enunciado: 'QUAL FOI O MAIOR IMPÉRIO EM NÍVEL TERRITORIAL NA HISTÓRIA DO MUNDO?',
        alternativas: {
            a: 'Imperio Romano',
            b: 'Imperio Egípcio',
            c: 'Imperio Mongol',
            d: 'Imperio Britânico'
        },
        resposta: 'c'
    },
    {
        enunciado: 'QUAL É A CAPITAL DO CANADÁ?',
        alternativas: {
            a: 'Ottawa',
            b: 'Toronto',
            c: 'Vancouver',
            d: 'Montreal'
        },
        resposta: 'a'
    },
    {
        enunciado: 'QUAL A DATA QUE FOI LANÇADO O FACEBOOK?',
        alternativas: {
            a: '28 de julho de 2006',
            b: '4 de julho de 2006',
            c: '11 de setembro de 2001',
            d: '4 de fevereiro de 2004'
        },
        resposta: 'd'
    },
    {
        enunciado: 'QUAL A UNIDADE DE MEDIDA DA FÍSICA É O PADRÃO PARA PESOS?',
        alternativas: {
            a: 'Quilos',
            b: 'Newton',
            c: 'Gramas',
            d: 'Toneladas'
        },
        resposta: 'b'
    },
    {
        enunciado: 'O QUE PRODUZ UM REATOR DE BIOMASSA?',
        alternativas: {
            a: 'Produção de gás natural e etanol',
            b: 'Produção de bio-óleo, biochar e Gases',
            c: 'Produção de plástico e energia renovável',
            d: 'Produção de calcário e cimento'
        },
        resposta: 'b'
    },
    {
        enunciado: 'QUAL O ANIMAL NACIONAL DA ESCÓCIA?',
        alternativas: {
            a: 'Vaca',
            b: 'Cavalo',
            c: 'Unicórcio',
            d: 'Dragrão'
        },
        resposta: 'c'
    },
    {
        enunciado: 'QUEM DESCOBRIU O BRASIL?',
        alternativas: {
            a: 'Cristóvão Colombo',
            b: 'Dom Pedro 1 ',
            c: 'Pero Vaz de Caminha',
            d: 'Pedro Álvares Cabral'
        },
        resposta: 'd'
    },
    {
        enunciado: 'EM QUE ANO O PRIMEIRO SATÉLITE FOI LANÇADO?',
        alternativas: {
            a: '4 de outubro de 1957',
            b: '7 de dezembro de 1956',
            c: '14 de março de 1955',
            d: '27 de Novembro de 1961'
        },
        resposta: 'a'
    },
    {
        enunciado: 'QUEM COSTRUIU A ARCA? ',
        alternativas: {
            a: 'Abraão',
            b: 'Noé',
            c: 'Moisés',
            d: 'Jesus'
        },
        resposta: 'b'
    },
    {
        enunciado: 'O TOMATE É UMA? ',
        alternativas: {
            a: 'Fruta',
            b: 'Legume',
            c: 'Vegetal',
            d: 'Fruto'
        },
        resposta: 'd'
    },
    {
        enunciado: 'COM QUANTOS GRAUS A AGUA FERVE? ',
        alternativas: {
            a: '208,4°F',
            b: '50°F',
            c: '50°C',
            d: '212°F'
        },
        resposta: 'd'
    },
    {
        enunciado: 'QUAL PAÍS SEDIOU A COPA DE 2018? ',
        alternativas: {
            a: 'Turquia',
            b: 'Russia',
            c: 'Qtar',
            d: 'Cataquistão'
        },
        resposta: 'a'
    },
    {
        enunciado: 'QUAL É O TRIÂNGULO QUE TEM TODOS OS LADOS DIFERENTES? ',
        alternativas: {
            a: 'Equilátero',
            b: 'Isóceles',
            c: 'Escaleno',
            d: 'Trapézio'
        },
        resposta: 'c'
    },
    {
        enunciado: 'QUAL O COLETIVO DE CÃES? ',
        alternativas: {
            a: 'Matilha',
            b: 'Rebanho',
            c: 'Alcatéia',
            d: 'Manada'
        },
        resposta: 'a'
    },
    {
        enunciado: 'EM QUE PAÍS NASCEU CARMEM MIRANDA? ',
        alternativas: {
            a: 'Brasil',
            b: 'Espanha',
            c: 'Portugual',
            d: 'Argentina'
        },
        resposta: 'c'
    },
    {
        enunciado: 'QUAL MONTANHA SE LOCALIZA ENTRE A FRONTEIRA DO TIBET COM O NEPAL? ',
        alternativas: {
            a: 'Monte Carlo',
            b: 'Everest',
            c: 'Monte Fuji',
            d: 'Monte Branco'
        },
        resposta: 'b'
    },
    {
        enunciado: 'QUEM É CRIOU A ADMINISTRAÇÃO CIENTÍFICA?',
        alternativas: {
            a: 'Max Weber',
            b: 'Frederick Taylor',
            c: 'Henri Fayol',
            d: 'Abrahan Maslow'
        },
        resposta: 'b'
    },
    {
        enunciado: 'A PIRÂMIDE DE MASLOW É ESCRITA EM QUAL ORDEM DE NECESSIDADES? DA MAIOR NECESSIDADE PARA A MENOR. ',
        alternativas: {
            a: 'Auto-realização, Sociais, Estima, Fisiologicas e Segurança',
            b: 'Estima, Fisiologicas, Auto-realização, Segurança e Sociais.',
            c: 'Fisiologicas, Segurança, Sociais, Estima e Auto-realização.',
            d: 'Auto-realização, Sociais, Segurança, Estima e Fisiologicas'
        },
        resposta: 'c'
    },
    {
        enunciado: 'O BALANÇO PATRIMONIAL SE DIVIDE EM QUANTAS CONTAS?',
        alternativas: {
            a: '1',
            b: '2',
            c: '3',
            d: '4'
        },
        resposta: 'c'
    },
     {
        enunciado: 'A EMPRESA XIRIRICA L.T.D.A COMPROU UM TERRENO NO VALOR DE R$ 100.000,00. ESTE TERRENO NO BALANÇO PATRINONIAL ELE SE TORNA UM:',
        alternativas: {
            a: 'PCLD (Provisão para Crédito de Liquidação duvidosa) ',
            b: 'Passivo Não-circulante',
            c: 'Ativo Não Circulante',
            d: 'Patrimônio líquido'
        },
        resposta: 'c'
    },
    {
        enunciado: 'QUAL É O MODAL MAIS UTILIZADO NO BRASIL? ',
        alternativas: {
            a: 'Modal Ferroviário',
            b: 'Modal Rodoviário',
            c: 'Modal aéreo',
            d: 'Modal Dutoviário'
        },
        resposta: 'b'
    },
]


const displayQuestionDiv = document.getElementById('display-question')
const indice = Math.floor(Math.random() * questoes.length)
const questao = questoes[indice]

proximaQuestao()

function proximaQuestao (){
    const enunciado = document.createElement('h4')
    
    enunciado.innerHTML = questao.enunciado
    enunciado.className = ''
    
    displayQuestionDiv.appendChild(enunciado)

    const alternativasLista = document.createElement('ol')
   alternativasLista.id = "gamebutton"
    displayQuestionDiv.appendChild(alternativasLista)
 
    for(const alternativa in questao.alternativas ){
        const item = document.createElement('li')
        item.innerText = questao.alternativas[alternativa]
        item.className = "alternativa"
        item.setAttribute('type','A')
        item.setAttribute('data-key',alternativa)
        item.addEventListener('click', () =>verificarResposta(item, alternativa))
        alternativasLista.appendChild(item)
    }

}

function verificarResposta(item, alternativa) {
    const respostaCorreta = questao.resposta.toLowerCase()

    if (alternativa === respostaCorreta) {
        item.classList.add('correta')
    } else {
        item.classList.add('incorreta')
    }

    const alternativas = document.querySelectorAll('.alternativa')
    alternativas.forEach(alt => {
        alt.removeEventListener('click', verificarResposta)
        if (alt.getAttribute('data-key') !== respostaCorreta) {
            alt.classList.add('incorreta')
        } else {
            alt.classList.add('correta')
        }
    })
}