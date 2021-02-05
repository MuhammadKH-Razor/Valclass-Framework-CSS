// property, tag dan value - Muhammad Khoirul Huda

let propertiesPages = [
    'v-page-after-always',
    'v-page-after-auto',
    'v-page-after-avoid',
    'v-page-after-left',
    'v-page-after-right',
    'v-page-inside-auto',
    'v-page-inside-avoid',
    'v-page-before-always',
    'v-page-before-auto',
    'v-page-before-avoid',
    'v-page-before-left',
    'v-page-before-right',
]

let valuesPages = [
    'page-break-after: always;',
    'page-break-after: auto;',
    'page-break-after: avoid;',
    'page-break-after: left;',
    'page-break-after: right;',
    'page-break-inside: auto;',
    'page-break-inside: avoid;',
    'page-break-before: always;',
    'page-break-before: auto;',
    'page-break-before: avoid;',
    'page-break-before: left;',
    'page-break-before: right;',
]

// pengkondisian

for (var i = 0; i < propertiesPages.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

        let styles = ` 
        .${propertiesPages[i]} { 
            ${valuesPages[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesPages.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesPages[i]) && !document.querySelector('style').innerText.includes(propertiesPages[i])) {

                let styles = ` 
            .${propertiesPages[i]} { 
                ${valuesPages[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda