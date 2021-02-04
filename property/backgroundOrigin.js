if (document.querySelector('div').classList.contains('v-bg-origin-border')) {

    let styles = ` 
            .v-bg-origin-border { 
                background-origin: border-box;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-origin-padding')) {

    let styles = ` 
            .v-bg-origin-padding { 
                background-origin: padding-box;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-origin-content')) {

    let styles = ` 
            .v-bg-origin-content { 
                background-origin: content-box;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}