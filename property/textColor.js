// property, tag dan value - Muhammad Khoirul Huda

let propertiesTextColors = [
    'v-text-dark',
    'v-text-light',
    'v-text-danger',
    'v-text-info',
    'v-text-primary',
    'v-text-smooth',
    'v-text-transparent',
    'v-text-secondary',
    'v-text-warning',
    'v-text-green'
]

let valuesTextColors = [
    'color: #464855;',
    'color: #babfc7;',
    'color: #f8313c;',
    'color: #28afd0;',
    'color: #6967ce;',
    'color: rgba(250, 236, 236, 0.712);',
    'color: transparent;',
    'color: #6b6f80;',
    'color: #fdb901;',
    'color: #5ed84f;'
]

// pengkondisian

for (var i = 0; i < propertiesTextColors.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

        let styles = ` 
    .${propertiesTextColors[i]} { 
        ${valuesTextColors[i]}
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
                .${propertiesTextColors[i]} { 
                    ${valuesTextColors[i]}
                }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('mark').length; a++) {
                if (document.querySelectorAll('mark')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('pre').length; a++) {
                if (document.querySelectorAll('pre')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('blockquote').length; a++) {
                if (document.querySelectorAll('blockquote')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
    
    if (document.querySelector('ul')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('ul').length; a++) {
                if (document.querySelectorAll('ul')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('li')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            for (var a = 0; a < document.querySelectorAll('li').length; a++) {
                if (document.querySelectorAll('li')[a].classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                    let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda