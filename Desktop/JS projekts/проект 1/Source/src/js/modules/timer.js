

const startTimer = (deadline) =>{
    const timerInterval = setInterval(updateTimer, 1000);

   

    function updateTimer() {
        const currentTime = new Date().getTime();
        const timeDifference = deadline - currentTime;

        if (timeDifference <= 0){
            clearInterval(timerInterval);
        }else{
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


            document.querySelector('#days').innerHTML = formatTime(days);
            document.querySelector('#hours').innerHTML = formatTime(hours);
            document.querySelector('#minutes').innerHTML = formatTime(minutes);
            document.querySelector('#seconds').innerHTML = formatTime(seconds);
        }
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }


}

export default startTimer

