if (document.querySelector('div').classList.contains('vss-dark')) {

    let styles = ` 
            .vss-dark { 
            background-color: rgb(49, 49, 49);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('vss-light')) {

    let styles = ` 
            .vss-light { 
            background-color: rgb(248, 247, 247);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('vss-info')) {

    let styles = ` 
            .vss-info { 
            background-color: rgb(0, 195, 255);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('vss-primary')) {

    let styles = ` 
            .vss-primary { 
            background-color: rgb(0, 153, 255);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('vss-warning')) {

    let styles = ` 
            .vss-warning { 
            background-color: rgb(255, 230, 0);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('vss-danger')) {

    let styles = ` 
            .vss-danger { 
            background-color: rgb(209, 30, 30);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('vss-smooth')) {

    let styles = ` 
            .vss-smooth { 
            background-color: rgba(250, 236, 236, 0.712);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('vss-transparent')) {

    let styles = ` 
            .vss-transparent { 
            background-color: transparent;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('vss-secondary')) {

    let styles = ` 
            .vss-secondary { 
            background-color: rgb(141, 141, 141);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('vss-green')) {

    let styles = ` 
            .vss-green { 
            background-color: rgb(13, 226, 155);
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}