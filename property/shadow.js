// property, tag dan value - Muhammad Khoirul Huda

let propertiesBoxShadow = [
    'v-box-shadow-sm',
    'v-box-shadow-md',
    'v-box-shadow-lg',
    'v-box-shadow-xl',
    'v-text-shadow-sm',
    'v-text-shadow-ms',
    'v-text-shadow-lg',
    'v-text-shadow-xl'
]

let valuesBoxShadow = [
    'box-shadow: 1px 1px 10px rgb(235, 235, 235);',
    'box-shadow: 1px 1px 10px rgb(204, 204, 204);',
    'box-shadow:1px 1px 10px rgb(179, 178, 178);',
    'box-shadow: 1px 1px 10px rgb(146, 146, 146);',
    'text-shadow: 1px 1px 10px rgb(235, 235, 235);',
    'text-shadow: 1px 1px 10px rgb(204, 204, 204);',
    'text-shadow:1px 1px 10px rgb(179, 178, 178);',
    'text-shadow: 1px 1px 10px rgb(146, 146, 146);'
]

// pengkondisian

for (var i = 0; i < propertiesBoxShadow.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

        let styles = ` 
        .${propertiesBoxShadow[i]} { 
            ${valuesBoxShadow[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesBoxShadow.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesBoxShadow[i]) && !document.querySelector('style').innerText.includes(propertiesBoxShadow[i])) {

                let styles = ` 
            .${propertiesBoxShadow[i]} { 
                ${valuesBoxShadow[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda