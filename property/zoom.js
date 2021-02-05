// property, tag dan value - Muhammad Khoirul Huda

let propertiesZooms = [
    'v-zoom-none',
    'v-zoom-sm',
    'v-zoom-md',
    'v-zoom-lg',
    'v-zoom-xl',
    'v-zoom-full'
    
]

let valuesZooms = [
    'zoom: none;',
    'zoom: 20%;',
    'zoom: -40%;',
    'zoom: 60%;',
    'zoom: 80%;',
    'zoom: 100%;'
]

// pengkondisian

for (var i = 0; i < propertiesZooms.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

        let styles = ` 
        .${propertiesZooms[i]} { 
            ${valuesZooms[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}


setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesZooms.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesZooms[i]) && !document.querySelector('style').innerText.includes(propertiesZooms[i])) {

                let styles = ` 
            .${propertiesZooms[i]} { 
                ${valuesZooms[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda