// property, tag dan value - Muhammad Khoirul Huda

let propertiesPadding = [
    'v-p-1',
    'v-p-2',
    'v-p-3',
    'v-p-4',
    'v-pt-1',
    'v-pt-2',
    'v-pt-3',
    'v-pt-4',
    'v-pl-1',
    'v-pl-2',
    'v-pl-3',
    'v-pl-4',
    'v-pr-1',
    'v-pr-2',
    'v-pr-3',
    'v-pr-4',
    'v-pb-1',
    'v-pb-2',
    'v-pb-3',
    'v-pb-4'
]

let valuesPadding = [
    'padding: 10px',
    'padding: 20px;',
    'padding: 30px;',
    'padding: 40px;',
    'padding-top: 10px',
    'padding-top: 20px;',
    'padding-top: 30px;',
    'padding-top: 40px;',
    'padding-left: 10px;',
    'padding-left: 20px;',
    'padding-left: 30px;',
    'padding-left: 40px;',
    'padding-right: 10px;',
    'padding-right: 20px;',
    'padding-right: 30px;',
    'padding-right: 40px;',
    'padding-bottom: 10px;',
    'padding-bottom: 20px;',
    'padding-bottom: 30px;',
    'padding-bottom: 40px;',
]

// pengkondisian

for (var i = 0; i < propertiesPadding.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

        let styles = ` 
        .${propertiesPadding[i]} { 
            ${valuesPadding[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda