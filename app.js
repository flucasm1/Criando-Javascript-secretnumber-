alert('Boas-vindas ao jogo do número secreto');
let secretnumber = 10;
console.log(secretnumber);
let guess;
let tries = 1;

while (guess != secretnumber) {
    guess = prompt('Escolha um número entre 1 e 30'); 
    if (secretnumber == guess) {    
    alert(`Isso ai! Você acertou o número secreto ${secretnumber}`);
    alert('Número de tentativas = ' + tries)
}  else { 
    tries += 1 //ou tries ++
    if  (secretnumber > guess) {
        alert ('O número secreto é maior que ' + guess);
    }   else {
    alert('O número secreto é menor que ' + guess);
    }
}
}
 


