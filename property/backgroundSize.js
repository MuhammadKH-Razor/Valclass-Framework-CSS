// property, tag dan value - Muhammad Khoirul Huda

let propertiesBackgroundSize = [
    'v-bg-auto',
    'v-bg-contain',
    'v-bg-cover',
    'v-bg--1',
    'v-bg--2',
    'v-bg--3',
    'v-bg--4',
    'v-bg--full',
    'v-bg-0',
    'v-bg-1',
    'v-bg-2',
    'v-bg-3',
    'v-bg-4',
    'v-bg-full'
]

let valuesBackgroundSize = [
    'background-size: auto',
    'background-size: contain',
    'background-size: cover',
    'background-size: -20%',
    'background-size: -40%',
    'background-size: -60%',
    'background-size: -80%',
    'background-size: 100%',
    'background-size: 0%',
    'background-size: 20%',
    'background-size: 40%',
    'background-size: 60%',
    'background-size: 80%',
    'background-size: 100%',
]

// pengkondisian

for (var i = 0; i < propertiesBackgroundSize.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

        let styles = ` 
        .${propertiesBackgroundSize[i]} { 
            ${valuesBackgroundSize[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesBackgroundSize.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesBackgroundSize[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundSize[i])) {

                let styles = ` 
            .${propertiesBackgroundSize[i]} { 
                ${valuesBackgroundSize[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda