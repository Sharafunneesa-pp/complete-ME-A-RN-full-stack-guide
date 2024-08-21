// prototype inheritance
// using objects inheiting

baleno={
    manufacture:'suzuki',
    varients : ['manual'],
    price:100000
}
glanza={
    manufacture:'toyota'
}
glanza.__proto__=baleno
console.log(glanza.varients)
