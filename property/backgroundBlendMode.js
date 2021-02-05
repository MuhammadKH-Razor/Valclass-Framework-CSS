// property, tag dan value - Muhammad Khoirul Huda

let propertiesBackgroundBlend = [
    'v-bg-blend-color',
    'v-bg-blend-multiply',
    'v-bg-blend-screen',
    'v-bg-blend-normal',
    'v-bg-blend-darken',
    'v-bg-blend-lighten'
]

let valuesBackgroundBlend = [
    'background-blend-mode: color',
    'background-blend-mode: multiply',
    'background-blend-mode: screen',
    'background-blend-mode: normal',
    'background-blend-mode: darken',
    'background-blend-mode: lighten'
]

// pengkondisian

for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

        let styles = ` 
        .${propertiesBackgroundBlend[i]} { 
            ${valuesBackgroundBlend[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesBackgroundBlend.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesBackgroundBlend[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundBlend[i])) {

                let styles = ` 
            .${propertiesBackgroundBlend[i]} { 
                ${valuesBackgroundBlend[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda