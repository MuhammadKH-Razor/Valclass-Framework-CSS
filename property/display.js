// property, tag dan value - Muhammad Khoirul Huda

let propertiesDisplay = [
    'v-d-flex',
    'v-d-block',
    'v-d-flexbox',
    'v-d-inline',
    'v-d-table',
    'v-d-inline-flex',
    'v-d-inline-block',
    'v-d-inline-flexbox',
    'v-d-inline-table',
    'v-d-grid',
    'v-d-table-column-group',
    'v-d-table-footer-group',
    'v-d-table-header-group',
    'v-d-table-row',
    'v-d-table-cell',
    'v-d-table-column',
    'v-d-none',
    'v-d-flow-root'
]

let valuesDisplay = [
    'display: flex',
    'display: block;',
    'display: flexbox;',
    'display: inline;',
    'display: table',
    'display: inline-flex;',
    'display: inline-block;',
    'display: inline-flexbox;',
    'display: inline-table;',
    'display: grid;',
    'display: table-column-group;',
    'display: table-footer-group;',
    'display: table-header-group;',
    'display: table-row;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
    'display: flow-root;'
]

// pengkondisian

for (var i = 0; i < propertiesDisplay.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

        let styles = ` 
    .${propertiesDisplay[i]} { 
        ${valuesDisplay[i]}
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
                .${propertiesDisplay[i]} { 
                    ${valuesDisplay[i]}
                }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('mark').length; a++) {
                if (document.querySelectorAll('mark')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('pre').length; a++) {
                if (document.querySelectorAll('pre')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('blockquote').length; a++) {
                if (document.querySelectorAll('blockquote')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
    
    if (document.querySelector('ul')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('ul').length; a++) {
                if (document.querySelectorAll('ul')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('li')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            for (var a = 0; a < document.querySelectorAll('li').length; a++) {
                if (document.querySelectorAll('li')[a].classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                    let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda