// property, tag dan value - Muhammad Khoirul Huda

let propertiesDirections = [
    'v-decoration-none',
    'v-decoration-dashed',
    'v-decoration-double',
    'v-decoration-dotted',
    'v-decoration-overline',
    'v-decoration-solid',
    'v-decoration-underline',
    'v-decoration-wavy'
]

let valuesDirections = [
    'text-decoration: none',
    'text-decoration: dashed;',
    'text-decoration: double;',
    'text-decoration: dotted;',
    'text-decoration: overline;',
    'text-decoration: solid;',
    'text-decoration: underline;',
    'text-decoration: wavy;'
]

// pengkondisian

for (var i = 0; i < propertiesDirections.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

        let styles = ` 
        .${propertiesDirections[i]} { 
            ${valuesDirections[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesDirections.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesDirections[i]) && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {

                let styles = ` 
            .${propertiesDirections[i]} { 
                ${valuesDirections[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda