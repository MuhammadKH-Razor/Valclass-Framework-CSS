// property, tag dan value - Muhammad Khoirul Huda

let propertiesTime = [
    'v-date',
    'v-day',
    'v-month',
    'v-year'
]

let days= [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

let month= [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
   
let Time = [
    new Date().getDate(),
    days[new Date().getDay()],
    month[new Date().getMonth()],
    new Date().getUTCFullYear()
]

// pengkondisian

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('div')[a].innerHTML = Time[i]

                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('h1')[a].innerHTML = Time[i]

                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('h2')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('h3')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('h4')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('h5')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('h6')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('span')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('p')[a].innerHTML = Time[i]

                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('small')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('input')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('sup')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('sub')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('code')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('a')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }
    
    if (document.querySelector('ul')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('ul').length; a++) {
                if (document.querySelectorAll('ul')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('ul')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }

    if (document.querySelector('li')) {
        for (var i = 0; i < propertiesTime.length; i++) {
            for (var a = 0; a < document.querySelectorAll('li').length; a++) {
                if (document.querySelectorAll('li')[a].classList.contains(propertiesTime[i]) && !document.querySelector('style').innerHTML.includes(propertiesTime[i])) {

                    document.querySelectorAll('li')[a].innerHTML = Time[i]
                    
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda