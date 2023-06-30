let contador = 0;

//Capturar icones na frente do input

let trocarCor = document.querySelectorAll(`nav ul li a`);

let iconeCerto = document.querySelectorAll(`.iconeCerto`);

let iconeErrado = document.querySelectorAll(`.iconeErro`);


//capturar todos os inputs

let nomeF = document.querySelector(`#nomeF`);
nomeF.addEventListener(`keyup`, verificarNome);

let emailF = document.querySelector(`#emailF`);
emailF.addEventListener(`keyup`, verificarEmail);

let telefoneF = document.querySelector(`#telefoneF`);
telefoneF.addEventListener(`keyup`, verificarTelefone);

let assuntoF = document.querySelector(`#assuntoF`);
assuntoF.addEventListener(`keyup`, verificarAssunto);

//Capturar os campos de erros do input

let erroEncontrado = document.querySelector(`#erroEncontrado`);

let mensagemF = document.querySelector(`#mensagemF`);

//Capturar botao de enviar formulario

let btnEnviar = document.querySelector(`#btnEnviar`);
btnEnviar.setAttribute(`onclick`, `verificarForm(event)`);

//Calcular Idade Atual

let dataAtual = new Date();

let dataNiver = new Date(1992,10,16);

let idadeAtual = Math.floor((dataAtual - dataNiver)/(86400*1000*365));

let spanIdade = document.querySelector(`#anosAtual`);
spanIdade.innerHTML = `${idadeAtual}`;


//Animação da barra após rolar a scroll

window.addEventListener(`scroll`, revelar);

function revelar(){
  let distanciaTop = window.pageYOffset;
  let mostrarNav = document.querySelector(`#mostrarNav`);
  if(distanciaTop > 600){
    mostrarNav.classList.add(`aparecer`);
  }else{
    mostrarNav.classList.remove(`aparecer`);
  }
}


trocarCor.forEach((elemento) => {
    elemento.setAttribute(`onmouseover`, `trocar(this)`);
    elemento.setAttribute(`onmouseout`, `voltar(this)`);
    
})

function trocar(e){
    e.style.backgroundColor = `rgba(250,250,250,0.8)`;
    e.style.border = `solid 2px black`;
    
}

function voltar(e){
    e.style.backgroundColor = ``;

}

let contatar = document.querySelector(`#contateEu`);
contatar.setAttribute(`onclick`, `mecontate()`);
contatar.setAttribute(`onmouseover`, `botaoDif(this)`);
contatar.setAttribute(`onmouseout`, `normalizar(this)`);

let bntCurriculo = document.querySelector(`#curriculo`);
// bntCurriculo.setAttribute(`onclick`, `baixarCurriculo()`);
bntCurriculo.setAttribute(`onmouseover`, `btnCurri(this)`);
bntCurriculo.setAttribute(`onmouseout`, `normalizar(this)`);

function mecontate(){
    // window.location.href = `contato.html`;
}

function baixarCurriculo(){
    let ancora = document.createElement(`a`);
    ancora.setAttribute(``)
}

function btnCurri(elemento){
    elemento.style.backgroundColor = `rgb(227,105,90, 1)`;
    elemento.style.cursor = `pointer`;
}

function botaoDif(elemento){
    elemento.style.backgroundColor = `white`;
    elemento.style.cursor = `pointer`;
    
}

function normalizar(elemento){
    elemento.style = `;`
}

function verificarForm(event){
  event.preventDefault();
  verificarNome();
  verificarEmail();
  verificarTelefone();
  verificarAssunto();
  verificarMensagem();
  if(contador === 5){
    limparFormulario();
  }else{
    contador = 0;
  }
}

function verificarNome(){
  let regex = /^[A-Z][a-z]* [A-Z][a-z]*$/
  if(!regex.test(nomeF.value)){
    nomeErro.innerHTML = `Deve estar no formato: Nome Sobrenome`;
    nomeErro.style.color = `#E3695A`;
    nomeErro.style.marginTop = `5px`;
    iconeErrado[0].style.opacity = `1`;
    iconeCerto[0].style.opacity = `0`;
  }else{
    erroEncontrado.textContent = ``;
    nomeErro.innerHTML = ``;
    iconeErrado[0].style.opacity = `0`;
    iconeCerto[0].style.opacity = `1`;
    contador++;
  }
}

function verificarEmail(){
  let regex = /^[A-Za-z0-9_.]+@[A-Za-z0-9_]+[.][A-Za-z0-9_]*[.A-Za-z0-9_]*$/;
  if(!regex.test(emailF.value)){
    emailErro.innerHTML = `Email deve ter algo antes e depois do @`;
    emailErro.style.color = `#E3695A`;
    emailErro.style.marginTop = `5px`;
    iconeErrado[1].style.opacity = `1`;
    iconeCerto[1].style.opacity = `0`;
  }else{
    erroEncontrado.innerHTML = ``;
    emailErro.innerHTML = ``;
    iconeErrado[1].style.opacity = `0`;
    iconeCerto[1].style.opacity = `1`;
    contador++;
  }
}

function verificarTelefone(){
  let regex = /^[0-9]{2} [9] [0-9]{4}[-][0-9]{4}$/
  if(!regex.test(telefoneF.value)){
    telefoneErro.innerHTML = `Deve estar no formato: xx 9 xxxx-xxxx`;
    telefoneErro.style.color = `#E3695A`;
    telefoneErro.style.marginTop = `5px`;
    iconeErrado[2].style.opacity = `1`;
    iconeCerto[2].style.opacity = `0`;
  }else{
    erroEncontrado.innerHTML = ``;
    telefoneErro.innerHTML = ``;
    iconeErrado[2].style.opacity = `0`;
    iconeCerto[2].style.opacity = `1`;
    contador++;
  }
}

function verificarAssunto(){
  if(assuntoF.value.length < 1){
    assuntoErro.innerHTML = `Assunto não pode ficar em branco`;
    assuntoErro.style.color = `#E3695A`;
    assuntoErro.style.marginTop = `5px`;
    iconeErrado[3].style.opacity = `1`;
    iconeCerto[3].style.opacity = `0`;
  }else{
    erroEncontrado.innerHTML = ``;
    assuntoErro.innerHTML = ``;
    iconeErrado[3].style.opacity = `0`;
    iconeCerto[3].style.opacity = `1`;
    contador++;
  }
}
   
function verificarMensagem(){
  if(mensagemF.value.length < 1){
    mensagemErro.innerHTML = `Mensagem não pode ficar em branco`;
    mensagemErro.style.color = `#E3695A`;
    mensagemErro.style.marginTop = `5px`;
  }else{
    mensagemErro.innerHTML = ``;
    contador++;
    if(contador == 5){
      erroEncontrado.innerHTML = `Mensagem Enviada!`;
      setTimeout(() => {
    erroEncontrado.innerHTML = ``;
}, 3000);
    }else{
      erroEncontrado.innerHTML = ``;
    }
  }
}

function limparFormulario(){
  mensagemF.value = null;
  assuntoF.value = null;
  telefoneF.value = null;
  emailF.value = null;
  nomeF.value = null;
  contador = 0;
  
  iconeCerto.forEach((e)=>{
    e.style.opacity = `0`;
  })

  iconeErrado.forEach((e) => {
    e.style.opacity = `0`;
  })
  
}
