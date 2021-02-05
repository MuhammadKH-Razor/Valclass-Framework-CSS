// property, tag dan value - Muhammad Khoirul Huda

let propertiesPerspective = [
    'v-perspective--1',
    'v-perspective--2',
    'v-perspective--3',
    'v-perspective--4',
    'v-perspective-none',
    'v-perspective-1',
    'v-perspective-2',
    'v-perspective-3',
    'v-perspective-4',
    'v-perspective-origin-top',
    'v-perspective-origin-bottom',
    'v-perspective-origin-left',
    'v-perspective-origin-right',
    'v-perspective-origin-center'
]

let valuesPerspective = [
    'perspective: -20px;',
    'perspective: -40%;',
    'perspective: -60%;',
    'perspective: -80%;',
    'perspective: none;',
    'perspective: 20px;',
    'perspective: 40px;',
    'perspective: 60px;',
    'perspective: 80px;',
    'perspective-origin: top;',
    'perspective-origin: bottom;',
    'perspective-origin: left;',
    'perspective-origin: right;',
    'perspective-origin: center;'
]

// pengkondisian

for (var i = 0; i < propertiesPerspective.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

        let styles = ` 
        .${propertiesPerspective[i]} { 
            ${valuesPerspective[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesPerspective.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesPerspective[i]) && !document.querySelector('style').innerText.includes(propertiesPerspective[i])) {

                let styles = ` 
            .${propertiesPerspective[i]} { 
                ${valuesPerspective[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda