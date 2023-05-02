// a) adicionando 2 a cada termo retornando 9

function a(n) {
    return 2 * n - 1;
}
console.log (a(5));

// b) multiplicando cada termo por 2 retornando 128

function b(n) {
    return Math.pow(2, n);
  }
  console.log(b(7)); 

// c) adição de números ímpares consecutivos a partir do número 1 retornando 49

function c(n) {
    return Math.pow(n, 2);
  }
  console.log(c(7)); 

// d) numero ímpar é elevado a cada termo do quadrado retornando 100

function d(n) {
    return Math.pow(2 * n, 2);
  }
  console.log(d(5));

// e) somando os números anteriores para obter o próximo, retornando 13

function e(n) {
    if (n === 1 || n === 2) {
      return 1;
    } else {
      return e(n - 1) + e(n - 2);
    }
  }
  console.log(e(7)); 

// f) adc 2 ao primeiro, 2 no segundo e 4 ao terceiro termo, adc 1 ao quarto termo, 1 ao quinto, 1 ao sexto.... retornando 20

function f(n) {
    const sequencia = [2, 10, 12, 16, 17, 18, 19, 20];
    if (n >= 1 && n <= sequencia.length) {
      return sequencia[n-1];
    }
  }
  console.log(f(8));
   
   
  

  
  
  
  