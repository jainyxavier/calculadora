var btnsNum = document.querySelectorAll('.num')
// var btnSoma = document.querySelector('#soma')
// var btnSubtracao = document.querySelector('#subtracao')
// var btnMultiplicacao = document.querySelector('#multiplicacao')
// var btnDivisao = document.querySelector('#divisao')
var btnOperation = document.querySelectorAll('.operator')
var p = document.querySelector('p')
var btnIgual = document.querySelector('#igual')
var btnClear = document.querySelector('#btn-clear')
var num = ''
var num1 = ''
var num2 = ''

btnsNum.forEach(btn => {
    btn.addEventListener('click', function(){
        num = num + btn.textContent
        p.innerHTML = num
        
        if(num1 !== ''){
            num2 = num
            p.innerHTML = num1 + ' + ' + num2
        }
    })
})

btnOperation.forEach(operation => {
    operation.addEventListener('click', function(){
        num1 = num
        p.innerHTML = num1 + ' + '
    
        if(num1 !== '' ){
            num = ''
        }
    
        if(num2 !== ''){
            num = ''
        }
    })
})

btnIgual.addEventListener('click', function(){
    btnOperation.forEach(operation => {
        if(operation.textContent == '+' && num1 !== '' && num2 !== ''){
            somar(num1, num2)
            num1 = ''
            num2 = ''
            num = ''
        } else if(operation.textContent == '-' && num1 !== '' && num2 !== ''){
            subtracao(num1, num2)
            num1 = ''
            num2 = ''
            num = ''
        } else if(operation.textContent == '*' && num1 !== '' && num2 !== ''){
            multiplicacao(num1, num2)
            num1 = ''
            num2 = ''
            num = ''
        } else if(operation.textContent == '/' && num1 !== '' && num2 !== ''){
            divisao(num1, num2)
            num1 = ''
            num2 = ''
            num = ''
        }
    })
})

function somar(num1, num2){
    var resultado = parseInt(num1) + parseInt(num2)
    p.innerHTML = resultado
}

function subtracao(num1, num2){
    var resultado = parseInt(num1.value) - parseInt(num2.value)
    p.innerHTML = resultado
}

function multiplicacao(num1, num2){
    var resultado = parseInt(num1.value) * parseInt(num2.value)
    p.innerHTML = resultado
}

function divisao(num1, num2){
    var resultado = parseInt(num1.value) / parseInt(num2.value)
    p.innerHTML = resultado
}

btnClear.addEventListener('click', function(){
    p.innerHTML = ''
    num1 = ''
    num2 = ''
    num = ''
})