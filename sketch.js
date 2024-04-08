//código de alerta confirm e prompt simples
window.alert('Meu primeiro alerta') //cria alerta
window.confirm('Está gostando do curso')
window.prompt('Qual seu nome')

//variaveis e concatenação
var nome = window.prompt('Qual seu nome') 
window.alert ('Seja bem vindo'   + nome + '!')//concatenação

//criando 2 numeros
var n1 = window.prompt('digite um numero')
var n2 = window.prompt('digite outro numemo')
var s = n1 + n2
var s = window.alert('A soma dos 2 número é '+ s)

var n1 = Number.parseInt(window.prompt('Digite um numero'))
var n2 = Number.parseInt(window.prompt('Digite outro numemo'))
var s = n1 + n2
var s = window.alert('A soma dos 2 número é '+ s)

//numeros flutuantes
var n1 = Number.parseFloat(window.prompt('Digite um numero'))
var n2 = Number.parseFloat(window.prompt('Digite outro numemo'))
var s = n1 + n2
var s = window.alert('A soma dos 2 número é '+ s)

//javaScript decido se é inteiro ou flutuante
var n1 = Number(window.prompt('Digite um numero'))
var n2 = Number(window.prompt('Digite outro numemo'))
var s = n1 + n2
var s = window.alert('A soma dos 2 número é '+ s)



