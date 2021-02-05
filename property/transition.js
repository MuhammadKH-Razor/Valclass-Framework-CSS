// property, tag dan value - Muhammad Khoirul Huda

let propertiesTransition = [
    'v-transition--1',
    'v-transition--2',
    'v-transition--3',
    'v-transition--4',
    'v-transition--5',
    'v-transition--6',
    'v-transition--7',
    'v-transition--8',
    'v-transition--9',
    'v-transition-1',
    'v-transition-2',
    'v-transition-3',
    'v-transition-4',
]

let valuesTransition = [
    'transition: 0.1s;',
    'transition: 0.2s;',
    'transition: 0.3s;',
    'transition: 0.4s;',
    'transition: 0.5s;',
    'transition: 0.6s;',
    'transition: 0.7s',
    'transition: 0.8s;',
    'transition: 0.9s;',
    'transition: 1s;',
    'transition: 2s;',
    'transition: 3s;',
    'transition: 4s;',
]

// pengkondisian

for (var i = 0; i < propertiesTransition.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

        let styles = ` 
        .${propertiesTransition[i]} { 
            ${valuesTransition[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda