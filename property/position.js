// property, tag dan value - Muhammad Khoirul Huda

let propertiesPosition = [
    'v-relative',
    'v-absolute',
    'v-fixed',
    'v-sticky',
    'v-static'
]

let valuesPosition = [
    'position: relative;',
    'position: absolute;',
    'position: fixed;',
    'position: sticky;',
    'position: static;'
]


// pengecekan agar tidak ada selector css yang sama


for (var i = 0; i < propertiesPosition.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

        let styles = ` 
        .${propertiesPosition[i]} { 
            ${valuesPosition[i]}
        }`;
        
        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {
    
    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesPosition.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesPosition[i]) && !document.querySelector('style').innerText.includes(propertiesPosition[i])) {

                let styles = ` 
            .${propertiesPosition[i]} { 
                ${valuesPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 500)

// akhir dari pengkondisian - Muhammad Khoirul Huda