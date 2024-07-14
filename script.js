console.log("hello world javascript!") //https://www.w3.org/TR/2018/CR-SVG2-20181004/

 /*Window
var nome = window.prompt('Nome por favor')

window.alert('prazer em conhecer, ' + nome + '!')
..
var n1 = Number(window.prompt('Digite um numero: '))
var n2 =Number(window.prompt('Digite outro numero: '))
var m1 = n1 + n2

window.alert(`A soma de ${n1} e ${n2} e ${m1}`)

//pula linha

var a = document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'clicou!'
    a.style.background = 'blue'
}

function entrar() {
    a.innerText = 'entrou'
    a.style.background = 'red'
}

function sair() {
    a.innerText = 'saiu'
    a.style.background = 'green'
}*/

function somar() {
    let res = document.getElementById('res')
    let t1 = document.getElementById('t1')
    let t2 = document.getElementById('t2')
    let m1 = Number(t1.value)
    let m2 = Number(t2.value)
    let s = m1 + m2
    res.innerHTML = `a soma de ${m1} e de ${m2} e de ${s}`
}

/*var q = document.getElementById('title')

q.addEventListener('click', clicar)

function clicar() {
    q.innerText = 'Funciona'

}*/

//corta linha

var vel = 60.5

console.log(`A velocidade do seu carro e de ${vel}km/h`)
if(vel > 60) {
    console.log(`Voce ultrapassou a velocidade permitida. MULTADO!`)
} 
console.log(`Dirija sempre usando o cinto de seguranca!`)

var pais = 'brasil'
console.log(`Vivendo em ${pais}`)
if(pais == 'brasil') {
    console.log('Voce e brasileiro')
} else {
    console.log('Voce e estrangeiro')
}


function calcular() {
    let Resu = document.getElementById('Resu')
    let txtv = document.getElementById('txtvel')
    let vel = Number(txtv.value) 
    Resu.innerHTML = `<p>sua velocidade e de <strong>${vel}</strong>km/h</p>`
    if(vel > 100) {
        Resu.innerHTML += `Voce esta <strong>MULTADO</strong> por excesso de velocidade!`
    }
    Resu.innerHTML += `<p>Dirija sempre com seguranca!</p>`
    

}

function verificar() {
    let re = document.getElementById('re')
    let pa = document.getElementById('ppa')
    let pai = String(pa.value)
    re.innerHTML = `<p>Seu pais e ${pai}</p>`
    if(pai == 'brasil') {
        re.innerHTML += `<p>Voce e <strong>brasileiro!</strong></p>`
    } else {
        re.innerHTML += `<p>Voce e <strong>estrangeiro</strong></p>`
    }

}

//pula linha

 var idade = 16
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('Nao vota')
} else if (idade <= 18 || idade > 65) {
        console.log('Voto opcional')
    } else {
            console.log('Voto obrigatorio')
        } 

var now = new Date
var hora = now.getHours()
console.log(`Agora sao exatamente ${hora} horas`)
if (hora < 19) {
    console.log('boa tarde')
} else if (hora < 12) {
    conaole.log('bom dia')
}     else if (hora < 6) {
    console.log('Boa madrugada')
} else {
    console.log('Boa noite')
}
  
var diasem = now.getDay()

switch(diasem) {
    case 0 :
        console.log('domingo')
        break
    case 1 :
         console.log('segunda')
        break
    case 2 :
         console.log('terca')
        break
    case 3 :
        console.log('quarta')
        break
    case 4 :
        console.log('quinta')
        break
    case 5 :
        console.log('sexta')
        break
    case 6 :
        console.log('sabado')
        default :
        console.log('[ERROR] dia invalido')
    
}

// pula linha

/*var c = 1

while(c <= 7) {
    console.log(`Passo ${c}`)  
    c++
} 

do {
    console.log(`passo ${c}`)
    c++
}while(c <= 10)*/

// pula linha

for(let c=1; c<=10; c++) {
    console.log(`passo ${c}`)
}

let aaa = 2
let bbb = 1

/*while(c <= 10) {
    console.log(`parte ${c}`)
    c += a
}*/

for(let c = bbb; c <= 10; c+= aaa){
    console.log(`Parte ${c}`)
}

// Array/vetor

let vespa = ['d', 'c', 'b', 'a'] 
         // ['0', '1', '2', '3']

console.log(vespa[3])

let bee = [6, 3, 2, 5, 4, 7, 1] //8]
       // [0, 1, 2, 3, 4, 5, 6]   7

console.log(bee[0])

bee[7] = 8                      //=^

console.log(`test ${bee[7]}`)
console.log(`tem ${vespa.length} posicoes`)

/* let test = [document.getElementById('llc'),'aa'] // Teste proprio
function clicar() { // Teste proprio
    if(test[0]) {

    }
} */
bee.sort()
console.log(`O vetor tem ${vespa.length} letras`)
console.log(`O vetor tem ${bee.length} numeros`)
console.log(bee)
console.log(` number ${bee}`)

let num = [4, 5, 6, 7, 8]
        
/*for(let pos = 0; pos<num.length;pos++) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}

let pp = num.indexOf(6)

if(pp == -1) {
    console.log(`O valor nao foi encontrado`)
} else {
    console.log(`O numero esta na posicao ${pp}`) // o numero 8 esta na posicao 4
}

/*let ebe = document.body.appendChild(document.createElement('div'))
let eb = ebe.appendChild(document.createElement('img'))
eb.setAttribute('src', 'nerd.png')*/  //exemplo proprio que nao tem nada a ver com a aula.//

//Funcoes

function par(m) {
    if(m % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let resul = par(11)

console.log(resul)


function vezes(x1, x2) {
    return x1 * x2
}

console.log(vezes(2, 2))

let v = function(x) {
    return x * 2
}

console.log(v(6))

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {   //5! = 5 x 4 x 3 x 2 x 1 = 120
        fat *= c
    }
    return fat 
}

console.log(fatorial(5))


let ki = function somaValor(nn1, nn2) {
    return nn1 + nn2
}

console.log(ki(3, 3))

let cp = {firstName : 'fabio', lastName : 'castro', age : 20} //Teste proprio

console.log(cp.firstName)

console.log(typeof cp.firstName)

let fg = 'Hello'
let gf = 'World'

let fgf = fg.concat(gf)

console.log("",fgf)

// Teste proprio map()
/* let estudantes = [
    {nome: "alex", nota: 5.7},
    {nome: "isadora", nota: 6.8},
    {nome: "michel", nota: 7.6},
    {nome: "maria", nota: 4.9},
  ]

  let notas = []

  for(i of estudantes) {
    notas.push(i.nota)
  }

let maiorNota = Math.max(...notas)
 console.log(maiorNota)

 let nNormal = estudantes.map(estudantes => (estudantes.nota * 10/maiorNota).toFixed(2))

 console.log(`As antigas notas: ${notas} `)
 console.log(`As notas sao ${nNormal} `)
 console.log(nNormal[1])


//SPREAD (...)

let somavk = (...numeross) => {
    let cj = 0
    for(i of numeross) {
        cj += i
    }

    return cj
}

console.log(somavk(2,2,2,2))
//

let o = [1, 2, 3, 4, 5, 6,]

console.log(o.indexOf(7))

const user = {"usuario": "fabio", "idade" : "20", "casado" : false }

JSON.stringify(user)

console.log(typeof(user))

let N = [4, 6, 8, 2]

let maxN = Math.max(...N)

console.log(maxN)

let mapa = N.map(N => (N * 3))

console.log(mapa)

/*let bewb = function(N) {
   return N * 3
}

console.log(bewb(N))

let dd = new Date()
let ddd = dd.getHours()
let cd = dd.getMinutes()

let p = document.createElement('p')      //Teste proprio ;>
p.innerHTML = `${ddd}:${cd}`

let bobo = document.querySelector('body')

bobo.appendChild(p)


let f = [2,3,5]

let h = f.map(f => (f * 5))

console.log(h) 

let f = new Map() // M maiusculo

f.set('a', 1)
f.set('b', 2)
f.set('c', 3)

console.log(f.get('a')) //nao esqueca o get()

f.set('a', 7)

console.log(f.get('a'))

let numbers = [1,2,3]
let doubledNumbers = []
 
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers[i] = numbers[i] * 2
//               ^ A posicao rebebe o numero x 2
}
 
console.log('números duplicados: ' + doubledNumbers)


// Filter test

let ccr = [10,8,5,4,6,1]

let vv = ccr.filter(gy)

function gy(r) {
    return r > 5
}

console.log(vv)

let ss = ccr.map(ccr => ( ccr > 5))

console.log(ss)

let frie = {
    nome:'',
    idade:'',
    sexo(m){},
}

let io = (function neu(){
    console.log('Hello World!')
})()

let ioi = (function neu(){
    alert('funciona')
    })()

let friendo = {
    nome: 'joao', 
    sexo: 'M', 
    peso: 85.5, 
    engordar(p=0){
        this.peso += p 
    } 
}

friendo.engordar(2)  //Funcionou

console.log(friendo)

let onzz = [1,2,2,]

let onz = onzz.map( onzz => (onzz + 3))

console.log(onz)

let er = {
    g: function(v) {
        if(v + 5 >= 10) {
            alert(`sei la`)
        }
    }
}

er.g(6)*/

let N = [4, 6, 8, 2]

let maxN = Math.max(...N) //ira me dar o maior valor

console.log(maxN) 

leed = [1, 2, 3, 4, 5]

let manx = Math.max(leed)

console.log(manx)


























































