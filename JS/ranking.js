const ranking = document.getElementsByClassName ("geralRanking")
const users = JSON.parse(localStorage.getItem('users'))

let Dados = []
let Point = []
let place = []
let p = 0

if(users){ 
    for(let user of users){
        
        Point.push(user.score)
        Dados.push([user.username, user.score])
    }
    ordenar()
}

function ordenar(){
    let max = Point.reduce(function (a,b){return Math.max(a,b)}) // Dará o maior número do score
    for(let i =0; i<= Point.length; i++){   // Identificara qual o objeto que tem o maior score
        if(Point[i]== max){
            place.push(Dados[i])  
            Point.splice(i,1)    // Deletará o indice "i" que é o indice 1
            Dados.splice(i,1)    // Deletará o indicce "i" que é o indice 1
            
        }
    }
    if(place.length == users.length){ 
        montar()
        return
  } else{
     ordenar()
    }
}

function montar(){
    for(let l of place){
        p++

        const editor = document.createElement('geralRanking')
        editor.classeName = 'geralRanking'
        document.getElementById('containerRank').appendChild(editor)

        const editorPosition = document.createElement('pr')
        editorPosition.className=('hashe')
        editorPosition.innerHTML=p
        editor.appendChild(editorPosition )
        
        const editorName = document.createElement('en')
        editorName.className=('nome')
        editorName.innerHTML=l[0]
        editor.appendChild(editorName)

        const editorPoint = document.createElement('ep')
        editorPoint.className=('score')
        editorPoint.innerHTML=l[1]
        editor.appendChild(editorPoint)

    }
}
