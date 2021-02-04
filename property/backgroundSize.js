if (document.querySelector('div').classList.contains('v-bg-cover')) {

    let styles = ` 
            .v-bg-cover { 
            background-size: cover;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-contain')) {

    let styles = ` 
            .v-bg-contain { 
                background-size: contain;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-auto')) {

    let styles = ` 
            .v-bg-auto { 
                background-size: auto;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}