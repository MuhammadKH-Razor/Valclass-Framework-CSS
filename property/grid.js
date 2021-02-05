// property, tag dan value - Muhammad Khoirul Huda

let propertiesRows = [
    'v-row',
    'v-col',
]

let valuesRows = [
    `  
    display: flex;
    padding: 10px;
    background-color: rgb(5, 255, 222);
    grid-gap: 8px;
    `,
    `
    padding: 20px 0;
    flex: 1;
    background-color: rgb(28, 214, 189);
    `
]

// pengkondisian

for (var i = 0; i < propertiesRows.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

        let styles = ` 
        .${propertiesRows[i]} { 
            ${valuesRows[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesRows.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesRows[i]) && !document.querySelector('style').innerText.includes(propertiesRows[i])) {

                let styles = ` 
            .${propertiesRows[i]} { 
                ${valuesRows[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda