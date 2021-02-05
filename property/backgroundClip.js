// property, tag dan value - Muhammad Khoirul Huda

let propertiesBackgroundClip = [
    'v-bg-clip-border',
    'v-bg-clip-padding',
    'v-bg-clip-content',
    'v-bg-clip-text'
]

let valuesBackgroundClip = [
    'background-clip: border-box',
    'background-clip: padding-box',
    'background-clip: content-box',
    'background-clip: text'
]

// pengkondisian

for (var i = 0; i < propertiesBackgroundClip.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

        let styles = ` 
        .${propertiesBackgroundClip[i]} { 
            ${valuesBackgroundClip[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesBackgroundClip.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesBackgroundClip[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundClip[i])) {

                let styles = ` 
            .${propertiesBackgroundClip[i]} { 
                ${valuesBackgroundClip[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda