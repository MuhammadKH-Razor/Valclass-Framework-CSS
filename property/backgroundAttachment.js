if (document.querySelector('div').classList.contains('v-bg-attachment-fixed')) {

    let styles = ` 
            .v-bg-attachment-fixed { 
                background-attachment: fixed;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-attachment-local')) {

    let styles = ` 
            .v-bg-attachment-local { 
                background-attachment: local;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-attachment-scroll')) {

    let styles = ` 
            .v-bg-attachment-scroll { 
                background-attachment: scroll;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}