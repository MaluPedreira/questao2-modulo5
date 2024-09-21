let btn = document.getElementById('btn-act-calcular');

function calculadoraIMC() {
  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value/100;
  let resultado = document.getElementById('resultado');
  
  if(altura !== "" && peso !== "") {
    let imc = (peso / (altura * altura)).toFixed(1);
    let msg = "";
  
    if(imc < 18.5){
        msg = "Abaixo do peso."
    }else if(imc < 25){
        msg = "Peso ideal."
    }else if (imc < 30){
        msg = "Sobre peso."
    }else if (imc <35){
        msg = "Obesidade Grau I - Que tal iniciar a prática de melhores hábitos? vamos lá!"
    }else if (imc < 40){
        msg = "Obesidade Grau II -  Hummm, você precisa de um pouco mais de atenção com a saúde e prática de exercícios talvez"
    }else{
        msg = "Obesidade Grau III - Busque ajude de um médico nutricionista"
    }

    resultado.textContent = "O seu IMC é: " +imc + ".  " +msg;
      
    }else{
    resultado.textContent ="Atenção, preencha todos os campos."
  }
    
}
   
btn.addEventListener('click', function(event){
    event.preventDefault()
    calculadoraIMC()
});


let btnMenu = document.getElementById('target-menu');

btnMenu.addEventListener('click', function(event){
    event.preventDefault()
    console.log('clicou')

    let list = document.getElementById('list-menu')
    list.classList.add('show-menu')
});

let btnMenuClose = document.getElementById('close');
btnMenuClose.addEventListener('click', function(event){
    event.preventDefault()
    let list = document.getElementById('list-menu')
    list.classList.remove('show-menu')
});