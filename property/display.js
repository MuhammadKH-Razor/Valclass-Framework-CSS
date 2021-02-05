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
    'v-d-inline-table ',
    'v-d-grid',
    'v-d-table-column-group',
    'v-d-table-footer-group',
    'v-d-table-header-group',
    'v-d-table-row',
    'v-d-run-i',
    'v-d-table-cell',
    'v-d-table-column',
    'v-d-none',
    'v-d-list-item',
    'v-d-flow-root',
    'v-d-ruby'
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
    'display: run-i;',
    'display: table-cell;',
    'display: table-column;',
    'display: none;',
    'display: list-item;',
    'display: flow-root;',
    'display: ruby;'
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
            if (document.querySelector('div').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesDisplay.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesDisplay[i]) && !document.querySelector('style').innerText.includes(propertiesDisplay[i])) {

                let styles = ` 
            .${propertiesDisplay[i]} { 
                ${valuesDisplay[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda