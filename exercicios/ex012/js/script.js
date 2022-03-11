var agora = new Date()
var hora = agora.getHours()
var res = window.document.getElementById('res')
res.innerHTML = `<p>Agora são exatamente ${hora} horas.</p>`
if (hora < 6) {
    res.innerHTML += `Boa Madrugada!`
} else if (hora < 12) {
    res.innerHTML += `Bom Dia!`
} else if (hora < 18) {
    res.innerHTML += `Boa Tarde!`
} else {
    res.innerHTML += `Boa Noite!`
}