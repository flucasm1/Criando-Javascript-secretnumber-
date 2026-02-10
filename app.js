alert('Boas-vindas ao jogo do número secreto');
let numberpossibility = 100
let secretnumber = parseInt(Math.random() * numberpossibility + 1) ;
console.log(secretnumber);
let guess;
let tries = 1;

while (guess != secretnumber) {
    guess = prompt(`Escolha um número entre 1 e ${numberpossibility}`); 
    if (secretnumber == guess) {    
    break;
}  else { 
    tries += 1 //ou tries ++
    if  (secretnumber > guess) {
        alert ('O número secreto é maior que ' + guess);
    }   else {
    alert('O número secreto é menor que ' + guess);
    }
}
} 
let triesword = tries > 1? 'tentativas' : 'tentativa';
alert (`Você descobriu o número secreto ${secretnumber} com ${tries} ${triesword}`);

//if (tries > 1){
   // alert(`Isso ai! Você acertou o número secreto ${secretnumber}`);
    //alert('Número de tentativas = ' + tries)
//} else {
 //   alert('Você acertou de primeira!')
//}

