function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' 
 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

         if (fsex[0].checked) {
            genero = 'Homem' 
            if (idade >= 0 && idade < 10) {
                //criança M
                img.setAttribute('src', 'Imagens/babym.png')
            } else if (idade < 21) {
                //jovem M
                img.setAttribute('src', 'Imagens/jovemm.png')
            } else if (idade < 50) {
                // Adulto M
                img.setAttribute('src', 'Imagens/adultom.png')
            } else {
                //idoso M
                img.setAttribute('src', 'Imagens/idosom.png')
            }
         } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança F
                img.setAttribute('src', 'Imagens/babyf.png')
            } else if (idade < 21) {
                //jovem F
                img.setAttribute('src', 'Imagens/jovemf.png')
            } else if (idade < 50) {
                // Adulto F
                img.setAttribute('src', 'Imagens/adultof.png')
            } else {
                //idoso F
                img.setAttribute('src', 'Imagens/idosof.png')
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Você informou ${genero} com ${idade} anos.<br><br>`
         res.appendChild(img)
    }

}