var agora = new Date()
var diaSem = agora.getDay()
var res = window.document.getElementById('res')
res.innerHTML = `Hoje é `
switch (diaSem) {
    case 0:
        res.innerHTML += `Domingo`
        break;
    case 1:
        res.innerHTML += `Segunda`
        break;
    case 2:
        res.innerHTML += `Terça`
        break;
    case 3:
        res.innerHTML += `Quarta`
        break;
    case 4:
        res.innerHTML += `Quinta`
        break;
    case 5:
        res.innerHTML += `Sexta`
        break;
    case 6:
        res.innerHTML += `Sábado`
        break;
    default:
        res.innerHTML += `[ERRO] Dia inválido!`
        break;
}