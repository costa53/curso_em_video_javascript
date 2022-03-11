function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 6) {
        // BOA MADRUGADA
        img.src = 'img/fotomadrugada.webp'
        document.body.style.background = '#38383f'
    } else if (hora < 12) {
        // BOM DIA
        img.src = 'img/fotomanha.webp'
        document.body.style.background = '#becede'
    } else if (hora < 18) {
        // BOA TARDE
        img.src = 'img/fototarde.webp'
        document.body.style.background = '#c59175'
    } else {
        // BOA NOITE
        img.src = 'img/fotonoite.webp'
        document.body.style.background = '#3e3244'
    }
}