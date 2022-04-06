// ARROW FUNCIONTS

//function    nome da funcao       parametro1  parametro2
  const     funcaoMultiplicaçao = (numero,    multiplicador) => {
    return numero * multiplicador
  }
// console.log(funcaoMultiplicaçao(2, 4));

//FORMA REDUZIDA QUANDO SO POSSUI UM PARAMETRO
const funcMultiplicaçaoPor2 = numero => {
  return numero * 2;
}

//FORMA MAIS REDUZIDA QUANDO O RETORNO É LOGO APOS A CHAVE

const funcMultiplicaçaoPor4 = numero => numero * 4;

// console.log(funcMultiplicaçaoPor4(4));

//ARROW FUNCTION COM TEMPLATE E TERNARY
const funcaoGeral = (numero, nome) => (
  //    CONDIÇAO   if           entrou no if                                else
  numero % 2 === 0 ? `ola ${nome}, o numero informado é par` : `ola ${nome}, o numero informado é impar`
)

// console.log(funcaoGeral(2, 'humberto'));


// FLUXO DE EXCEÇAO E OBJETOS

const sum = (value1, value2) => {
  try {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  } catch (erro) {
    //throw new Error('errou');
    throw erro;
  }
};

// console.log(sum(2, '3'));

// OBJETOS
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// console.log(Object.keys(coolestTvShow));
// console.log(Object.values(coolestTvShow));
// console.log(Object.entries(coolestTvShow));