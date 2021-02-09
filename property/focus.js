// property, tag dan value - Muhammad Khoirul Huda

let propertiesFocus = [
    'v-focus-scale',
    'v-focus-pulse',
    'v-focus-width',
    'v-focus-border'
]

let valuesFocus = [
    `
    v-focus-scale {
        transition: 0.3s;
        transform: scale(1);
    }`,
    `
    v-focus-pulse {
        transition: 0.3s;
        opacity: 1;
    }`,
    `
    v-focus-width {
        transition: 0.3s;
        width: 60%;
    }`
]

let focuss = [
    `
    .v-focus-scale:focus {
        transition: 0.3s;
        transition: 1s;
        transform: scale(0.97);
    }`,
    `
    .v-focus-pulse:focus {
        transition: 0.3s;
        transition: 1s;
        opacity: 0.7;
    }`,
    `
    .v-focus-width:focus {
        transition: 0.3s;
        transition: 1s;
        width: 90%;
    }`,
    `
    .v-focus-border:focus {
        border-top: none;
        transition: 1s;
        border-left: none;
        border-right: none;
        outline: none;
        border-bottom: 1px solid black;
    }`
]

// pengkondisian

setTimeout(() => {

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesFocus.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesFocus[i]) && !document.querySelector('style').innerText.includes(propertiesFocus[i])) {

                     let styles = ` 
                    .${propertiesFocus[i]} { 
                        ${valuesFocus[i]}
                    }
                    ${focuss[i]}`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesFocus.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesFocus[i]) && !document.querySelector('style').innerText.includes(propertiesFocus[i])) {

                     let styles = ` 
                    .${propertiesFocus[i]} { 
                        ${valuesFocus[i]}
                    }
                    ${focuss[i]}`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesFocus.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesFocus[i]) && !document.querySelector('style').innerText.includes(propertiesFocus[i])) {

                     let styles = ` 
                    .${propertiesFocus[i]} { 
                        ${valuesFocus[i]}
                    }
                    ${focuss[i]}`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda