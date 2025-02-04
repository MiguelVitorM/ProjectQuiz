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
        enunciado: 'QUAL É A TEMPERATURA QUE A ÁGUA FERVE? ',
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
            c: 'Catar',
            d: 'Cataquistão'
        },
        resposta: 'b'
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
        enunciado: 'QUEM CRIOU A ADMINISTRAÇÃO CIENTÍFICA?',
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
    {
        enunciado: 'QUANDO FOI O ANO DO TETRA CAMPEÃO DO BRASIL? ',
        alternativas: {
            a: '1994',
            b: '1998',
            c: '1970',
            d: '2002'
        },
        resposta: 'a'
    },
    {
        enunciado: 'QUANDO ACONTECEU O ATENTADO DAS TORRES GÊMEAS EM NOVA YORK? ',
        alternativas: {
            a: '10 de Setembro de 2000',
            b: '11 de Setembro de 2011',
            c: '10 de Setembro de 2003',
            d: '11 de Setembro de 2001'
        },
        resposta: 'd'
    },
    {
        enunciado: 'QUAL É O RESULTADO DA EXPRESSÃO NUMÉRICA: 2 + 3 + 2 x 5 + 1 =, (DE ACORDO COM A REGRA MATEMÁTICA)? ',
        alternativas: {
            a: '36',
            b: '20',
            c: '16',
            d: '35'
        },
        resposta: 'c'
    },
    {
        enunciado: 'QUAL É O MAIOR OSSO DO CORPO HUMANO? ',
        alternativas: {
            a: 'Rádio',
            b: 'Costela',
            c: 'Fíbula',
            d: 'Fêmur'
        },
        resposta: 'd'
    },
    {
        enunciado: 'QUAL FOI O ANO QUE O TITANIC FOI AFUNDADO? ',
        alternativas: {
            a: '1912',
            b: '1913',
            c: '1014',
            d: '1915'
        },
        resposta: 'a'
    },
    {
        enunciado: 'QUAL FOI O PRIMEIRO PRESIDENTE DO BRASIL? ',
        alternativas: {
            a: 'Getulio Vargas',
            b: 'João Goulart',
            c: 'Deodoro da Fonseca',
            d: 'Floriano Peixoto'
        },
        resposta: 'c'
    },
    {
        enunciado: 'EM QUE ANO COMEÇOU A GUERRA FRIA? ',
        alternativas: {
            a: '1945',
            b: '1946',
            c: '1947',
            d: '1948'
        },
        resposta: 'c'
    },
    {
        enunciado: 'QUAL É A PARTE DO CORPO HUMANO É RESPONSÁVEL PELO OLFATO? ',
        alternativas: {
            a: 'Nariz',
            b: 'Olho',
            c: 'Língua',
            d: 'Dedos'
        },
        resposta: 'a'
    },
    {
        enunciado: 'QUAL É O ANO QUE SURGIU O PONTO CIDADÃO? ',
        alternativas: {
            a: '2001',
            b: '2002',
            c: '2003',
            d: '2004'
        },
        resposta: 'd'
    },
    {
        enunciado: 'QUAL É A CIDADE CONSIDERADA A VENEZA BRASILEIRA? ',
        alternativas: {
            a: 'Gramado',
            b: 'São Paulo',
            c: 'Rio de Janeiro',
            d: 'Recife'
        },
        resposta: 'd'
    },
    {
        enunciado: 'QUAL FOI O ANO QUE ACONTECEU A REVOLUÇÃO PERNAMBUCANA? ',
        alternativas: {
            a: '1817',
            b: '1822',
            c: '1827',
            d: '1835'
        },
        resposta: 'a'
    },
    {
        enunciado: 'QUAL É O NOME DO CANTOR QUE É CONSIDERADO O REI DO BREGA? ',
        alternativas: {
            a: 'Roberto Carlos',
            b: 'Alceu Valença',
            c: 'Geraldo Azevedo',
            d: 'Reginaldo Rossi'
        },
        resposta: 'd'
    },
    {
        enunciado: 'QUAL É O RESULTADO DA RAIZ QUADRADA DE 121? ',
        alternativas: {
            a: '10',
            b: '11',
            c: '12',
            d: '13'
        },
        resposta: 'b'
    },
    {
        enunciado: 'QUAL É O MAIOR BIOMA BRASILEIRO? ',
        alternativas: {
            a: 'Amazônia',
            b: 'Cerrado',
            c: 'Mata Atlantica',
            d: 'Caatinga'
        },
        resposta: 'a'
    },
    {
        enunciado: 'QUAL É O ANO QUE IGARASSU-PE FOI TORNADO MUNICÍPIO AUTÔNOMO? ',
        alternativas: {
            a: '1892',
            b: '1893',
            c: '1894',
            d: '1895'
        },
        resposta: 'b'
    },
    {
        enunciado: 'QUAL É O RESULTADO DE: 2² + 2³ = ? ',
        alternativas: {
            a: '4',
            b: '6',
            c: '12',
            d: '16'
        },
        resposta: 'c'
    },
    {
        enunciado: 'QUAIS AS MODALIDADES QUE É CONSIDERADO RELAÇÃO DE EMPREGO? ',
        alternativas: {
            a: 'Onerosidade, impessoalidade, obrigação, Pessoal Jurídica, Alteridade',
            b: 'Onerosidade,Pessoalidade, Subordinação,Não-Eventualide',
            c: 'Salário, Onerosidade, Subordinação, Eventualidade',
            d: 'Impessoalidade, Não-Subordinação, Não-eventualidade, Onerosidade'
        },
        resposta: 'b'
    },
    {
        enunciado: 'DAS PALAVRAS ABAIXO QUAL DELAS É UMA LINGUAGEM DE PROGRAMAÇÃO? ',
        alternativas: {
            a: 'SiseScript',
            b: 'JavaScript',
            c: 'CiterScript',
            d: 'TatyScript'
        },
        resposta: 'b'
    },
    {
        enunciado: 'QUANDO FOI LANÇADO O PRIMEIRO FILME DA FRANQUIA VINGADORES? ',
        alternativas: {
            a: '2010',
            b: '2011',
            c: '2012',
            d: '2014'
        },
        resposta: 'c'
    },
    {
        enunciado: 'QUEM FOI O PRIMEIRO HOMEM A IR A LUA? ',
        alternativas: {
            a: 'Michael Collins',
            b: 'Neil Armstrong',
            c: 'Pete Conrad',
            d: 'Alan Bean'
        },
        resposta: 'b'
    },
    {
        enunciado: 'QUAL É A REDE SOCIAL MAIS USADA NO MUNDO EM  2023? ',
        alternativas: {
            a: 'Facebook',
            b: 'Youtube',
            c: 'Instagram',
            d: 'WhatsApp'
        },
        resposta: 'a'
    },
    {
        enunciado: 'QUANTOS PAÍSES EXISTEM ATUALMENTE NO CONTINENTE AFRICANO? ',
        alternativas: {
            a: '50',
            b: '51',
            c: '53',
            d: '54'
        },
        resposta: 'd'
    },
    {
        enunciado: 'QUEM É O PRESIDENTE DO MÉXICO EM 2024? ',
        alternativas: {
            a: 'Andrés Manuel López Obrador',
            b: 'Joseph Robinette',
            c: 'Vladimir Vladimirovitch Putin',
            d: 'LULA'
        },
        resposta: 'a'
    },
    {
        enunciado: 'Qual a soma de todos os números de um dado? ',
        alternativas: {
            a: '20',
            b: '21',
            c: '22',
            d: '23'
        },
        resposta: 'b'
    },
    {
        enunciado: 'QUANTOS ESTADOS EXISTEM NO BRASIL? ',
        alternativas: {
            a: '25',
            b: '26',
            c: '27',
            d: '28'
        },
        resposta: 'c'
    },
    {
        enunciado: 'QUAL É A CAPITAL DA NOVA ZELÂNDIA? ',
        alternativas: {
            a: 'Washignton',
            b: 'Abuja',
            c: 'Nepiedó',
            d: 'Wellington'
        },
        resposta: 'd'
    },
    {
        enunciado: 'O QUE SIGNIFICA O NOME DA CIDADE DE ITAMARACÁ ? ',
        alternativas: {
            a: 'Pedra que canta',
            b: 'Pedra no mar',
            c: 'Ilha que canta',
            d: 'Ilha que canta'
        },
        resposta: 'a'
    },
    {
        enunciado: 'SE UM CARRO ESTÁ ANDANDO A 100 KM/H, QUANTOS KM ELE PERCORRERÁ EM 1 HORA ? ',
        alternativas: {
            a: '50 KM',
            b: '100 KM',
            c: '150 KM',
            d: '200 KM'
        },
        resposta: 'b'
    },
    {
        enunciado: 'COMPLETE A SEQUÊNCIA: 1, 2, 4, 8, 16, ...? ',
        alternativas: {
            a: '18',
            b: '24',
            c: '30',
            d: '32'
        },
        resposta: 'd'
    },
    {
        enunciado: 'QUAL É A CAPITAL DO PARANÁ ? ',
        alternativas: {
            a: 'Curitiba',
            b: 'Florianopolis',
            c: 'Cuiabá',
            d: 'Rio Branco'
        },
        resposta: 'a'
    },
    {
        enunciado: 'QUAL É A IGREJA MAIS ANTIGA DO BRASIL? ',
        alternativas: {
            a: 'Basílica da Nossa Senhora do Carmo, Recife-PE',
            b: 'Convento Santo Antonio, Igarassu-PE',
            c: 'Igreja Nossa Senhora de Fátima, OLinda-PE',
            d: 'Igreja Dos Santos Cosme e Damião, Igarassu-PE'
        },
        resposta: 'd'
    },
    {
        enunciado: 'QUAL ANO SURGIU O WHATSAPP? ',
        alternativas: {
            a: '2009',
            b: '2010',
            c: '2011',
            d: '2012'
        },
        resposta: 'a'
    },
    {
        enunciado: 'QUEM FOI A PRIMEIRA EMISSORA DO BRASIL? ',
        alternativas: {
            a: 'TV Globo',
            b: 'TV Tupi',
            c: 'TV Record',
            d: 'TV Excelsior'
        },
        resposta: 'b'
    },
    {
    enunciado: 'QUAL É O NOME VERDADEIRO DE SILVIO SANTOS? ',
    alternativas: {
        a: 'José Abelardo Barbosa de Medeiros,',
        b: 'Senor Abravanel',
        c: 'Silvio Santos Abravanel',
        d: 'Ronaldo Paixão'
    },
    resposta: 'b'
}
]
let questaoAtual = 0;
const limiteQuestoes = 10;
const tempoInicial = 20;
let tempoID;
let questaoRespondida = false;
let totalCorreto = 0;
let questaoRestante = [...questoes];
let score = 100;
let tempoTotalGasto = 0; // Irá armazenar o tempo total gasto em respostas corretas
let tempoInicio; // Variável para armazenar o tempo de início de cada pergunta


const displayQuestionDiv = document.getElementById('display-question');
const contadorDiv = document.getElementById('contador');
const contagemQuestao = document.getElementById('contagemQuestao');
const loginModal = document.getElementById('loginModal')
const closeModal = document.getElementById('closeModal')
const loginForm = document.getElementById('loginForm')

function iniciarQuiz() {
    questaoAtual = 0;
    questaoRestante = [...questoes];
    totalCorreto = 0;
    tempoTotalGasto = 0; // Reinicia o tempo total gasto
    displayQuestionDiv.innerHTML = "";
    contadorDiv.innerHTML = "";
    
    proximaQuestao();
}

function proximaQuestao() {
    if (questaoAtual >= limiteQuestoes || questaoRestante.length === 0) {
        let points = (totalCorreto + tempoTotalGasto) * 10 


        displayQuestionDiv.innerHTML = `<h4>Quiz Concluído! <br> Acertos ${totalCorreto}/10 <br> Total de ponto ${points}</h4>`;
        contadorDiv.innerHTML = "";
       
        const botaoInicio = document.createElement('button');
        botaoInicio.className = "buttonNext";
        botaoInicio.innerText = "Jogar Novamente?";
        botaoInicio.addEventListener('click', iniciarQuiz);
        displayQuestionDiv.appendChild(botaoInicio);
        
        
       
        const botaoPontuacao = document.createElement('button');
        botaoPontuacao.className = "buttonNext";
        botaoPontuacao.innerText = "Salvar Pontuação?";
        botaoPontuacao.addEventListener('click', abrirModal);
        displayQuestionDiv.appendChild(botaoPontuacao)
        return;
    }


    questaoRespondida = false;
    displayQuestionDiv.innerHTML = "";

    const indiceAleatorio = Math.floor(Math.random() * questaoRestante.length);
    const questao = questaoRestante[indiceAleatorio];
    questaoRestante.splice(indiceAleatorio, 1);

    const enunciado = document.createElement('h4');
    enunciado.innerHTML = questao.enunciado;
    displayQuestionDiv.appendChild(enunciado);

    const alternativasLista = document.createElement('ol');
    alternativasLista.id = "gamebutton";
    displayQuestionDiv.appendChild(alternativasLista);

    for (const alternativa in questao.alternativas) {
        const item = document.createElement('li');
        item.innerText = questao.alternativas[alternativa];
        item.className = "alternativa";
        item.setAttribute('type', 'A');
        item.setAttribute('data-key', alternativa);
        alternativasLista.appendChild(item);
        item.addEventListener('click', (event) => verificarResposta(event, alternativa, questao));
    }

    questaoAtual++;
    tempoInicio = new Date(); // Serve para pegar o tempo de início da pergunta
    temporizador(tempoInicial);

    let con = document.createElement('p');
    con.id = "contagemQuest";
    con.innerText = `Questão ${questaoAtual}/10`;
    displayQuestionDiv.appendChild(con);
}

function verificarResposta(event, alternativa, questao) {
    if (questaoRespondida) return;
    questaoRespondida = true;

    clearTimeout(tempoID); // Para o temporizador

    const item = event.target;
    const respostaCorreta = questao.resposta.toLowerCase();

    const tempoFim = new Date();
    const tempoGasto = Math.floor((tempoFim - tempoInicio) / 1000); // Calcula o tempo gasto em segundos
    const tempoRestante = tempoInicial - tempoGasto; // Calcula o tempo restante

    if (alternativa === respostaCorreta) {
        item.classList.add('correta');
        totalCorreto++;
        tempoTotalGasto += tempoRestante; // Soma o tempo restante apenas se a resposta estiver correta
    } else {
        item.classList.add('incorreta');
    }

    const alternativas = document.querySelectorAll('.alternativa');
    alternativas.forEach(alt => {
        alt.removeEventListener('click', verificarResposta);
        if (alt.getAttribute('data-key') !== respostaCorreta) {
            alt.classList.add('incorreta');
        } else {
            alt.classList.add('correta');
        }
    });

    if (!document.getElementById('botaoProxima')) {
        exibirBotaoProxima();
    }
}

function exibirBotaoProxima() {
    const botaoProxima = document.createElement('button');
    botaoProxima.className = "buttonNext";
    botaoProxima.innerText = "Próxima";
    botaoProxima.id = 'botaoProxima';
    botaoProxima.addEventListener('click', () => {
        botaoProxima.remove();
        proximaQuestao();
    });

    displayQuestionDiv.appendChild(botaoProxima);
}

function temporizador(count) {
    if (questaoRespondida) {
        return;
    }

    if (count < 0) {
        if (!questaoRespondida) {
            proximaQuestao();
        }
        return;
    }

    contadorDiv.innerHTML = 'Tempo restante: ' + count + ' segundo(s)';

    tempoID = setTimeout(() => {           //Temporizador
        if (!questaoRespondida) {
            temporizador(count - 1);
        }
    }, 1000);
}


// Função que irá abrir o modal
function abrirModal() {
    loginModal.style.display = 'flex';
}

// Função que irá fechar o modal
function fecharModal() {
    loginModal.style.display = 'none';
}

// Evento para fechar o modal ao clicar no 'x'
closeModal.addEventListener('click', fecharModal);

// Evento para fechar o modal ao clicar fora do conteúdo do modal
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        fecharModal();
    }
});

// Evento para o envio do formulário de login/registro
loginForm.addEventListener('submit', (event) => {
    let points = (totalCorreto + tempoTotalGasto) * 10 
    event.preventDefault(); // Não irá recarregar a página
    const username = document.getElementById('username').value;      //Pega elementos do Formulário 
   
   const user = {
        username,
        score: points,
   }

    // Armazena os dados de login no localStorage
    let users = JSON.parse(localStorage.getItem('users')) // Parse pode converter uma string em objeto

      if (!users) {
        localStorage.setItem('users', JSON.stringify([])) // SetItem adiciona itens ao storage
        users = []

    }
    for (let user of users) {
        if (user.username == username) {
            user.score = points
            localStorage.setItem('users', JSON.stringify(users))
            alert(`Progresso Salvo com Sucesso, ${username}!`);
            fecharModal();
            return
        }
    }


      users.push(user)  // Coloca algum valor dentro de um array

        localStorage.setItem('users', JSON.stringify(users)) // Irá manter o "User" dentro do Storage
    
   
    alert(`Progresso Salvo com Sucesso, ${username}!`);
    fecharModal();

});

// Inicializa o quiz
iniciarQuiz();

