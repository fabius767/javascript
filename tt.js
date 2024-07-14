function clicar() {
    let z = document.getElementById('num')
    let select = document.getElementById('se')
    if(z.value.length == 0) {
        alert('digite um numero \u{26A0}')
    } else {
        select.innerHTML = ''
        let numb = Number(z.value)
        for(let c = 0; c <= 10; c++ ) {
            let option = document.createElement('option')
            option.innerHTML = `${numb}x${c} = ${numb*c}`
            select.appendChild(option)
        }
    }
}