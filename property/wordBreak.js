// property, tag dan value - Muhammad Khoirul Huda

let propertiesWordBreak = [
    'v-break-normal',
    'v-break-words',
    'v-break-all'
]

let valuesWordBreak = [
  `overflow-wrap: normal; 
   word-break: normal;`,
  'word-break: overflow-wrap: break-word;',
  'word-break: break-all'
]

// pengkondisian

for (var i = 0; i < propertiesWordBreak.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

        let styles = ` 
        .${propertiesWordBreak[i]} { 
            ${valuesWordBreak[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesWordBreak.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesWordBreak[i]) && !document.querySelector('style').innerText.includes(propertiesWordBreak[i])) {

                let styles = ` 
            .${propertiesWordBreak[i]} { 
                ${valuesWordBreak[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda