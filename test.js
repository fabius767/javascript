let valores = [1,2,3,4,5]

let maior = valores[0]

let menor = valores[0]

for(s in valores) {
    if(maior < valores[s] && menor > valores[s]) {
        maior = valores[s]
        menor = valores[s]
    }
}

console.log(menor)

