// property, tag dan value - Muhammad Khoirul Huda

let propertiesBackgroundRepeat = [
    'v-bg-repeat',
    'v-bg-norepeat'
]

let valuesBackgroundRepeat = [
    'background-repeat: repeat',
    'background-repeat: no-repeat',
]

// pengkondisian

for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

        let styles = ` 
        .${propertiesBackgroundRepeat[i]} { 
            ${valuesBackgroundRepeat[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesBackgroundRepeat.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesBackgroundRepeat[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundRepeat[i])) {

                let styles = ` 
            .${propertiesBackgroundRepeat[i]} { 
                ${valuesBackgroundRepeat[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda