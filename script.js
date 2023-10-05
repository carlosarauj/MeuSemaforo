let red = document.querySelector('#red')
let yellow = document.querySelector('#yellow')
let green = document.querySelector('#green')
let aut = document.querySelector('#aut')

let base = document.querySelector('#base')


red.addEventListener('click', onRed)

function onRed(){

    base.src = "./img/redLed.png"

    aut.style.display = 'block'
    
}

yellow.addEventListener('click', onYellow)

function onYellow(){
    base.src = "./img/yellowLed.png"

    aut.style.display = 'block'
    
}

green.addEventListener('click', onGreen)

function onGreen(){
    base.src = "./img/greenLed.png"

    aut.style.display = 'block'
    
}

aut.addEventListener('click', onAut)

function onAut(){
    setInterval(() => {
        base.src = "./img/redLed.png"
    }, 2000);

    setInterval(() => {
        base.src = "./img/yellowLed.png"
    }, 4000);

    setInterval(() => {
        base.src = "./img/greenLed.png"
    }, 6000);

    aut.style.display = 'none'
}

function stop(){
    clearInterval()
}








/*
⠀⠀   ⢀⡴⠁⠀ ⣿⡏⠀⠱⣄
⠀⠀⢀⣴⡟⠁⠀⠀⠀⣿⡇⠀⠀⠀⠙⣷⣄
⠀⠀⠙⢿⣷⣄⠀⠀⠀⣿⡇⠀⠀⢀⣴⣿⠋
⠀⠀⠀⠀⠙⢿⣷⣄⠀⢻⡇⢀⣴⣿⠋
⠀⠀⠀⠀⠀⠀⠈⠻⣷⣾⣷⡿⠋
⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣷⣄
⠀⠀⠀⠀⠀⢀⣶⣿⠟⢹⣏⠻⢿⣷⣄
⠀⠀⠀⢀⣼⣿⠟⠁⠀⢸⣿⠀⠈⠙⢿⣷⣄
⠀⠀⣴⣿⡟⠁⠀⠀⠀⢸⣿⠀⠀⠀⠀⣹⣿⡷
⠀⠀⠈⠻⣿⣦⡀⠀⠀⢸⣿⠀⠀⢀⣼⣿⠏
⠀⠀⠀⠀⠈⠻⣿⣦⡀⢸⣿⠀⣴⣿⠟⠁
⠀⠀⠀⠀⠀⠀⠈⠻⣿⣾⣿⣾⡿⠃⠀
⠀⠀ ⠀⠀⠀⠀⠀⠀⠈⠻⡿⠋
"My honored brethen
We come together
To unite as one
Against those that are damned
We show no mercy
For we have none
Our enemies shall fall
As we uprise
To claim our fate
Now and forever
We'll be together
Love and hate"
*/