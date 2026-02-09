alert('Boas-vindas ao jogo do número secreto');
let secretnumber = 29;
console.log(secretnumber)
let guess = prompt('Escolha um número entre 1 e 30'); 

if (secretnumber == guess) {    
    alert(`Isso ai! Você acertou o número secreto ${secretnumber}`);
} else {
    alert('Você errou:(');
}
