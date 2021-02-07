// property, tag dan value - Muhammad Khoirul Huda

let propertiesMargins = [
    'v-m-auto',
    'v-m-0',
    'v-m-1',
    'v-m-2',
    'v-m-3',
    'v-m-4',
    'v-mt-auto',
    'v-mt-0',
    'v-mt-1',
    'v-mt-2',
    'v-mt-3',
    'v-mt-4',
    'v-ml-auto',
    'v-ml-0',
    'v-ml-1',
    'v-ml-2',
    'v-ml-3',
    'v-ml-4',
    'v-mr-auto',
    'v-mr-0',
    'v-mr-1',
    'v-mr-2',
    'v-mr-3',
    'v-mr-4',
    'v-mb-auto',
    'v-mb-0',
    'v-mb-1',
    'v-mb-2',
    'v-mb-3',
    'v-mb-4',
]

let valuesMargins = [
    'margin: auto;',
    'margin: 0px;',
    'margin: 10px;',
    'margin: 20px;',
    'margin: 30px;',
    'margin: 40px;',
    'margin-top: auto;',
    'margin-top: 0px;',
    'margin-top: 10px;',
    'margin-top: 20px;',
    'margin-top: 30px;',
    'margin-top: 40px;',
    'margin-left: auto;',
    'margin-left: 0px;',
    'margin-left: 10px;',
    'margin-left: 20px;',
    'margin-left: 30px;',
    'margin-left: 40px;',
    'margin-right: auto;',
    'margin-right: 0px;',
    'margin-right: 10px;',
    'margin-right: 20px;',
    'margin-right: 30px;',
    'margin-right: 40px;',
    'margin-bottom: auto;',
    'margin-bottom: 0px;',
    'margin-bottom: 10px;',
    'margin-bottom: 20px;',
    'margin-bottom: 30px;',
    'margin-bottom: 40px;',
]

// pengkondisian

for (var i = 0; i < propertiesMargins.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

        let styles = ` 
    .${propertiesMargins[i]} { 
        ${valuesMargins[i]}
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
                .${propertiesMargins[i]} { 
                    ${valuesMargins[i]}
                }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('mark').length; a++) {
                if (document.querySelectorAll('mark')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('pre').length; a++) {
                if (document.querySelectorAll('pre')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('blockquote').length; a++) {
                if (document.querySelectorAll('blockquote')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                    let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda