function analisar() {
    let txtp = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
    let país = txtp.value
    res.innerHTML = `<p>Seu país é <b>${país}.</b></p>`
    if (país == 'Brasil') {
        res.innerHTML += `Você é Brasileiro!`
    } else {
        res.innerHTML += `Você é Estrangeiro!`
    }
}