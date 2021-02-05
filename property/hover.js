// property, tag dan value - Muhammad Khoirul Huda

let propertiesHover = [
    'v-hover-scale',
    'v-hover-bounce',
    'v-hover-pulse'
]

let valuesHover = [
    `
    v-hover-scale {
        transition: 0.3s;
        transform: scale(1);
    }
    v-hover-scale:hover {
        transition: 0.3s;
        transform: scale(0.97);
    }`,
    `
    v-hover-bounce {
        transition: 0.3s;
        margin-top: 0px;
    }
    v-hover-bounce:hover {
        transition: 0.3s;
        margin-top: -10px;
    }`,
    `
    v-hover-pulse {
        transition: 0.3s;
        opacity: 1;
    }
    v-hover-pulse:hover {
        transition: 0.3s;
        opacity: 0.7;
    }`,
]

// pengkondisian

for (var i = 0; i < propertiesHover.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

        let styles = ` 
        .${propertiesHover[i]} { 
            ${valuesHover[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                let styles = ` 
            .${propertiesHover[i]} { 
                ${valuesHover[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda