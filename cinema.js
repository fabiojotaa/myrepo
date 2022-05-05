// const filmes = [ //foi criada uma variavel do tipo array constante, que não pode ser alterada, mas é possivel alterar os objetos que estão dentro
//     {
//         codigo: 001, //foi colocado dois pontos pq não é uma variável, tem q colocar a vírgula pra trocar de objeto
//         titulo: "a espera de um milagre",
//         duracao: 3.09,
//         atores: ['Tom Hanks', 'Michael Clarke'], //colchetes pq está no plural, se não tivesse podia ignorar
//         lancamento: 1998,
//         emCartaz: false,
//         alteraEmCartaz: function () { 
//             this.emCartaz = !this.emCartaz; //this manda pegar o valor na propriedade declarada
//         }

//     }, 
//     {
//         codigo: 002,
//         titulo: "um sonho de liberdade",
//         duracao: 2.22,
//         atores: ['Morgan Freeman', 'Tim Robbins'],
//         lancamento: 1994,
//         emCartaz: false

//     }, 
//     {
//         codigo: 003,
//         titulo: "batman",
//         duracao: 2.56,
//         atores: ['Robert Pattison', 'Zoe Kravitz'],
//         lancamento: 2022,
//         emCartaz: true

//     }, 
//     {

//     } //o último item não precisa de vírgula

// ];

const filmes = require('./database/catalogo.json');
const listarFilmes= () => {
   
     for (let i = 0;i <filmes.length;i++){
        console.log(`Filme: ${filmes[i].titulo} 
        Lançou no ano: ${filmes[i].lancamento}
        ${filmes[i].emCartaz ? 'Está em cartaz': 'Não está em cartaz'}`) //é crase ali, não é aspas
    }
}

const alterarCartaz = () => {
    for (let i = 0;i <filmes.length;i++){
        const filme = filmes [i]
        if (filme.emCartaz)


        console.log(`${filme.emCartaz ? 'Está em cartaz' : 'Não está em cartaz'}`)
    }
}


//essa aula eu não entendi quase nada, fazer revisão urgente
//usar o const = () => { } no lugar do function
 
//if ternário
//  ${filmes[i].emCartaz ? 'Está em cartaz': 'Não está em cartaz'}`

//if normal
//if (filmes[i].emCartaz){
//     console.log('está');
//     else{
//         console.log('não está')
//     }
// }

function adicionarFilme(novoFilme){ //ouvinte
    filmes.push(novoFilme)

} //tentando entender pq ele fez dessa forma, mas pelo que eu tô vendo ele criou a função
// e dentro da função add a constante filmes e usou o comando push para jogar o objeto novo filme lá dentro
//com o function ele criou um comando que sempre vai adicionar os filmes na constante "filmes"
//agora é só jogar dentro da função ali e automaticamente entra na const
//olha como ficou abaixo:


adicionarFilme( { //chamada
    codigo: 004,
    titulo: "joker",
    duracao: 2.56,
    atores: ['Joaquin Phoenix', 'Robert DeNiro'],
    lancamento: 2020,
    emCartaz: false

},
 );

 adicionarFilme({ 
    codigo: 005,
    titulo: "teste",
    duracao: 0,
    atores: ['a1', 'a2'],
    lancamento: 2022,
    emCartaz: true

}, )



function buscarFilme(codigo){
    return filmes.find((filme) => { //recebe um predicado que é uma função que sempre retorna true/false
        return filme.codigo ===  codigo //true || false

    })

} //foi completamente diferente do que eu pensei, significa que não assistir o playground tem atrapalhado o meu avanço aqui nas aulas. F



buscarFilme()
const filmeEncontrado = buscarFilme(1);



filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz






//.push() insere uma posição nova na última posição do array
//.pop() retira o último item do array
//.indexOf() formato de busca - retorna 
//.find() encontra um item específico - retorna um elemento
//.unshift() perdi a explicação kkk

listarFilmes();
alterarCartaz();


const carros = ['civic', 'palio', 'opala', 'mareia', 'city'];

carros.forEach((item) => {
console.log(item);
})

// a única coisa que o forEach faz é mapear algo dentro da constante, não tem return.



const meuArray = [1, 2, 3, 4, 5];
const meuObjeto = {nome:'Fabio', sobrenome:'Junior'}

for(let key in meuObjeto){
    console.log(key)

}   

// isso acima serve para percorrer um objeto


// const nome = meuObjeto.nome;
// const sobrenome = meuObjeto.sobrenome
// isso abaixo chama desestruturação, para objetos se usa chaves {}, para arrays se usa colchetes []

const {nome, sobrenome} = meuObjeto
const [meuNumero1, , , , meuNumero5] = meuArray

console.log(nome, sobrenome)
console.log(meuNumero5, meuNumero1)

//for in para interar objetos
//for off interar arrays
//objeto date para datas
//professor disse que vale a pena olhar a documentação do javascript, sempre que rolar alguma dúvida é importante pesquisar, isso é algo que frizam bastante aqui no curso.
//spread operator são reticências antes da variável, usamos para copiar o objeto de outra variável, exemplo: (funciona tanto para objetos, quanto para array)

const objetoCompleto = {
    ...meuObjeto,
    nome: 'troquei seu nome',
    idade: 27
} //se vc quiser alterar algo dentro do meuObjeto é só adicionar o objeto novamente, que copia tudo.
console.log(objetoCompleto)

//O que é uma função callback? 
//Raramente é usado, mas segue exemplo:
//callback é uma função dentro de outra função, para ser executado em outro momento
//callback não é uma palavra reservada, e sim, uma ação utilizada para facilitar as coisas

// meuArray.find(()=> {

// })

// function minhaFuncao(callback){

// }

//a gente usa callback pra não deixar o negócio poluido com um monte de código copiado, basicamente, já que é considerado mal prática.


// map() percorre cada item e retorna um novo valor, utilizando return

const carrosNovos = carros.map((item)=> {
    console.log(item);
    return `${item } + bebe demais`;
    }) //com ${} não precisa concatenar
    
    console.log(carros, carrosNovos)
    
    

    

// filter() filtra e traz as informações para um novo array, sem exemplo pq tem exercicio mais pra frente
    

    

// reduce() retorna um valor acumulado em um novo array, exemplo:


const numeros = [1, 2, 3, 4, 5]

const soma = numeros.reduce((acumulador, valorAtual) => {
    console.log(acumulador, valorAtual);
return acumulador + valorAtual;
})

console.log(soma); //retornou 15 porque



// forEach

//exercicio de filter, aprendi pelo google durante a aula: (gostei que eu entendi e fui um dos poucos a acertar)

function listarFilmesDeLongaDuracao(value){

    if(value.duracao >= 2)
    return value
}
let resultado = filmes.filter(listarFilmesDeLongaDuracao);
console.log(resultado)

//agora o jeito do professor: (muito mais legal)

const listarFilmesDeLongaDuracao2 = () => {
    return filmes.filter( (filme) => {
        return filme.duracao >= 2 ; // é sempre true or false
    })
}

const filmesLongos = listarFilmesDeLongaDuracao2();

console.log(filmesLongos)


//exercicio forEach

const listarTodosOsFilmes = () => {
    return filmes.forEach((filme) => {
        return filmes.forEach
    })

}

listarTodosOsFilmes()