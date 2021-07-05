//var n = parimp(10) Chamada da função. Pode ser antes ou depois

function parimp(n) {
    if (n%2==0){
        return 'par'
    } else {
        return 'impar'
    }
}
var res = parimp(10) // Chamada da função
console.log(res)
// ou
console.log(parimp(9))
