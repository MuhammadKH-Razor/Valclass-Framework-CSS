

if (document.querySelector('div').classList.contains('v-dark')) {

    let styles = ` 
            .v-dark { 
            background-color: rgb(49, 49, 49);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-light')) {

    let styles = ` 
            .v-light { 
            background-color: rgb(248, 247, 247);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-info')) {

    let styles = ` 
            .v-info { 
            background-color: rgb(0, 195, 255);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-primary')) {

    let styles = ` 
            .v-primary { 
            background-color: rgb(0, 153, 255);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-warning')) {

    let styles = ` 
            .v-warning { 
            background-color: rgb(255, 230, 0);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-danger')) {

    let styles = ` 
            .v-danger { 
            background-color: rgb(209, 30, 30);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-smooth')) {

    let styles = ` 
            .v-smooth { 
            background-color: rgba(250, 236, 236, 0.712);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-transparent')) {

    let styles = ` 
            .v-transparent { 
            background-color: transparent;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-secondary')) {

    let styles = ` 
            .v-secondary { 
            background-color: rgb(141, 141, 141);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-green')) {

    let styles = ` 
            .v-green { 
            background-color: rgb(13, 226, 155);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}



// khusus untuk margin-left ================================================== //

if (document.querySelector('div') ||
    document.querySelector('h1') ||
    document.querySelector('h2') ||
    document.querySelector('h3') ||
    document.querySelector('h4') ||
    document.querySelector('h5') ||
    document.querySelector('h6') ||
    document.querySelector('p') ||
    document.querySelector('small') ||
    document.querySelector('span') ||
    document.querySelector('section') ||
    document.querySelector('video') ||
    document.querySelector('audio') ||
    document.querySelector('code') ||
    document.querySelector('pre') ||
    document.querySelector('sub') ||
    document.querySelector('sup') ||
    document.querySelector('mark').classList.contains('v-ml-1')) {

    let styles = ` 
            .v-ml-1 { 
                margin-left: 210px;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div') ||
    document.querySelector('h1') ||
    document.querySelector('h2') ||
    document.querySelector('h3') ||
    document.querySelector('h4') ||
    document.querySelector('h5') ||
    document.querySelector('h6') ||
    document.querySelector('p') ||
    document.querySelector('small') ||
    document.querySelector('span') ||
    document.querySelector('section') ||
    document.querySelector('video') ||
    document.querySelector('audio') ||
    document.querySelector('code') ||
    document.querySelector('pre') ||
    document.querySelector('sub') ||
    document.querySelector('sup') ||
    document.querySelector('mark').classList.contains('v-ml-2')) {

    let styles = ` 
            .v-ml-2 { 
            margin-left: 20px;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}



// khusus untuk text-color ================================================== //

if (document.querySelector('div') ||
    document.querySelector('h1') ||
    document.querySelector('h2') ||
    document.querySelector('h3') ||
    document.querySelector('h4') ||
    document.querySelector('h5') ||
    document.querySelector('h6') ||
    document.querySelector('p') ||
    document.querySelector('small') ||
    document.querySelector('span') ||
    document.querySelector('section') ||
    document.querySelector('video') ||
    document.querySelector('audio') ||
    document.querySelector('code') ||
    document.querySelector('pre') ||
    document.querySelector('sub') ||
    document.querySelector('sup') ||
    document.querySelector('mark').classList.contains('v-text-danger')) {

    let styles = ` 
                .v-text-danger { 
                color: red;
            }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div') ||
    document.querySelector('h1') ||
    document.querySelector('h2') ||
    document.querySelector('h3') ||
    document.querySelector('h4') ||
    document.querySelector('h5') ||
    document.querySelector('h6') ||
    document.querySelector('p') ||
    document.querySelector('small') ||
    document.querySelector('span') ||
    document.querySelector('section') ||
    document.querySelector('video') ||
    document.querySelector('audio') ||
    document.querySelector('code') ||
    document.querySelector('pre') ||
    document.querySelector('sub') ||
    document.querySelector('sup') ||
    document.querySelector('mark').classList.contains('v-ml-2')) {

    let styles = ` 
                .v-ml-2 { 
                margin-left: 20px;
            }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}