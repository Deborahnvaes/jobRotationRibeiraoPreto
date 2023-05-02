// código em JavaScript que calcula a sequência de Fibonacci e verifica se um número informado pelo usuário pertence à sequência.

function fibonacci(numero) {
    let a = 0;
    let b = 1;
  
    while (b < numero) {
      const c = a + b;
      a = b;
      b = c;
    }
  
    return b === numero ? `${numero} pertence a Fibonacci.` : `${numero} não pertence à Fibonacci.`;
  }
  
  console.log(fibonacci(5));
  console.log(fibonacci(10));
  