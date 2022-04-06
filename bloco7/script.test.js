const sum = (a, b) => a + b;

const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};


describe('TESTES MONITORIA', () => {
  it('Verifica se a funçao soma se comporta corretamente', () => {
    expect(sum(2, 3)).toEqual(5);
  });

  // Conteudo do dia 7.3
  it('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(4)).toEqual(8);
  });
  it('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  it('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  });

  it('verifica operaçoes dentro do it', () => {
    expect(2 + 3).toEqual(5);
    const nome = 'humberto';
    expect(`nome a ser testado ${nome}`).toEqual('nome a ser testado humberto');
  })
});