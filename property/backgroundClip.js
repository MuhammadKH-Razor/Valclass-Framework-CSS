if (document.querySelector('div').classList.contains('v-bg-clip-border')) {

    let styles = ` 
            .v-bg-clip-border { 
                background-clip: border-box;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-clip-padding')) {

    let styles = ` 
            .v-bg-clip-padding { 
                background-clip: padding-box;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-clip-content')) {

    let styles = ` 
            .v-bg-clip-content { 
                background-clip: content-box;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}