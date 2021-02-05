// property, tag dan value - Muhammad Khoirul Huda

let propertiesBgColors = [
    'v-dark',
    'v-light',
    'v-danger',
    'v-info',
    'v-primary',
    'v-smooth',
    'v-transparent',
    'v-secondary',
    'v-warning',
    'v-green'
]

let valuesBgColors = [
    'background-color: rgb(49, 49, 49);',
    'background-color: rgb(248, 247, 247);',
    'background-color: red;',
    'background-color: rgb(6, 164, 255);',
    'background-color: rgb(0, 153, 255);',
    'background-color: rgba(250, 236, 236, 0.712);',
    'background-color: transparent;',
    'background-color: rgb(141, 141, 141);',
    'background-color: rgb(255, 230, 0);',
    'background-color: rgb(13, 226, 155);'
]

// pengkondisian


for (var i = 0; i < propertiesBgColors.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

        let styles = ` 
        .${propertiesBgColors[i]} { 
            ${valuesBgColors[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesBgColors.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesBgColors[i]) && !document.querySelector('style').innerText.includes(propertiesBgColors[i])) {

                let styles = ` 
            .${propertiesBgColors[i]} { 
                ${valuesBgColors[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda