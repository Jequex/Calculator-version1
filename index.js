function fn(){
    let div = document.getElementById('typehere')
    div.innerHTML += "."
}

function fn0(){
    let div = document.getElementById('typehere')
    div.innerHTML += "0"
}

function fn1(){
    let div = document.getElementById('typehere')
    div.innerHTML += "1"
}

function fn2(){
    let div = document.getElementById('typehere')
    div.innerHTML += "2"
}

function fn3(){
    let div = document.getElementById('typehere')
    div.innerHTML += "3"
}

function fn4(){
    let div = document.getElementById('typehere')
    div.innerHTML += "4"
}

function fn5(){
    let div = document.getElementById('typehere')
    div.innerHTML += "5"
}

function fn6(){
    let div = document.getElementById('typehere')
    div.innerHTML += "6"
}

function fn7(){
    let div = document.getElementById('typehere')
    div.innerHTML += "7"
}

function fn8(){
    let div = document.getElementById('typehere')
    div.innerHTML += "8"
}

function fn9(){
    let div = document.getElementById('typehere')
    div.innerHTML += "9"
}

function fnc(){
    let div = document.getElementById('typehere')
    let div2 = document.getElementById('answer')
    div.innerHTML = ""
    div2.innerHTML = ""
}

function fnp(){
    let div = document.getElementById('typehere')
    div.innerHTML += "+"
}

function fnm(){
    let div = document.getElementById('typehere')
    div.innerHTML += "-"
}

function fnd(){
    let div = document.getElementById('typehere')
    div.innerHTML += "/"
}

function fnt(){
    let div = document.getElementById('typehere')
    div.innerHTML += "*"
}

function fne(){
    let div = document.getElementById('typehere').innerText
    let div2 = document.getElementById('answer')
    try{eval(div)
        div2.innerHTML = eval(div)
    }catch{
        div2.innerHTML = "invalid syntax"
    }
    
}


