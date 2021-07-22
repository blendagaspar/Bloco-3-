
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto=document.querySelector('#assunto')
let nomeok=false
let emailok=false
let assuntook=false
let mapa=document.querySelector('#mapa')

nome.style.width= '100%'
email.style.width='100%'

function validaNome() {
       let txtNome = document.querySelector('#txtNome')
       if (nome.value.length <=2)
         {
          txtNome.innerHTML='Nome inválido!'
          txtNome.style.color='red'
         }else{
            txtNome.innerHTML='Nome válido!'
            txtNome.style.color='green'
            nomeok=true
         }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
      {
    txtEmail.innerHTML='Email inválido!'
       txtEmail.style.color='red'
      }else{
         txtEmail.innerHTML='Email válido!'
         txtEmail.style.color='green'
         emailok=true
      }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito longo , digite no máximo 100 caracteres!'
        txtAssunto.style.color='red'
    }else{
        txtAssunto.innerHTML='texto válido!'
        txtAssunto.style.color='green'
        assuntook=true
     }

}

function enviar(){

    if(nomeok == true && emailok == true && assuntook== true){
        alert('Formulário enviado com sucesso total!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }

}

function mapaZoom(){
    mapa.style.width="800px"
    mapa.style.heigth="600px"

}


function mapaNormal(){
    mapa.style.width="400px"
    mapa.style.heigth="350px"
    
}