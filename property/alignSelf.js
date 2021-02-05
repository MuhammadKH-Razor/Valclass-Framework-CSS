// property, tag dan value - Muhammad Khoirul Huda

let propertiesAlignSelf = [
    'v-self-center',
    'v-self-flex-end',
    'v-self-flex-start',
    'v-self-stretch',
    'v-self-baseline',
    'v-self-auto'
]

let valuesAlignSelf = [
    'align-self: center;',
    'align-self: flex-end;',
    'align-self: flex-start;',
    'align-self: stretch;',
    'align-self: baseline;',
    'align-self: auto;',
]

// pengkondisian

for (var i = 0; i < propertiesAlignSelf.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

        let styles = ` 
        .${propertiesAlignSelf[i]} { 
            ${valuesAlignSelf[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesAlignSelf.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesAlignSelf[i]) && !document.querySelector('style').innerText.includes(propertiesAlignSelf[i])) {

                let styles = ` 
            .${propertiesAlignSelf[i]} { 
                ${valuesAlignSelf[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda