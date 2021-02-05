// property, tag dan value - Muhammad Khoirul Huda

let propertiesJustify = [
    'v-justify-center',
    'v-justify-left',
    'v-justify-right',
    'v-justify-safe',
    'v-justify-unsafe',
    'v-justify-start',
    'v-justify-end',
    'v-justify-flex-start',
    'v-justify-flex-end',
    'v-justify-between',
    'v-justify-around',
    'v-justify-evenly',
    'v-justify-stretch',
    'v-justify-last-baseline'
]

let valuesJustify = [
    'justify-content: center',
    'justify-content: left',
    'justify-content: right;',
    'justify-content: safe;',
    'justify-content: unsafe;',
    'justify-content: start',
    'justify-content: end',
    'justify-content: flex-start;',
    'justify-content: flex-end;',
    'justify-content: space-between;',
    'justify-content: space-around',
    'justify-content: space-evenly',
    'justify-content: stretch;',
    'justify-content: last baseline;'
  
]

// pengkondisian

for (var i = 0; i < propertiesJustify.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

        let styles = ` 
        .${propertiesJustify[i]} { 
            ${valuesJustify[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                let styles = ` 
            .${propertiesJustify[i]} { 
                ${valuesJustify[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda