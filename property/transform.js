// property, tag dan value - Muhammad Khoirul Huda

let propertiesTransform = [
    'v-rotate-0',
    'v-rotate-30',
    'v-rotate-45',
    'v-rotate-90',
    'v-rotate-120',
    'v-rotate-180',
    'v-rotate-360',
    'v-scale--1',
    'v-scale--2',
    'v-scale--3',
    'v-scale--4',
    'v-scale--5',
    'v-scale--6',
    'v-scale--7',
    'v-scale--8',
    'v-scale--9',
    'v-scale-1',
    'v-scale-2',
    'v-scale-3',
    'v-scale-4',
    'v-skew-1',
    'v-skew-2',
    'v-skew-3',
    'v-skew-4',
    '-v-skew-1',
    '-v-skew-2',
    '-v-skew-3',
    '-v-skew-4',
    'v-translate-1',
    'v-translate-2',
    'v-translate-3',
    'v-translate-4',
    'v-translate-middle',
    '-v-translate-1',
    '-v-translate-2',
    '-v-translate-3',
    '-v-translate-4',
    '-v-translate-middle',
    'v-translateX-1',
    'v-translateX-2',
    'v-translateX-3',
    'v-translateX-4',
    'v-translateX-middle',
    '-v-translateX-1',
    '-v-translateX-2',
    '-v-translateX-3',
    '-v-translateX-4',
    '-v-translateX-middle',
    'v-translateY-1',
    'v-translateY-2',
    'v-translateY-3',
    'v-translateY-4',
    'v-translateY-middle',
    '-v-translateY-1',
    '-v-translateY-2',
    '-v-translateY-3',
    '-v-translateY-4',
    '-v-translateY-middle',
    'v-translateZ-1',
    'v-translateZ-2',
    'v-translateZ-3',
    'v-translateZ-4',
    'v-translateZ-middle',
    '-v-translateZ-1',
    '-v-translateZ-2',
    '-v-translateZ-3',
    '-v-translateZ-4',
    '-v-translateZ-middle'
]

let valuesTransform = [
  'transform: rotate(0deg)',
  'transform: rotate(30deg)',
  'transform: rotate(45deg)',
  'transform: rotate(90deg)',
  'transform: rotate(120deg)',
  'transform: rotate(180deg)',
  'transform: rotate(360deg)',
  'transform: scale(0.1)',
  'transform: scale(0.2)',
  'transform: scale(0.3)',
  'transform: scale(0.4)',
  'transform: scale(0.5)',
  'transform: scale(0.6)',
  'transform: scale(0.7)',
  'transform: scale(0.8)',
  'transform: scale(0.9)',
  'transform: scale(1)',
  'transform: scale(2)',
  'transform: scale(3)',
  'transform: scale(4)',
  'transform: skew(5deg)',
  'transform: skew(10deg)',
  'transform: skew(15deg)',
  'transform: skew(20deg)',
  'transform: skew(-5deg)',
  'transform: skew(-10deg)',
  'transform: skew(-15deg)',
  'transform: skew(-20deg)',
  'transform: translate(10%)',
  'transform: translate(20%)',
  'transform: translate(30%)',
  'transform: translate(40%)',
  'transform: translate(50%)',
  'transform: translate(-10%)',
  'transform: translate(-20%)',
  'transform: translate(-30%)',
  'transform: translate(-40%)',
  'transform: translate(-50%)',
  'transform: translateX(10%)',
  'transform: translateX(20%)',
  'transform: translateX(30%)',
  'transform: translateX(40%)',
  'transform: translateX(50%)',
  'transform: translateX(-10%)',
  'transform: translateX(-20%)',
  'transform: translateX(-30%)',
  'transform: translateX(-40%)',
  'transform: translateX(-50%)',
  'transform: translateY(10%)',
  'transform: translateY(20%)',
  'transform: translateY(30%)',
  'transform: translateY(40%)',
  'transform: translateY(50%)',
  'transform: translateY(-10%)',
  'transform: translateY(-20%)',
  'transform: translateY(-30%)',
  'transform: translateY(-40%)',
  'transform: translateY(-50%)',
  'transform: translateZ(10%)',
  'transform: translateZ(20%)',
  'transform: translateZ(30%)',
  'transform: translateZ(40%)',
  'transform: translateZ(50%)',
  'transform: translateZ(-10%)',
  'transform: translateZ(-20%)',
  'transform: translateZ(-30%)',
  'transform: translateZ(-40%)',
  'transform: translateZ(-50%)'
]

// pengkondisian

for (var i = 0; i < propertiesTransform.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

        let styles = ` 
    .${propertiesTransform[i]} { 
        ${valuesTransform[i]}
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
                .${propertiesTransform[i]} { 
                    ${valuesTransform[i]}
                }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('mark').length; a++) {
                if (document.querySelectorAll('mark')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('pre').length; a++) {
                if (document.querySelectorAll('pre')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('blockquote').length; a++) {
                if (document.querySelectorAll('blockquote')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
    
    if (document.querySelector('ul')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('ul').length; a++) {
                if (document.querySelectorAll('ul')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('li')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            for (var a = 0; a < document.querySelectorAll('li').length; a++) {
                if (document.querySelectorAll('li')[a].classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                    let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda