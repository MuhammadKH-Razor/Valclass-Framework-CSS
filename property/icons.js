// property, tag dan value - Muhammad Khoirul Huda

let propertiesIcons = [
    'v-user',
    'v-instagram'
]

let valuesIcons = [
    'fas fa-user',
    'fab fa-instagram'
]

// pengkondisian

setTimeout(() => {

    if (document.querySelector('i')) {
        for (var i = 0; i < propertiesIcons.length; i++) {
            for (var a = 0; a < document.querySelectorAll('i').length; a++) {
                if (document.querySelectorAll('i')[a].classList.contains(propertiesIcons[i])) {

                    document.querySelectorAll('i')[a].classList.add(valuesIcons[i])

                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesIcons.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesIcons[i])) {

                    document.querySelectorAll('a')[a].classList.add(valuesIcons[i])

                }
            }
        }
    }
    
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda