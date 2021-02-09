// property, tag dan value - Muhammad Khoirul Huda

let propertiesIncrement = [
    'v-increment'
]

let valuesIncrement = [
    'counter-increment: my-sec-counter; content: counter(my-sec-counter)'
]

// pengkondisian

for (var i = 0; i < propertiesIncrement.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

        let styles = ` 
        body {
            margin: 0;
            padding: 0;
            counter-reset: my-sec-counter;
        }

        .v-increment::before { 
            ${valuesIncrement[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;
                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {

                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {
                
                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('td')) {
        for (var i = 0; i < propertiesIncrement.length; i++) {
            if (document.querySelector('td').classList.contains(propertiesIncrement[i]) && !document.querySelector('style').innerText.includes(propertiesIncrement[i])) {
                
                let styles = ` 
                body {
                    margin: 0;
                    padding: 0;
                    counter-reset: my-sec-counter;
                }
                .v-increment::before { 
                    ${valuesIncrement[i]}
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
     
    if (document.querySelector('ul')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            for (var a = 0; a < document.querySelectorAll('ul').length; a++) {
                if (document.querySelectorAll('ul')[a].classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                    let styles = ` 
                    body {
                        margin: 0;
                        padding: 0;
                        counter-reset: my-sec-counter;
                    }
                    .v-increment::before { 
                        ${valuesIncrement[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('li')) {
        for (var i = 0; i < propertiesJustify.length; i++) {
            for (var a = 0; a < document.querySelectorAll('li').length; a++) {
                if (document.querySelectorAll('li')[a].classList.contains(propertiesJustify[i]) && !document.querySelector('style').innerText.includes(propertiesJustify[i])) {

                    let styles = ` 
                    body {
                        margin: 0;
                        padding: 0;
                        counter-reset: my-sec-counter;
                    }
                    .v-increment::before { 
                        ${valuesIncrement[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda