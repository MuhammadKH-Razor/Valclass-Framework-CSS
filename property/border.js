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
    'v-border-green',
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
    'border-color: #464855;',
    'border-color: #babfc7;',
    'border-color: #f8313c;',
    'border-color: #28afd0;',
    'border-color: #6967ce;',
    'border-color: rgba(250, 236, 236, 0.712);',
    'border-color: transparent;',
    'border-color: #6b6f80;',
    'border-color: #fdb901;',
    'border-color: #5ed84f;',
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
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
                .${propertiesBorders[i]} { 
                    ${valuesBorders[i]}
                }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('mark').length; a++) {
                if (document.querySelectorAll('mark')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('pre').length; a++) {
                if (document.querySelectorAll('pre')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('blockquote').length; a++) {
                if (document.querySelectorAll('blockquote')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
    
    if (document.querySelector('ul')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('ul').length; a++) {
                if (document.querySelectorAll('ul')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('li')) {
        for (var i = 0; i < propertiesBorders.length; i++) {
            for (var a = 0; a < document.querySelectorAll('li').length; a++) {
                if (document.querySelectorAll('li')[a].classList.contains(propertiesBorders[i]) && !document.querySelector('style').innerText.includes(propertiesBorders[i])) {

                    let styles = ` 
            .${propertiesBorders[i]} { 
                ${valuesBorders[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda