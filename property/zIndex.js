// property, tag dan value - Muhammad Khoirul Huda

let propertiesIndex = [
    'v-index--1',
    'v-index--2',
    'v-index--3',
    'v-index--4',
    'v-index-0',
    'v-index-1',
    'v-index-2',
    'v-index-3',
    'v-index-4'
    
]

let valuesIndex = [
    'z-index: -1;',
    'z-index: -2;',
    'z-index: -3;',
    'z-index: -4;',
    'z-index: 0;',
    'z-index: 1;',
    'z-index: 2;',
    'z-index: 3;',
    'z-index: 4;'
]

// pengkondisian

for (var i = 0; i < propertiesIndex.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

        let styles = ` 
        .${propertiesIndex[i]} { 
            ${valuesIndex[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesIndex.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesIndex[i]) && !document.querySelector('style').innerText.includes(propertiesIndex[i])) {

                let styles = ` 
            .${propertiesIndex[i]} { 
                ${valuesIndex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda