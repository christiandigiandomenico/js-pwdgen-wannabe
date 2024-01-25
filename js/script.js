let nome;
nome = prompt("Come ti chiami?")

let cognome;
cognome = prompt("Qual è il tuo cognome?")

let colore;
colore = prompt("Qual è il tuo colore preferito")

const passcode = nome + cognome + colore + 23

document.getElementById("password").innerHTML = passcode