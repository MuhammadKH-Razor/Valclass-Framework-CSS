if(document.querySelector('.v-time')) {
    document.querySelector('date').innerText = new Date().getDate()
    document.querySelector('day').innerText = new Date().getDay()
    document.querySelector('year').innerText = new Date().getFullYear()
    document.querySelector('month').innerText = new Date().getMonth()
    document.querySelector('minute').innerText = new Date().getMinutes()
    document.querySelector('second').innerText = new Date().getSeconds()
    document.querySelector('hour').innerText = new Date().getHours()
}