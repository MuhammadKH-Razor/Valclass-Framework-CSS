// property, tag dan value - Muhammad Khoirul Huda

let propertiesListStyle = [
    'v-list-none',
    'v-list-square',
    'v-list-circle',
    'v-list-desc',
    'v-list-decimal',
    'v-list-armenian',
    'v-list-georgian'
]

let valuesListStyle = [
    'list-style-type: none',
    'list-style-type: square',
    'list-style-type: circle;',
    'list-style-type: desc;',
    'list-style-type: decimal;',
    'list-style-type: armenian',
    'list-style-type: georgian'
]

// pengkondisian

for (var i = 0; i < propertiesListStyle.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

        let styles = ` 
        .${propertiesListStyle[i]} { 
            ${valuesListStyle[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesListStyle.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesListStyle[i]) && !document.querySelector('style').innerText.includes(propertiesListStyle[i])) {

                let styles = ` 
            .${propertiesListStyle[i]} { 
                ${valuesListStyle[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda