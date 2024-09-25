function sumir() {
    const container = document.getElementById('containerAceitar');
    container.classList.add('hidden');
}

function aparecer() {
    const container = document.getElementById('containertermo');
    container.classList.remove('hidden');
    container.classList.add('visible');
}

function sumirtermo() {
    const container = document.getElementById('containertermo');
    container.classList.remove('visible');
    container.classList.add('hidden');
}
function texto(){
    const texto=document.getElementById("texto")
    texto.classList.add("hidden")

}
const vitoria = document.getElementById('container-vitoria');
const derrota = document.getElementById('container-derrota');

function limparInput(){
    document.getElementById("chute").value=""
    document.getElementById("tentativas").innerHTML=contador-1
}
let segredo=''
let letraErrada=[]
let letraAcerto=''

let palavra=""
let contador=0

let palavraArray=[]
let simbolo="_"
let simbolo2="_ "
let fundo=0
let body = document.body;
let repetidaAcerto=false
let repetidaErro=false
let letraRepAcerto=false
let letraRepErro=false
let letraCorreta=false

function verificar(){
    letraRepErro=false
    letraRepAcerto=false
    letraCorreta=false
    document.getElementById('tentativas').innerHTML=contador
    if(contador==0){
        segredo=document.getElementById('chute').value.toUpperCase()
        palavra=simbolo.repeat(segredo.length)
        document.getElementById('palavra').innerHTML=simbolo2.repeat(segredo.length)
        contador++
    }
    else{
        let letra=document.getElementById('chute').value.toUpperCase()
       
        if(letraAcerto.includes(letra)){
            letraRepAcerto=true
        }
        if(segredo.includes(letra) && letraRepAcerto==false){
            letraAcerto=letraAcerto +" "+letra
            document.getElementById('Letra-Correta').innerHTML=letraAcerto
            letraCorreta=true
        }
        if(letraErrada.includes(letra)){
            letraRepErro=true
        }
        if(!segredo.includes(letra) && letraRepErro==false){
            letraErrada=letraErrada+" "+letra
            document.getElementById('Letra-Errada').innerHTML=letraErrada
            
        }

        let palavraArray = palavra.split('')
        for (let i = 0; i < segredo.length; i++) {
            for(let j=0;j<letraAcerto.length;j++){
                if (letraAcerto[j]==segredo[i]) {
                    palavraArray[i] = segredo[i]
            }
        

    }
    }
        palavra = palavraArray.join('')
        document.getElementById('palavra').innerHTML = palavraArray.join(' ')
        
        if (!letraRepAcerto && !letraRepErro && letraCorreta==false) {
        contador++
        }

    }
    if(segredo==palavra){
        vitoria.classList.add('visible')

    }

    switch(contador){
        case(2):
            body.classList.toggle('changeGradient')
           

         break 
        case(3):
        
        body.classList.toggle('changeGradient2')
            
            break
        case(4):
        body.classList.toggle('changeGradient3')
           
         break 
        
        case(5):
        body.classList.toggle('changeGradient4')
            break
        case(6):
        body.classList.toggle('changeGradient5')
            break
        case(7):
        body.classList.toggle('changeGradient6')
            break
        
            
    }
    if(contador==7){
        derrota.classList.add('visible')
    }
}

