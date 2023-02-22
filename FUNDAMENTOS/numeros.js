const peso1 = 1.0

const peso2 = Number('2.0')

console.log(peso1, peso2)
/*if (Number.isInteger(peso2)){
    console.log(peso2, 'é um numero')
}
else{
    console.log('não é um numero: ')
}

if (Number.isInteger(peso)){
    console.log(peso1,'é um numero')
}

else{
    console.log(peso1,'Não é um numero')
}*/

const avalicao1 = 9.871
const avalicao2 = 6.871

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))
