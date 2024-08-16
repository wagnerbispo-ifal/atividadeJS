function mostrarConteudo(id) {
    const conteudos = document.querySelectorAll('.content');
    conteudos.forEach(conteudo => conteudo.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function maiorMenor() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
    let d = parseInt(document.getElementById('d').value);
    let e = parseInt(document.getElementById('e').value);
    let numeros = [a, b, c, d, e];
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    document.getElementById('resultadoMaiorMenor').innerText = `Maior valor: ${maior}, Menor valor: ${menor}`;
}

function verificarVogal() {
    let c = document.getElementById('caractere').value.toLowerCase();
    let resultado = 'aeiou'.includes(c) ? 1 : 0;
    document.getElementById('resultadoVogal').innerText = resultado ? `'${c}' é uma vogal.` : `'${c}' não é uma vogal.`;
}

function limites() {
    let li = parseInt(document.getElementById('li').value);
    let ls = parseInt(document.getElementById('ls').value);
    let soma = 0;
    let numerosPares = [];
    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
            soma += i;
        }
    }
    document.getElementById('resultadoLimites').innerText = `Números pares: ${numerosPares.join(', ')}, Soma: ${soma}`;
}

function ordenar() {
    let a = parseInt(document.getElementById('x').value);
    let b = parseInt(document.getElementById('y').value);
    let c = parseInt(document.getElementById('z').value);
    let numeros = [a, b, c].sort((a, b) => a - b);
    document.getElementById('resultadoOrdem').innerText = `Números em ordem crescente: ${numeros.join(', ')}`;
}

function positivoNegativo() {
    let x = parseInt(document.getElementById('valor').value);
    let resultado = x >= 0 ? "positivo" : "negativo";
    document.getElementById('resultadoPositivoNegativo').innerText = `O valor ${x} é ${resultado}.`;
}

function parImpar() {
    let x = parseInt(document.getElementById('numero').value);
    let resultado = x % 2 === 0 ? "par" : "ímpar";
    document.getElementById('resultadoParImpar').innerText = `O número ${x} é ${resultado}.`;
}