function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = window.document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gen
        let img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Mulher'
            if (idade < 10) {
                // Criança
                img.setAttribute('src', 'img/crianca-f.webp')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-f.webp')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-f.webp')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-f.webp')
            }
        } else if (fsex[1].checked) {
            gen = 'Homem'
            if (idade < 10) {
                // Criança
                img.setAttribute('src', 'img/crianca-m.webp')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-m.webp')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-m.webp')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-m.webp')
            }
        }
        // res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}