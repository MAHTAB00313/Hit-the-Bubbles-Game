var timer = 60;
var score = 0;
var hit;

function inrScore() {
    score += 10;
    document.getElementById('scoreVal').innerText = score;
}

function makeBubble() {
    var bubble = document.getElementById('pbody');
    var addBubble = '';
        for(let i = 1; i<=184;i++) {
            let randNum = Math.floor(Math.random()*10);
            addBubble += `<div class="bubble">${randNum}</div>`
            bubble.innerHTML = addBubble;
        }
}

function runTimer() {
  var timerInt = setInterval(function(){
        timer--;
        if(timer>=0) {
        document.getElementById('timerVal').textContent = timer;
        } else {
            clearInterval(timerInt);
            document.getElementById('pbody').innerHTML = `<h1 id='gOver'>Game Over</h1>`
        }
    },1000);
}

function giveHit() {
    hit = Math.floor(Math.random()*10);
    document.getElementById('hitVal').innerText = hit;
}

document.getElementById('pbody').addEventListener('click', function(dets) {
    var clicked = Number(dets.target.textContent)
    if( clicked === hit) {
        inrScore();
        makeBubble();
        giveHit();
    }
    
});

runTimer();
makeBubble();
giveHit();