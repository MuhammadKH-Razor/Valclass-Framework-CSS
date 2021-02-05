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
    'color: rgb(49, 49, 49);',
    'color: rgb(248, 247, 247);',
    'color: red;',
    'color: rgb(6, 164, 255);',
    'color: rgb(0, 153, 255);',
    'color: rgba(250, 236, 236, 0.712);',
    'color: transparent;',
    'color: rgb(141, 141, 141);',
    'color: rgb(255, 230, 0);',
    'color: rgb(13, 226, 155);'
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
            if (document.querySelector('div').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesTextColors.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesTextColors[i]) && !document.querySelector('style').innerText.includes(propertiesTextColors[i])) {

                let styles = ` 
            .${propertiesTextColors[i]} { 
                ${valuesTextColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda