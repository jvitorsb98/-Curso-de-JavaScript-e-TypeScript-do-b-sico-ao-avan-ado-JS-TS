const nome = prompt("Digite seu nome completo");
document.body.innerHTML += `Seu nome: <strong>${nome}</strong> <br>`;
let quantidadeLetras = nome.replace(/\s+/g, '').length;
document.body.innerHTML += `Seu nome tem: <strong>${quantidadeLetras}</strong> letras <br>`;
document.body.innerHTML += `Segunda letra do seu nome: <strong>${nome[1]}</strong> <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong> <br>`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.replace(/\s+/g, "|")}</strong> <br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toLocaleUpperCase()}</strong> <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLocaleLowerCase()}</strong> <br>`;