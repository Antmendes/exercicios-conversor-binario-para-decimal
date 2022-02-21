let bin = (prompt('digite um numero binario!'))
let string = []
let number = []
let result = []
let mult = []
let soma = 0
string = bin.split("")
console.log(string)
tamanho = string.length

for(let i = 0; i < tamanho; i++){
    number.push(Number(string[i]))
}
number.reverse()

for(let p = 0; p < number.length; p++){
    let pot = 2 ** p
    result.push(pot)
}
console.log(result)
for(let f = 0; f < number.length; f++){
    let extra = (number[f]) *(result[f])
    mult.push(extra)
}
for(let o = 0; o < mult.length; o++){
    soma += mult[o]

}
alert(`o numero decimal correspondente é: ${soma}`)




