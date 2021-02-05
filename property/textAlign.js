// property, tag dan value - Muhammad Khoirul Huda

let propertiesTextAligns = [
    'v-text-center',
    'v-text-left',
    'v-text-right',
    'v-text-justify',
]

let valuesTextTextAligns = [
    'text-align: center;',
    'text-align: left;',
    'text-align: right;',
    'text-align: justify;'
]

// pengkondisian

for (var i = 0; i < propertiesTextAligns.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

        let styles = ` 
        .${propertiesTextAligns[i]} { 
            ${valuesTextTextAligns[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesTextAligns.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesTextAligns[i]) && !document.querySelector('style').innerText.includes(propertiesTextAligns[i])) {

                let styles = ` 
            .${propertiesTextAligns[i]} { 
                ${valuesTextTextAligns[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda