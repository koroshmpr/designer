let score = 0
let find = 0
let num = 0
const heart = document.getElementById('hrt')
let sco = document.getElementById('sco')
const caught = document.getElementById('caught')
const ls = document.getElementById('ls')
const board = document.getElementById('brd')
sco.append(score)
window.onload = function () {
    setTimeout(func1, 7000)
};
const x = document.getElementById("myAudio")
function srd() {
    x.play();
    sco.removeChild(sco.childNodes[1]);
    score += 10
    sco.append(score)
}
$('#dk').click(srd)
function func1() {
    $('#dk').css('visibility', 'visible')
}

function change() {
    var bodyWidth = board.clientWidth
    var bodyHeight = board.clientHeight;
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight / 2));
    $('#dk').css('left', randPosX);
    $('#dk').css('top', randPosY);
    if (randPosX < bodyWidth/2){
        num = 180
    }
    else if (randPosX> bodyWidth/2) {
        num =0
    }
    $('#dk').css('transform', `rotateY(${num}deg)`)
}
$('#dk').on('click', change);
setInterval(function () {
    change();
}, 900);
$('#losing').click(loser)
function loser() {
    heart.removeChild(heart.childNodes[0])
    let ht = document.createElement('i');
    ht.classList = ('fas fa-heart-broken');
    heart.append(ht)
    find++
    caught.play()
    if (find === 3) {
        const tit = document.createElement('div')
        tit.innerText = 'YOU LOSE'
        tit.classList = "tit"
        ls.play()
        board.append(tit)
        setTimeout(function () {
            location.reload()

        }, 2000)
    }
}