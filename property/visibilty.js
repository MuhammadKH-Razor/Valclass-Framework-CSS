// property, tag dan value - Muhammad Khoirul Huda

let propertiesvisibility = [
    'v-visibility-collapse',
    'v-visibility-hidden',
    'v-visibility-visible'
]

let valuesvisibility = [
    'visibility: collapse;',
    'visibility: hidden;',
    'visibility: visible;',
]

// pengkondisian

for (var i = 0; i < propertiesvisibility.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

        let styles = ` 
        .${propertiesvisibility[i]} { 
            ${valuesvisibility[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesvisibility.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesvisibility[i]) && !document.querySelector('style').innerText.includes(propertiesvisibility[i])) {

                let styles = ` 
            .${propertiesvisibility[i]} { 
                ${valuesvisibility[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda