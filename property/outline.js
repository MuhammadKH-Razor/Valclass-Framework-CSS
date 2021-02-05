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
    'v-b-1',
    'v-b-2',
    'v-b-3',
    'v-b-4',
    'v-bt-1',
    'v-bt-2',
    'v-bt-3',
    'v-bt-4',
    'v-bl-1',
    'v-bl-2',
    'v-bl-3',
    'v-bl-4',
    'v-br-1',
    'v-br-2',
    'v-br-3',
    'v-br-4',
    'v-bb-1',
    'v-bb-2',
    'v-bb-3',
    'v-bb-4',
    'v-outline-dark',
    'v-outline-light',
    'v-outline-danger',
    'v-outline-info',
    'v-outline-primary',
    'v-outline-smooth',
    'v-outline-transparent',
    'v-outline-secondary',
    'v-outline-warning',
    'v-outline-collapse',
    'v-outline-separate',
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
    'outline-color: rgb(49, 49, 49);',
    'outline-color: rgb(248, 247, 247);',
    'outline-color: red;',
    'outline-color: rgb(0, 204, 255);',
    'outline-color: rgb(0, 153, 255);',
    'outline-color: rgba(250, 236, 236, 0.712);',
    'outline-color: transparent;',
    'outline-color: rgb(141, 141, 141);',
    'outline-color: rgb(255, 230, 0);',
    'outline-color: rgb(13, 226, 155);',
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
            if (document.querySelector('div').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda