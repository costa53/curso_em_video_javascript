var nome = window.prompt('Qual é seu nome? ')
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.<br/>`)
document.write(`Seu nome em maiúsculas é ${nome.toLocaleUpperCase()}.<br/>`)
document.write(`Seu nome em minúsculas é ${nome.toLocaleLowerCase()}.`)