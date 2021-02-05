// property, tag dan value - Muhammad Khoirul Huda

let propertiesFlex = [
    'v-flex--1',
    'v-flex--2',
    'v-flex--3',
    'v-flex--4',
    'v-flex-0',
    'v-flex-1',
    'v-flex-2',
    'v-flex-3',
    'v-flex-4',
    'v-flex-auto',
    'v-flex-content',
    'v-flex-none',
    'v-flex-basis-auto',
    'v-flex-basis-content',
    'v-flex-wrap',
    'v-flex-nowrap',
    'v-flex-wrap-reverse',
    'v-flex-direction-column',
    'v-flex-direction-column-reverse',
    'v-flex-direction-row',
    'v-flex-direction-row-reverse',
    'v-flex-shrink-inherit',
    'v-flex-shrink-initial'
]

let valuesFlex = [
    'flex: 0.20;',
    'flex: 0.40;',
    'flex: 0.60;',
    'flex: 0.80;',
    'flex: 0;',
    'flex: 1;',
    'flex: 2;',
    'flex: 3;',
    'flex: 4;',
    'flex: auto;',
    'flex: content;',
    'flex: none;',
    'flex-basis: auto;',
    'flex-basis: content;',
    'flex-wrap: wrap;',
    'flex-wrap: nowrap;',
    'flex-wrap: wrap-reverse;',
    'flex-direction: column;',
    'flex-direction: column-reverse;',
    'flex-direction: row;',
    'flex-direction: row-reverse;',
    'flex-shrink: inherit;',
    'flex-shrink: initial;'
]

// pengkondisian

for (var i = 0; i < propertiesFlex.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

        let styles = ` 
        .${propertiesFlex[i]} { 
            ${valuesFlex[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesFlex.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesFlex[i]) && !document.querySelector('style').innerText.includes(propertiesFlex[i])) {

                let styles = ` 
            .${propertiesFlex[i]} { 
                ${valuesFlex[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda