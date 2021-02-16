// property, tag dan value - Muhammad Khoirul Huda

let propertiesOutlines = [
    'v-o-style-dotted',
    'v-o-style-dashed',
    'v-o-style-double',
    'v-o-style-groove',
    'v-o-style-solid',
    'v-o-style-ridge',
    'v-o-style-hidden',
    'v-o-1',
    'v-o-2',
    'v-o-3',
    'v-o-4',
    'v-o-top-1',
    'v-o-top-2',
    'v-o-top-3',
    'v-o-top-4',
    'v-o-left-1',
    'v-o-left-2',
    'v-o-left-3',
    'v-o-left-4',
    'v-o-right-1',
    'v-o-right-2',
    'v-o-right-3',
    'v-o-right-4',
    'v-o-bottom-1',
    'v-o-bottom-2',
    'v-o-bottom-3',
    'v-o-bottom-4',
    'v-o-dark',
    'v-o-light',
    'v-o-danger',
    'v-o-info',
    'v-o-primary',
    'v-o-smooth',
    'v-o-transparent',
    'v-o-secondary',
    'v-o-warning',
    'v-o-green'
]

let valuesOutlines = [
    'outline-style: dotted;',
    'outline-style: dashed;',
    'outline-style: double',
    'outline-style: groove;',
    'outline-style: solid',
    'outline-style: ridge;',
    'outline-style: hidden;',
    'outline: 1px;',
    'outline: 2px;',
    'outline: 3px;',
    'outline: 4px;',
    'outline-top: 1px;',
    'outline-top: 2px;',
    'outline-top: 3px;',
    'outline-top: 4px;',
    'outline-left: 1px;',
    'outline-left: 2px;',
    'outline-left: 3px;',
    'outline-left: 4px;',
    'outline-right: 1px;',
    'outline-right: 2px;',
    'outline-right: 3px;',
    'outline-right: 4px;',
    'outline-bottom: 1px;',
    'outline-bottom: 2px;',
    'outline-bottom: 3px;',
    'outline-bottom: 4px;',
    'outline-color: rgb(70, 70, 70);',
    'outline-color: rgb(238, 238, 238);',
    'outline-color: rgb(255, 76, 44);',
    'outline-color: rgb(2, 168, 245);',
    'outline-color: rgb(42, 131, 248);',
    'outline-color: rgb(255, 242, 242);',
    'outline-color: transparent;',
    'outline-color: rgb(141, 141, 141);',
    'outline-color: rgb(253, 207, 0);',
    'outline-color: rgb(11, 245, 101);'
]

// pengkondisian

for (var i = 0; i < propertiesOutlines.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

        let styles = ` 
    .${propertiesOutlines[i]} { 
        ${valuesOutlines[i]}
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
                .${propertiesOutlines[i]} { 
                    ${valuesOutlines[i]}
                }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('mark').length; a++) {
                if (document.querySelectorAll('mark')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('pre').length; a++) {
                if (document.querySelectorAll('pre')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('blockquote').length; a++) {
                if (document.querySelectorAll('blockquote')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
    
    if (document.querySelector('ul')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('ul').length; a++) {
                if (document.querySelectorAll('ul')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('li')) {
        for (var i = 0; i < propertiesOutlines.length; i++) {
            for (var a = 0; a < document.querySelectorAll('li').length; a++) {
                if (document.querySelectorAll('li')[a].classList.contains(propertiesOutlines[i]) && !document.querySelector('style').innerText.includes(propertiesOutlines[i])) {

                    let styles = ` 
            .${propertiesOutlines[i]} { 
                ${valuesOutlines[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda