const Lista = require('./estruturas/lista');
const Pilha = require('./estruturas/pilha');
const Fila = require('./estruturas/fila');
const bubbleSort = require('./algoritmos/bubble-sort');
const quickSort = require('./algoritmos/quick-sort');
const mergeSort = require('./algoritmos/merge-sort');

function medirDesempenho(func, arr) {
    const arrCopy = [...arr]; // Faz uma cópia para não modificar o original
    console.time(func.name);
    func(arrCopy); // Executa o algoritmo
    console.timeEnd(func.name);
}

// Exemplo de uso
let lista = new Lista();
let pilha = new Pilha();
let fila = new Fila();

// Adiciona elementos
let elementos = [5, 2, 9, 1, 5, 6];
elementos.forEach(e => {
    lista.add(e);
    pilha.push(e);
    fila.enqueue(e);
});

// Testar com lista (Array)
console.log("Desempenho com lista:");
medirDesempenho(bubbleSort, lista.getItems());
medirDesempenho(quickSort, lista.getItems());
medirDesempenho(mergeSort, lista.getItems());

// Testar com pilha
console.log("Desempenho com pilha:");
medirDesempenho(bubbleSort, pilha.getItems());
medirDesempenho(quickSort, pilha.getItems());
medirDesempenho(mergeSort, pilha.getItems());

// Testar com fila
console.log("Desempenho com fila:");
medirDesempenho(bubbleSort, fila.getItems());
medirDesempenho(quickSort, fila.getItems());
medirDesempenho(mergeSort, fila.getItems());
