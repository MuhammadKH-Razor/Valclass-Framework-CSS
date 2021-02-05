// property, tag dan value - Muhammad Khoirul Huda

let propertiesMargins = [
    'v-m-auto',
    'v-m-0',
    'v-m-1',
    'v-m-2',
    'v-m-3',
    'v-m-4',
    'v-mt-auto',
    'v-mt-0',
    'v-mt-1',
    'v-mt-2',
    'v-mt-3',
    'v-mt-4',
    'v-ml-auto',
    'v-ml-0',
    'v-ml-1',
    'v-ml-2',
    'v-ml-3',
    'v-ml-4',
    'v-mr-auto',
    'v-mr-0',
    'v-mr-1',
    'v-mr-2',
    'v-mr-3',
    'v-mr-4',
    'v-mb-auto',
    'v-mb-0',
    'v-mb-1',
    'v-mb-2',
    'v-mb-3',
    'v-mb-4',
]

let valuesMargins = [
    'margin: auto;',
    'margin: 0px;',
    'margin: 10px;',
    'margin: 20px;',
    'margin: 30px;',
    'margin: 40px;',
    'margin-top: auto;',
    'margin-top: 0px;',
    'margin-top: 10px;',
    'margin-top: 20px;',
    'margin-top: 30px;',
    'margin-top: 40px;',
    'margin-left: auto;',
    'margin-left: 0px;',
    'margin-left: 10px;',
    'margin-left: 20px;',
    'margin-left: 30px;',
    'margin-left: 40px;',
    'margin-right: auto;',
    'margin-right: 0px;',
    'margin-right: 10px;',
    'margin-right: 20px;',
    'margin-right: 30px;',
    'margin-right: 40px;',
    'margin-bottom: auto;',
    'margin-bottom: 0px;',
    'margin-bottom: 10px;',
    'margin-bottom: 20px;',
    'margin-bottom: 30px;',
    'margin-bottom: 40px;',
]

// pengkondisian

for (var i = 0; i < propertiesMargins.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

        let styles = ` 
        .${propertiesMargins[i]} { 
            ${valuesMargins[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesMargins.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesMargins[i]) && !document.querySelector('style').innerText.includes(propertiesMargins[i])) {

                let styles = ` 
            .${propertiesMargins[i]} { 
                ${valuesMargins[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda