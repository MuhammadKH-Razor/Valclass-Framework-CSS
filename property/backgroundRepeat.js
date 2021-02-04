if (document.querySelector('div').classList.contains('v-bg-repeat')) {

    let styles = ` 
            .v-bg-repeat { 
                background-repeat: repeat;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-bg-no-repeat')) {

    let styles = ` 
            .v-bg-no-repeat { 
                background-repeat: no-repeat;
        }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}