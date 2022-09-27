const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $adelante = document.querySelector('#adelantar')
const $back = document.querySelector('#back')

$play.addEventListener('click', handleplay)
$pause.addEventListener('click', handlepause)




function handleplay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al boton de play')
}
function handlepause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('le diste click al boton de pause')
}

$back.addEventListener('click',handleback)
function handleback(){
    $video.currentTime = $video.currentTime -10
    console.log("le diste play")
}

$adelante.addEventListener('click',handleadelante)

function handleadelante() {
    $video.currentTime = $video.currentTime +10
    console.log("adelantaste")
}
const   $progress =document.querySelector('#progreso')
$video.addEventListener('loadedmetadata',handleload)
$video.addEventListener('timeupdate',handletimeupdate)

function handleload(){
    $progress.max = $video.duration
    console.log('ha cargado mi video',$video.duration)
}

function handletimeupdate(){
    $progress.value = $video.currentTime
   // console.log('Tiempo actual',$video.currentTime)
}

$progress.addEventListener('input',handleinput)

function handleinput(){
    $video.currentTime = $progress.value
    console.log(progress.value)
}


