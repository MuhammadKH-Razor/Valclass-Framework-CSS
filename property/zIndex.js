if (document.querySelector('div').classList.contains('v-index-1')) {

    let styles = ` 
            .v-index-1 { 
                z-index: 1;
            }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-index-2')) {

    let styles = ` 
            .v-index-2{ 
                z-index: 2;
            }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-index-3')) {

    let styles = ` 
            .v-index-3 { 
                z-index: 3;
            }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-index-4')) {

    let styles = ` 
            .v-index-4 { 
                z-index: 4;
            }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}