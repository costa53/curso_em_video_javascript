function calcular() {
    let txtv = window.document.getElementById('txtvel')
    let res = window.document.getElementById('res')
    let vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <b>${vel}Km/h</b></p>`
    if (vel > 60) {
        res.innerHTML += `Você foi <b>MULTADO</b> por excesso de velocidade!`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}