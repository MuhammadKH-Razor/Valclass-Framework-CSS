// property, tag dan value - Muhammad Khoirul Huda

let propertiesFilter = [
    'v-blur-0',
    'v-blur-1',
    'v-blur-2',
    'v-blur-3',
    'v-blur-4',
    'v-blur-full',
    'v-gryscale-0',
    'v-gryscale-1',
    'v-gryscale-2',
    'v-gryscale-3',
    'v-gryscale-4',
    'v-gryscale-full',
    'v-saturate-0',
    'v-saturate-1',
    'v-saturate-2',
    'v-saturate-3',
    'v-saturate-4',
    'v-saturate-full',
    'v-brightness-0',
    'v-brightness-1',
    'v-brightness-2',
    'v-brightness-3',
    'v-brightness-4',
    'v-brightness-full',
    'v-contrast-0',
    'v-contrast-1',
    'v-contrast-2',
    'v-contrast-3',
    'v-contrast-4',
    'v-contrast-full'
]

let valuesFilter = [
    'filter: blur(0px);',
    'filter: blur(2px);',
    'filter: blur(4px);',
    'filter: blur(6px);',
    'filter: blur(8px);',
    'filter: blur(10px);',
    'filter: gryscale(0%);',
    'filter: gryscale(20%);',
    'filter: gryscale(40%);',
    'filter: gryscale(60%);',
    'filter: gryscale(80%);',
    'filter: gryscale(100%);',
    'filter: saturate(0%);',
    'filter: saturate(20%);',
    'filter: saturate(40%);',
    'filter: saturate(60%);',
    'filter: saturate(80%);',
    'filter: saturate(100%);',
    'filter: brightness(0%);',
    'filter: brightness(20%);',
    'filter: brightness(40%);',
    'filter: brightness(60%);',
    'filter: brightness(80%);',
    'filter: brightness(100%);',
    'filter: contrast(0%);',
    'filter: contrast(20%);',
    'filter: contrast(40%);',
    'filter: contrast(60%);',
    'filter: contrast(80%);',
    'filter: contrast(100%);',
]

// pengkondisian

for (var i = 0; i < propertiesFilter.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

        let styles = ` 
    .${propertiesFilter[i]} { 
        ${valuesFilter[i]}
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
                .${propertiesFilter[i]} { 
                    ${valuesFilter[i]}
                }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('mark').length; a++) {
                if (document.querySelectorAll('mark')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('pre').length; a++) {
                if (document.querySelectorAll('pre')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('blockquote').length; a++) {
                if (document.querySelectorAll('blockquote')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
    
    if (document.querySelector('ul')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('ul').length; a++) {
                if (document.querySelectorAll('ul')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('li')) {
        for (var i = 0; i < propertiesFilter.length; i++) {
            for (var a = 0; a < document.querySelectorAll('li').length; a++) {
                if (document.querySelectorAll('li')[a].classList.contains(propertiesFilter[i]) && !document.querySelector('style').innerText.includes(propertiesFilter[i])) {

                    let styles = ` 
            .${propertiesFilter[i]} { 
                ${valuesFilter[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda