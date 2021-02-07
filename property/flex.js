// property, tag dan value - Muhammad Khoirul Huda

let propertiesFlex = [
    'v-flex--1',
    'v-flex--2',
    'v-flex--3',
    'v-flex--4',
    'v-flex-0',
    'v-flex-1',
    'v-flex-2',
    'v-flex-3',
    'v-flex-4',
    'v-flex-auto',
    'v-flex-content',
    'v-flex-none',
    'v-flex-basis-auto',
    'v-flex-basis-content',
    'v-flex-wrap',
    'v-flex-nowrap',
    'v-flex-wrap-reverse',
    'v-flex-direction-column',
    'v-flex-direction-column-reverse',
    'v-flex-direction-row',
    'v-flex-direction-row-reverse',
    'v-flex-shrink-inherit',
    'v-flex-shrink-initial'
]

let valuesFlex = [
    'flex: 0.20;',
    'flex: 0.40;',
    'flex: 0.60;',
    'flex: 0.80;',
    'flex: 0;',
    'flex: 1;',
    'flex: 2;',
    'flex: 3;',
    'flex: 4;',
    'flex: auto;',
    'flex: content;',
    'flex: none;',
    'flex-basis: auto;',
    'flex-basis: content;',
    'flex-wrap: wrap;',
    'flex-wrap: nowrap;',
    'flex-wrap: wrap-reverse;',
    'flex-direction: column;',
    'flex-direction: column-reverse;',
    'flex-direction: row;',
    'flex-direction: row-reverse;',
    'flex-shrink: inherit;',
    'flex-shrink: initial;'
]

// pengkondisian

for (var i = 0; i < propertiesFlex.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

        let styles = ` 
    .${propertiesFlex[i]} { 
        ${valuesFlex[i]}
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
                .${propertiesFlex[i]} { 
                    ${valuesFlex[i]}
                }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('mark').length; a++) {
                if (document.querySelectorAll('mark')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('pre').length; a++) {
                if (document.querySelectorAll('pre')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('blockquote').length; a++) {
                if (document.querySelectorAll('blockquote')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                    let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda