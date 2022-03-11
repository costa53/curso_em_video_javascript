function checar() {
    let ida = window.document.getElementById('txtid')
    let res = window.document.getElementById('res')
    let age = Number(ida.value)
    res.innerHTML = `<p>Você tem <b>${age} anos.</b></p>`
    if (age < 16) {
        res.innerHTML += `Não vota!`
    } else if (age < 18 || age >= 65) {
        res.innerHTML += `Voto opcional!`
    } else {
        res.innerHTML += `Voto obrigatório!`
    }
}