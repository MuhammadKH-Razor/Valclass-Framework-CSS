// property, tag dan value - Muhammad Khoirul Huda

let propertiesBorders = [
    'v-border-style-dotted',
    'v-border-style-double',
    'v-border-style-groove',
    'v-border-style-solid',
    'v-border-style-ridge',
    'v-border-style-hidden',
    'v-radius-sm',
    'v-radius-md',
    'v-radius-lg',
    'v-radius-full',
    'v-b-1',
    'v-b-2',
    'v-b-3',
    'v-b-4',
    'v-bt-1',
    'v-bt-2',
    'v-bt-3',
    'v-bt-4',
    'v-bl-1',
    'v-bl-2',
    'v-bl-3',
    'v-bl-4',
    'v-br-1',
    'v-br-2',
    'v-br-3',
    'v-br-4',
    'v-bb-1',
    'v-bb-2',
    'v-bb-3',
    'v-bb-4',
    'v-border-dark',
    'v-border-light',
    'v-border-danger',
    'v-border-info',
    'v-border-primary',
    'v-border-smooth',
    'v-border-transparent',
    'v-border-secondary',
    'v-border-warning',
    'v-border-collapse',
    'v-border-separate',
]

let valuesBorders = [
    'border-style: dotted;',
    'border-style: double',
    'border-style: groove;',
    'border-style: solid',
    'border-style: ridge;',
    'border-style: hidden;',
    'border-radius: 5px;',
    'border-radius: 10px;',
    'border-radius: 15px;',
    'border-radius: 100%;',
    'border: 1px;',
    'border: 2px;',
    'border: 3px;',
    'border: 4px;',
    'border-top: 1px;',
    'border-top: 2px;',
    'border-top: 3px;',
    'border-top: 4px;',
    'border-left: 1px;',
    'border-left: 2px;',
    'border-left: 3px;',
    'border-left: 4px;',
    'border-right: 1px;',
    'border-right: 2px;',
    'border-right: 3px;',
    'border-right: 4px;',
    'border-bottom: 1px;',
    'border-bottom: 2px;',
    'border-bottom: 3px;',
    'border-bottom: 4px;',
    'border-color: rgb(49, 49, 49);',
    'border-color: rgb(248, 247, 247);',
    'border-color: red;',
    'border-color: rgb(0, 204, 255);',
    'border-color: rgb(0, 153, 255);',
    'border-color: rgba(250, 236, 236, 0.712);',
    'border-color: transparent;',
    'border-color: rgb(141, 141, 141);',
    'border-color: rgb(255, 230, 0);',
    'border-color: rgb(13, 226, 155);',
    'border-collapse: collapse;',
    'border-collapse: separate'
]

// pengkondisian

for (var i = 0; i < propertiesBorders.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

        let styles = ` 
        .${propertiesBorders[i]} { 
            ${valuesBorders[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda