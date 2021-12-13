
const element = document.getElementById("dado");

element.addEventListener('click',
function tiradado() {
    user = Math.floor(Math.random()* 6 +1);
    document.writeln('<div>Il numero del tuo dado è ' + user + '</div>');
    
    pc = Math.floor(Math.random()* 6 +1);
    document.writeln('<div>Il numero del dado del pc è ' + pc + '</div>');

    if (user > pc){
        document.writeln('<div>Hai Vinto</div>');
    }else if (pc > user){
        document.writeln('<div>Hai Perso</div>');
    }else{
        document.writeln('<div>Pareggio</div>');
    };
}
);




