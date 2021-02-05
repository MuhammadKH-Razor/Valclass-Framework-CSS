// property, tag dan value - Muhammad Khoirul Huda

let propertiesBackgroundAttachment = [
    'v-bg-attachment-fixed',
    'v-bg-attachment-local',
    'v-bg-attachment-scroll'
]

let valuesBackgroundAttachment = [
    'background-attachment: fixed',
    'background-attachment: local',
    'background-attachment: scroll'
]

// pengkondisian

for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

        let styles = ` 
        .${propertiesBackgroundAttachment[i]} { 
            ${valuesBackgroundAttachment[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesBackgroundAttachment.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesBackgroundAttachment[i]) && !document.querySelector('style').innerText.includes(propertiesBackgroundAttachment[i])) {

                let styles = ` 
            .${propertiesBackgroundAttachment[i]} { 
                ${valuesBackgroundAttachment[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda