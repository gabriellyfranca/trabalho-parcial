var barraPesquisa = document.getElementById('barradepesquisa')

var api = 'https://ghibliapi.herokuapp.com/films/'
var botao = document.getElementById('botao')

var conteiner1 = document.querySelector('.conteiner')
var conteiner2 = document.querySelector('.conteiner2')

conteiner2.addEventListener('click', function esconder(){
    conteiner2.style.display = "none"
    conteiner1.style.display = "flex"
})

botao.addEventListener('click', function dadosdoFilme() {
    if(barraPesquisa.value.length > 3){
        fetch(`${api}`)
        .then((response =>{
            return response.json()
        }))
        .then((data =>{
            for(filme of data){
                if(filme.title == barraPesquisa.value){

                    localStorage.setItem('dadosFilmes', JSON.stringify([filme.title, "Descrição: " + filme.description, 
                    "Diretor: " + filme.director, "Produtor: " + filme.producer ]))
                    
                    document.getElementById('tituloFilme').innerHTML = filme.title
                    document.getElementById('descFilme').innerHTML = filme.description
                    document.querySelector('#diretor').innerHTML = `Diretor: ${filme.director}`
                    document.querySelector('#produtor').innerHTML = `Produtor: ${filme.producer}` 

                    conteiner1.style.display = "none"
                    conteiner2.style.display = "flex"
                }
            }
        }))
        .catch((error =>{
            console.log(error)
        }))
    }
    else{
        alert('Insira um título válido')
    }
    
})


