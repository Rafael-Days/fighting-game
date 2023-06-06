function rectangularCollision({ rectangule1, rectangule2 }) {
    return (
        rectangule1.attackBox.position.x + rectangule1.attackBox.width >= rectangule2.position.x &&
        rectangule1.attackBox.position.x <= rectangule2.position.x + rectangule2.width &&
        rectangule1.attackBox.position.y + rectangule1.attackBox.height >= rectangule2.position.y &&
        rectangule1.attackBox.position.y <= rectangule2.position.y + rectangule2.height
    )
}

function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Tie';
    } else if (player.health > enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins';
    } else if (player.health < enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins';
    }
}

let timer = 60;
let timerId
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--;
        document.querySelector('#timer').innerHTML = timer;
    }
    if (timer === 0) {
        determineWinner({ player, enemy, timerId });
    }
}