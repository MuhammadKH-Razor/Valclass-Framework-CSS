// property, tag dan value - Muhammad Khoirul Huda

let propertiesBackgroundPosition = [
    'v-bg-center',
    'v-bg-top',
    'v-bg-left',
    'v-bg-right',
    'v-bg-bottom',
    'v-bg--1',
    'v-bg--2',
    'v-bg--3',
    'v-bg--4',
    'v-bg--full',
    'v-bg-0',
    'v-bg-1',
    'v-bg-2',
    'v-bg-3',
    'v-bg-4',
    'v-bg-full'
]

let valuesBackgroundPosition = [
    'background-position: center',
    'background-position: top',
    'background-position: left',
    'background-position: right',
    'background-position: bottom',
    'background-position: -20%',
    'background-position: -40%',
    'background-position: -60%',
    'background-position: -80%',
    'background-position: 100%',
    'background-position: 0%',
    'background-position: 20%',
    'background-position: 40%',
    'background-position: 60%',
    'background-position: 80%',
    'background-position: 100%',
]

// pengkondisian

for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

        let styles = ` 
        .${propertiesBackgroundPosition[i]} { 
            ${valuesBackgroundPosition[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesBackgroundPosition.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesBackgroundPosition[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundPosition[i])) {

                let styles = ` 
            .${propertiesBackgroundPosition[i]} { 
                ${valuesBackgroundPosition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda