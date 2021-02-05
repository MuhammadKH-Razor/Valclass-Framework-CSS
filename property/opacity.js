// property, tag dan value - Muhammad Khoirul Huda

let propertiesOpacity = [
    'v-opacity-0',
    'v-opacity-1',
    'v-opacity-2',
    'v-opacity-3',
    'v-opacity-4'
]

let valuesOpacity = [
    'opacity: 0%',
    'opacity: 25%',
    'opacity: 50%;',
    'opacity: 75%;',
    'opacity: 100%;'
  
]

// pengkondisian

for (var i = 0; i < propertiesOpacity.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

        let styles = ` 
        .${propertiesOpacity[i]} { 
            ${valuesOpacity[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesOpacity.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesOpacity[i]) && !document.querySelector('style').innerText.includes(propertiesOpacity[i])) {

                let styles = ` 
            .${propertiesOpacity[i]} { 
                ${valuesOpacity[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda