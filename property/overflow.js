// property, tag dan value - Muhammad Khoirul Huda

let propertiesOverflows = [
    'v-overflow-hidden',
    'v-overflow-scroll',
    'v-overflow-auto',
    'v-overflow-visible',
    'v-overflowX-hidden',
    'v-overflowX-scroll',
    'v-overflowX-auto',
    'v-overflowX-visible',
    'v-overflowY-hidden',
    'v-overflowY-scroll',
    'v-overflowY-auto',
    'v-overflowY-visible',
    'v-overflow-break-word',
    'v-overflow-normal',
    'v-overflow-moz-unscrollable',
]

let valuesOverflows = [
    'overflow: hidden;',
    'overflow: scroll;',
    'overflow: auto;',
    'overflow: visible;',
    'overflow-x: hidden;',
    'overflow-x: scroll;',
    'overflow-x: auto;',
    'overflow-x: visible;',
    'overflow-y: hidden;',
    'overflow-y: scroll;',
    'overflow-y: auto;',
    'overflow-y: visible;',
    'overflow-wrap: break-word;',
    'overflow-wrap: normal;',
    'overflow: moz-hidden-unscrollable;',
]

// pengkondisian

for (var i = 0; i < propertiesOverflows.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

        let styles = ` 
        .${propertiesOverflows[i]} { 
            ${valuesOverflows[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesOverflows.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesOverflows[i]) && !document.querySelector('style').innerText.includes(propertiesOverflows[i])) {

                let styles = ` 
            .${propertiesOverflows[i]} { 
                ${valuesOverflows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda