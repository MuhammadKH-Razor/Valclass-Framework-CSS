// property, tag dan value - Muhammad Khoirul Huda

let propertiesFonts = [
    'v-font-roboto',
    'v-font-raleway',
    'v-font-poppins',
    'v-font-montserrat',
]

let valuesFonts = [
    'font-family: "Roboto", sans-serif;',
    'font-family: "Raleway", sans-serif;',
    'font-family: "Poppins", sans-serif;',
    'font-family: "Montserrat", sans-serif;',
]

// pengkondisian

for (var i = 0; i < propertiesFonts.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

        link = document.createElement('link');
        tmp;

        tmp = link;
        tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
        document.getElementsByTagName("head")[0].appendChild(tmp);

        let styles = ` 
        .${propertiesFonts[i]} { 
            ${valuesFonts[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                link = document.createElement('link');
                tmp;

                tmp = link;
                tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
                document.getElementsByTagName("head")[0].appendChild(tmp);

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                let styles = ` 
            .${propertiesFonts[i]} { 
                ${valuesFonts[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda

