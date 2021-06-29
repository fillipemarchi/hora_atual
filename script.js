function carregar(){

let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
let min = data.getMinutes()


msg.innerHTML = `Agora são ${hora}:${min}horas.`

if (hora >=00 && hora<12){
    img.src = 'fotomanha.png'
    document.body.style.background = '#f4e9d2'
} else if (hora >12 && hora<18) {
    img.src = 'fototarde.png'
    document.body.style.background = '#90a1ba'
} else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#122424'
}
}
