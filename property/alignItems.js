// property, tag dan value - Muhammad Khoirul Huda

let propertiesAlignItems = [
    'v-items-center',
    'v-items-flex-end',
    'v-items-flex-start',
    'v-items-stretch',
    'v-items-baseline'
]

let valuesAlignItems = [
    'align-items: center;',
    'align-items: flex-end;',
    'align-items: flex-start;',
    'align-items: stretch;',
    'align-items: baseline;'
]

// pengkondisian

for (var i = 0; i < propertiesAlignItems.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

        let styles = ` 
        .${propertiesAlignItems[i]} { 
            ${valuesAlignItems[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesAlignItems.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesAlignItems[i]) && !document.querySelector('style').innerText.includes(propertiesAlignItems[i])) {

                let styles = ` 
            .${propertiesAlignItems[i]} { 
                ${valuesAlignItems[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda