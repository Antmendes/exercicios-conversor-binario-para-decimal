 let num = prompt('quantos numeros deseja digitar?')

let numeros = []

for(let i = 1; i <= num; i++){
    numeros.push(Number(prompt(`digite o ${i}° numero!`)))
}
let soma = 0
let media = 0
let pot1 = 0
let pot2 = 0
let raiz = 0
let cubica = 0


for(let c = 0; c < numeros.length; c++){
    soma += numeros[c]
    media = soma / num
    pot1 = soma ** 2
    pot2 = media ** 2
    raiz = Math.sqrt(soma)
    cubica = Math.cbrt(soma)
}
alert(`soma = ${soma}, media = ${media}`)
alert(`A potencia da soma é: ${pot1}, e da media é ${pot2}`)
alert(`a raiz quadrada da soma é: ${raiz}, e a cubica é: ${cubica}`)