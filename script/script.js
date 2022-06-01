let count = 0
let x = true

circle.onclick = function () {
    if (x == true) {
        let sec = 10;
        let timer = setInterval(function () {
            startTimer(sec);
        }, 1000);

        function startTimer() {
            if (sec === 0) {
                clearInterval(timer);
                card.style.display = 'none'
                result.style.display = 'flex'
                count_result.textContent = count*6 + ' clicks per minute'
                count = 0               
                count_score.textContent = '0'
                count_num.textContent = 10
                x = true
            } else {
                $('#count_num').html(sec);
                sec--;
                count_num.textContent = sec
            }
        }
        x = false
    }
    count++
    count_score.textContent = count
}

start.onclick = function () {
    card.style.display = 'flex'
    result.style.display = 'none'
}