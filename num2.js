let texto = prompt('digite uma frase ou texto')
let textm = texto.toUpperCase();
let textmi = texto.toLocaleLowerCase();

alert(`maiusculo: ${textm}`)
alert(`minusculo: ${textmi}`)

let array = []
array = texto.split("")

for(i in array){
    console.log(array[i])
}