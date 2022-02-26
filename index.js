function f (funcao){
    //callable
    funcao()
}

function g (){
    function outraFuncao (){
        console.log ("Fui criada por g")
    }
    return outraFuncao
}

// const gResult = g()
// gResult()

g()()()
undefined()
// let umaFuncao = function () {
//     console.log ("Fui armazenada em uma variável")
// }
// // umaFuncao()


// f(function (){
//     console.log ("Estou sendo passada para a f")
// })

// f(3)
// const triplo = (n) => {
//     return n * 3
// }
// console.log (triplo (5))

// const dobro = (n) => {
//     return n * 2
// }
// const dobro = (n) => n * 2
// console.log (dobro (5))

// const hello = () => {console.log ("Hello")}
// hello()
// () => {}




// const triplo = function (n = 10){
//     return n * 3
// }
// console.log (triplo(5))
// console.log(triplo())

// const dobro = function (n){
//     return 2 * n
// }
// const resultado = dobro (6)
// console.log (resultado)

// function soma (a, b){
//     return a + b
// }
// const res = soma (2, 3)
// console.log(res)

// //definição da função
// function hello (){
//     console.log("oi")
// }
// //chamada da função
// //ou seja, ponto em que ela é colocada em execução
// hello()
// function hello (nome){
//     console.log ("Oi, " + nome)
// }
// hello ("José")




// public class Pessoa{
//     public void falar (){
//         System.out.println ("oi")
//     }
//     public void falar (String texto){
//         System.out.println (texto);
//     }
//     public void falar (int a){

//     }
//     public void falar (String s, int a){

//     }

//     public void falar (int a, String s){

//     }

//     public void falar (double a){

//     }

//     public void falar (double b){

//     }
// }
// Pessoa p = new Pessoa();
// p.falar (3.4);
// p.falar ("oi", 1);
// p.falar (1, "oi");
// p.falar();
// p.falar("texto");
// p.falar(1);



// const valores = [1, 2, 3, 4]
// const soma = valores.reduce ((ac, atual) => {
//     return ac + atual
// })
// console.log(soma)

// const nomes = [
//     "Ana Maria",
//     "Antonio",
//     "Rodrigo",
//     "Alex",
//     "Cristina"
// ]

// const resultado = nomes.every((n) => {
//     return n.startsWith("A")
// })
// console.log(resultado)



// //[A, A, R, A, C]
// const mapeamento = nomes.map((nome) => {
//     return nome.charAt(0)
// })
// console.log(mapeamento)



// const apenasA = nomes.filter((n) => {
//     return n.startsWith("A")
// })
// console.log(apenasA)

// class Pessoa{
//     public void andar (){

//     }
//     variavel = andar;

//     public void m(){
//         andar();
//         variavel();
//     }
// }





// id, nome, idade
// SELECT nome, idade FROM pessoa

//encontrar todos os nomes que começam com A


// const v2 = [2, "abc", true]

// const v = []
// console.log(v.length)
// v[100] = 2
// console.log(v.length)
// List <Integer> list = new ArrayList <>(2);
// list.add(2);
// list.add(3);
// list.add(5);

// const v = []
// v = []

// const a = 2
// a = 3


// int v [4];


// //int v [] = new int [10];
// //List <Integer> list = new ArrayList <>();
// const v1 = []
// // console.log(v1.length)
// v1[0] = 3.4
// v1[2] = "abc"
// v1[10] = 2
// // console.log(v1.length)
// for (let i = 0; i < v1.length; i++){
//     console.log(v1[i])
// }

// @Deprecated
// Thread.stop()

// //= atribuição
// //== comparação (com coerção implícita)
// //=== comparação (sem coerção implícita, compara por tipo e valor)

// // console.log(1 == 1)
// // console.log (1 == '1')
// //console.log (1 === 1)
// // console.log(1 === '1')
// // console.log(true == 2)
// // console.log (1 == [1])
// // console.log (1 == [1, 1])
// // console.log (null == null)
// // console.log (null == undefined)
// // console.log ([] == false)
// // console.log (typeof(Number([1, 1])))
// // console.log ((Number([1, 1])))
// // console.log ([] == [])
// // console.log ([] === [])
// // const a = []
// // const b = a
// // console.log (a === b)
// // console.log ("abc" === "abc")

// String s1 = "abc";
// String s2 = "abc";
// if (s1 == s2) // true

// String s3 = JOPtionPane.showInputDialog ("Digit e uma string"); "abc"

// if (s1 == s3)//false





// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 * n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + +n2
// console.log(n4)

// let a = "abc"
// a = 2
// int a = 3.5;
// int a = (int) 3.5;
// let a = null
// console.log(a)
// console.log(typeof(a))
// a = "abc"

// int a;
// float b;
// char c;

// String a = "abc";
// String b = "cdf";
// int c = a - b;

// var idade = 18
// console.log ("Oi, " + nome)
// if (idade >= 18){
//     let nome = "João"
//     console.log ("Parabéns, " + nome)
//     console.log("Você pode dirigir")
// }
// console.log ("Até mais " + nome)


// var linguagem = "Javascript"
// console.log ("Aprendendo " + linguagem)
// //variável pode ser redeclarada
// var linguagem = "Java"
// console.log ("Aprendendo " + linguagem)
// const nome = 'José " "'
// nome = "abc"
// const endereco = `Rua K, 12`
// const sexo = "F ' ' "
// const idade = 27

// let a = 2
// a = 3
// let nomeCompleto = "Joao Silva"
// a = "abc"


// var c = 2 + 3
// c = 5
// var d = "abcd"