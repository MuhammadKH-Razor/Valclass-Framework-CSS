// property, tag dan value - Muhammad Khoirul Huda

let propertiesWidthHeight = [
    'v-width-1',
    'v-width-2',
    'v-width-3',
    'v-width-4',
    'v-width-full',
    'v-width-screen',
    'v-width-min',
    'v-width-max',
    'v-height-1',
    'v-height-2',
    'v-height-3',
    'v-height-4',
    'v-height-full',
    'v-height-screen',
    'v-height-min',
    'v-height-max',
]

let valuesWidthHeight = [
    'width: 20%;',
    'width: 40%;',
    'width: 60%;',
    'width: 80%;',
    'width: 100%;',
    'width: 100vw;',
    'width: min-content;',
    'width: max-content;',
    'height: 20%;',
    'height: 40%;',
    'height: 60%;',
    'height: 80%;',
    'height: 100%;',
    'height: 100vw;',
    'height: min-content;',
    'height: max-content;',
]

// pengkondisian

for (var i = 0; i < propertiesWidthHeight.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

        let styles = ` 
        .${propertiesWidthHeight[i]} { 
            ${valuesWidthHeight[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesWidthHeight.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesWidthHeight[i]) && !document.querySelector('style').innerText.includes(propertiesWidthHeight[i])) {

                let styles = ` 
            .${propertiesWidthHeight[i]} { 
                ${valuesWidthHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda