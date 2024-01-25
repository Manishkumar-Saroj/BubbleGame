var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var container = document.getElementById('pbtm');
    var bubbleWidth = 10;
    var numberOfBubbles = Math.floor(window.innerWidth / bubbleWidth) * 2;

    var clutter = "";

    for (var i = 1; i <= numberOfBubbles; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    container.innerHTML += clutter;
}

// Call the function to generate initial bubbles
makeBubble();

// Add event listener for scrolling
document.getElementById('pbtm').addEventListener('scroll', function () {
    var container = this;
    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 20) {
        // User has scrolled close to the bottom, add more bubbles
        makeBubble();
    }
});

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clickednum = Number(details.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
getNewHit();
