console.log(5<=5)
console.log(5<5)
console.log(5>5)
console.log(5>=5)
console.log(5==5)
console.log(5!=5)
console.log(5=="5")
console.log(5==="5")
console.log(5 !=="5")


console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)


let idade = 50;
console.log(`A idade é: ${idade}`)

let a = 10,
    b = 50,
    c = 70;

console.log(`: ${a, b, c}`)
console.log(`As idade são: ${a} ${b} ${c}`)

// Escrever um programa que solicite ao usuário o nome, em seguida o programa solicita o sobrenome. Após isso, o programa exibe no console a frase "O nome completo é: [nome completo do usuário]"

// let age = prompt("Digite a sua idade")
// let name = prompt("Digite seu nome")
// let last_name = prompt("Digite seu sobrenome")
// alert(`O nome completo é ${name} ${last_name} e tem ${age} anos`)


// outra opção seria: 
// let age = prompt("Digite a sua idade")
// let name = prompt("Digite seu nome")
// let last_name = prompt("Digite seu sobrenome")
// console.log(`O nome completo é +name + last_name e tem +age anos`)


console.error("erro!!!")
console.warn("Aviso")

// let numero1 = prompt("digite um número: ") 
// if(numero1 >= 18) {
//     console.log("Maior de idade")
// }
// if(numero1 < 18) {
//     console.log("Menor de idade")
// }


// let username = prompt("Qual seu usuário?")

// if(username == "Aliny") {
//     console.log("Estou com a Aliny em frente")
// }else{
//     console.log("usuário não cadastrado")
// }


// let age1 = prompt("Digite a sua idade")
// if(age1 >= 18) {
//         console.log("Pode entrar")
// }
//         else{
//         console.log("Não pode entrar")
//         }


        // Escreva um programa que solicite ao usuário que digite um número qualquer. Em seguida o programa deve solicitar que o usuário digite um novo número. Após isso o programa apresenta a soma dos dois números. Se essa soma for >= 100 apresentar na tela a mensagem "parcelamos em até 10x sem juros" do contrário pagamento a vista.


let valor1 = parseInt(prompt("digite um número"))
let valor2 = parseInt(prompt("digite um número"))
if(valor1+valor2 >= 100) {
    console.log("Parcelamos em até 10x sem juros")
}
else{
    console.log("Pagamento à vista")
}