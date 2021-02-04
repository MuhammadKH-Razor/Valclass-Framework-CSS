if (document.querySelector('div').classList.contains('v-bg-center')) {

    let styles = ` 
            .v-bg-contain { 
                background-position: center;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-top')) {

    let styles = ` 
            .v-bg-auto { 
                background-position: top;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-left')) {

    let styles = ` 
            .v-bg-auto { 
                background-position: left;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-right')) {

    let styles = ` 
            .v-bg-auto { 
                background-position: right;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-bottom')) {

    let styles = ` 
            .v-bg-auto { 
                background-position: bottom;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}