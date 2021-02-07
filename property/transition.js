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
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
                .${propertiesTransition[i]} { 
                    ${valuesTransition[i]}
                }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('mark').length; a++) {
                if (document.querySelectorAll('mark')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('pre').length; a++) {
                if (document.querySelectorAll('pre')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('blockquote').length; a++) {
                if (document.querySelectorAll('blockquote')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
    
    if (document.querySelector('ul')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('ul').length; a++) {
                if (document.querySelectorAll('ul')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('li')) {
        for (var i = 0; i < propertiesTransition.length; i++) {
            for (var a = 0; a < document.querySelectorAll('li').length; a++) {
                if (document.querySelectorAll('li')[a].classList.contains(propertiesTransition[i]) && !document.querySelector('style').innerText.includes(propertiesTransition[i])) {

                    let styles = ` 
            .${propertiesTransition[i]} { 
                ${valuesTransition[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda