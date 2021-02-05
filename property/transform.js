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
    '-v-translateZ-middle',
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
  'transform: skew(3deg)',
  'transform: skew(6deg)',
  'transform: skew(9deg)',
  'transform: skew(12deg)',
  'transform: skew(-3deg)',
  'transform: skew(-6deg)',
  'transform: skew(-9deg)',
  'transform: skew(-12deg)',
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
  'transform: translateZ(-50%)',
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
            if (document.querySelector('div').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesTransform.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesTransform[i]) && !document.querySelector('style').innerText.includes(propertiesTransform[i])) {

                let styles = ` 
            .${propertiesTransform[i]} { 
                ${valuesTransform[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda