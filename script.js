// Date() -> return the details like date, day, time

function showTime(){
    const currentTime = new Date()

    const result = `${currentTime.getHours()%12}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`

    const place = document.getElementById('time')

    place.innerText = result
}


const btn = document.getElementById('timeBtn')
const stpBtn = document.getElementById('stopTime')

const timeStamp = document.getElementById('time-stamp')

btn.addEventListener('click', () => {

    const interval = setInterval(() => {
        showTime()
    }, 1000)


    stpBtn.addEventListener('click', () => {
    clearInterval(interval)  //it bream the setInterval iteration

})

})

// setTimeOut(callBack(task), time in miliSec) -> it only run once after compliting the given time which is paased as parameter

// setInterval(callBack(task), time in miliSec) -> it runs again and again after time count which is passed as parameter

// clearInterval(interval) -> it bream the setInterval iteration