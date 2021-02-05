// property, tag dan value - Muhammad Khoirul Huda

let propertiesLineHeight = [
    'v-leading-1',
    'v-leading-1',
    'v-leading-1',
    'v-leading-1',
    'v-leading-none',
    'v-leading-tight',
    'v-leading-snug',
    'v-leading-normal',
    'v-leading-relaxed',
    'v-leading-loose'
]

let valuesLineHeight = [
    'line-height: .75rem',
    'line-height: 1rem',
    'line-height: 1.25rem;',
    'line-height: 1.5rem;',
    'line-height: 1;',
    'line-height: 1.25',
    'line-height: 1.375',
    'line-height: 1.5;',
    'line-height: 1.625;',
    'line-height: 2;'
]

// pengkondisian

for (var i = 0; i < propertiesLineHeight.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

        let styles = ` 
        .${propertiesLineHeight[i]} { 
            ${valuesLineHeight[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesLineHeight.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesLineHeight[i]) && !document.querySelector('style').innerText.includes(propertiesLineHeight[i])) {

                let styles = ` 
            .${propertiesLineHeight[i]} { 
                ${valuesLineHeight[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda