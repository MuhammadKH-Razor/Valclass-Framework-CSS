// property, tag dan value - Muhammad Khoirul Huda

let propertiesVertical = [
    'v-vertical-baseline',
    'v-vertical-text-top',
    'v-vertical-text-bottom',
    'v-vertical-sub',
    'v-vertical-super'
]

let valuesVertical = [
    'vertical-align: baseline;',
    'vertical-align: text-top;',
    'vertical-align: text-bottom;',
    'vertical-align: sub;',
    'vertical-align: super;'
]

// pengkondisian

for (var i = 0; i < propertiesVertical.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

        let styles = ` 
        .${propertiesVertical[i]} { 
            ${valuesVertical[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesVertical.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesVertical[i]) && !document.querySelector('style').innerText.includes(propertiesVertical[i])) {

                let styles = ` 
            .${propertiesVertical[i]} { 
                ${valuesVertical[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda