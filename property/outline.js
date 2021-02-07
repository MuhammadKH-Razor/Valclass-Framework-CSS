// property, tag dan value - Muhammad Khoirul Huda

let propertiesOutlines = [
    'v-outline-style-dotted',
    'v-outline-style-double',
    'v-outline-style-groove',
    'v-outline-style-solid',
    'v-outline-style-ridge',
    'v-outline-style-hidden',
    'v-radius-sm',
    'v-radius-md',
    'v-radius-lg',
    'v-radius-full',
    'v-outline-1',
    'v-outline-2',
    'v-outline-3',
    'v-outline-4',
    'v-outline-top-1',
    'v-outline-top-2',
    'v-outline-top-3',
    'v-outline-top-4',
    'v-outline-left-1',
    'v-outline-left-2',
    'v-outline-left-3',
    'v-outline-left-4',
    'v-outline-right-1',
    'v-outline-right-2',
    'v-outline-right-3',
    'v-outline-right-4',
    'v-outline-bottom-1',
    'v-outline-bottom-2',
    'v-outline-bottom-3',
    'v-outline-bottom-4',
    'v-outline-dark',
    'v-outline-light',
    'v-outline-danger',
    'v-outline-info',
    'v-outline-primary',
    'v-outline-smooth',
    'v-outline-transparent',
    'v-outline-secondary',
    'v-outline-warning',
    'v-outline-green',
    'v-outline-collapse',
    'v-outline-separate'
]

let valuesOutlines = [
    'outline-style: dotted;',
    'outline-style: double',
    'outline-style: groove;',
    'outline-style: solid',
    'outline-style: ridge;',
    'outline-style: hidden;',
    'outline-radius: 5px;',
    'outline-radius: 10px;',
    'outline-radius: 15px;',
    'outline-radius: 100%;',
    'outline: 1px;',
    'outline: 2px;',
    'outline: 3px;',
    'outline: 4px;',
    'outline-top: 1px;',
    'outline-top: 2px;',
    'outline-top: 3px;',
    'outline-top: 4px;',
    'outline-left: 1px;',
    'outline-left: 2px;',
    'outline-left: 3px;',
    'outline-left: 4px;',
    'outline-right: 1px;',
    'outline-right: 2px;',
    'outline-right: 3px;',
    'outline-right: 4px;',
    'outline-bottom: 1px;',
    'outline-bottom: 2px;',
    'outline-bottom: 3px;',
    'outline-bottom: 4px;',
    'outline-color: #464855;',
    'outline-color: #babfc7;',
    'outline-color: #f8313c ;',
    'outline-color: #28afd0;',
    'outline-color: #6967ce;',
    'outline-color: rgba(250, 236, 236, 0.712);',
    'outline-color: transparent;',
    'outline-color: #6b6f80;',
    'outline-color: #fdb901;',
    'outline-color: #5ed84f;',
    'outline-collapse: collapse;',
    'outline-collapse: separate'
]

// pengkondisian

for (var i = 0; i < propertiesOutlines.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

        let styles = ` 
    .${propertiesOutlines[i]} { 
        ${valuesOutlines[i]}
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
                .${propertiesOutlines[i]} { 
                    ${valuesOutlines[i]}
                }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('mark').length; a++) {
                if (document.querySelectorAll('mark')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('pre').length; a++) {
                if (document.querySelectorAll('pre')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('blockquote').length; a++) {
                if (document.querySelectorAll('blockquote')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
    
    if (document.querySelector('ul')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('ul').length; a++) {
                if (document.querySelectorAll('ul')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('li')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('li').length; a++) {
                if (document.querySelectorAll('li')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda