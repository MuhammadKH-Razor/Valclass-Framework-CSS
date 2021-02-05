// property, tag dan value - Muhammad Khoirul Huda

let propertiesActive = [
    'v-active-scale',
    'v-active-bounce',
    'v-active-pulse'
]

let valuesActive = [
    `
    v-hover-scale {
        transition: 0.3s;
        transform: scale(1);
    }
    v-hover-scale:active {
        transition: 0.3s;
        transform: scale(0.97);
    }`,
    `
    v-hover-bounce {
        transition: 0.3s;
        margin-top: 0px;
    }
    v-hover-bounce:active {
        transition: 0.3s; 
        margin-top: -10px;
    }`,
    `
    v-hover-pulse {
        transition: 0.3s;
        opacity: 1;
    }
    v-hover-pulse:active {
        transition: 0.3s;
        opacity: 0.7;
    }`,
]

// pengkondisian

for (var i = 0; i < propertiesActive.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

        let styles = ` 
        .${propertiesActive[i]} { 
            ${valuesActive[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesActive.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesActive[i]) && !document.querySelector('style').innerText.includes(propertiesActive[i])) {

                let styles = ` 
            .${propertiesActive[i]} { 
                ${valuesActive[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda