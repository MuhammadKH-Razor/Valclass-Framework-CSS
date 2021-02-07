// property, tag dan value - Muhammad Khoirul Huda

let propertiesFonts = [
    'v-font-roboto',
    'v-font-raleway',
    'v-font-poppins',
    'v-font-montserrat',
    'v-font-barcode',
    'v-font-anton',
    'v-font-normal',
    'v-font-bold',
    'v-font-100',
    'v-font-200',
    'v-font-300',
    'v-font-400',
    'v-font-500',
    'v-font-600',
    'v-font-700',
    'v-font-800',
    'v-font-italic',
    'v-font-normal',
    'v-font-oblique',
    'v-font-sm',
    'v-font-md',
    'v-font-lg',
    'v-font-xl'
]

let valuesFonts = [
    'font-family: "Roboto", sans-serif;',
    'font-family: "Raleway", sans-serif;',
    'font-family: "Poppins", sans-serif;',
    'font-family: "Montserrat", sans-serif;',
    'font-family: "Libre Barcode 39 Extended", cursive',
    'font-family: "Anton", sans-serif',
    'font-weight: normal;',
    'font-weight: bold;',
    'font-weight: 100;',
    'font-weight: 200;',
    'font-weight: 300;',
    'font-weight: 400;',
    'font-weight: 500;',
    'font-weight: 600;',
    'font-weight: 700;',
    'font-weight: 800;',
    'font-style: italic;',
    'font-style: normal;',
    'font-style: oblique;',
    'font-size: 15px;',
    'font-size: 20px;',
    'font-size: 25px;',
    'font-size: 30px;'
]

let fonts = [
    'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,700;1,900&display=swap',
    'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
    'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap',
    'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,600&display=swap',
    'https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Extended&display=swap',
    'https://fonts.googleapis.com/css2?family=Anton&display=swap',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]


// pengkondisian

for (var i = 0; i < propertiesFonts.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
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
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('mark').length; a++) {
                if (document.querySelectorAll('mark')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('pre').length; a++) {
                if (document.querySelectorAll('pre')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('blockquote').length; a++) {
                if (document.querySelectorAll('blockquote')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {
            
                    link = document.createElement('link');
                    tmp;

                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);

                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesFonts.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesFonts[i]) && !document.querySelector('style').innerText.includes(propertiesFonts[i])) {

                    link = document.createElement('link');
                    tmp;
            
                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);
            
                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
    
    if (document.querySelector('ul')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            for (var a = 0; a < document.querySelectorAll('ul').length; a++) {
                if (document.querySelectorAll('ul')[a].classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                    link = document.createElement('link');
                    tmp;
            
                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);
            
                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('li')) {
        for (var i = 0; i < propertiesHover.length; i++) {
            for (var a = 0; a < document.querySelectorAll('li').length; a++) {
                if (document.querySelectorAll('li')[a].classList.contains(propertiesHover[i]) && !document.querySelector('style').innerText.includes(propertiesHover[i])) {

                    link = document.createElement('link');
                    tmp;
            
                    tmp = link;
                    tmp.href = fonts[i];
                    document.getElementsByTagName("head")[0].appendChild(tmp);
            
                    let styles = ` 
                    .${propertiesFonts[i]} { 
                        ${valuesFonts[i]}
                    }`;
                    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda