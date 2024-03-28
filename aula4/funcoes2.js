const testeImparPar = (n) => {

        let calculoTeste = n % 2

        if(calculoTeste == 1){

            return "numero impar"
        } else {
            return "número par"
        }

}
console.log(testeImparPar(10))
console.log(testeImparPar(769))
console.log(testeImparPar(4873))
