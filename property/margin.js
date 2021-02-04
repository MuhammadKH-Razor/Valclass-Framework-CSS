let margins = [
    'div',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'small',
    'span',
    'section',
    'video',
    'audio',
    'code',
    'sub',
    'pre',
    'sup',
    'mark',
]

for (var i = 0; i <= 19; i++) {

    if (document.querySelector(margins[i]).classList.contains('v-m-1')) {

        let styles = ` 
        .v-m-1 { 
            margin: 10px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-m-2')) {

        let styles = ` 
        .v-m-2 { 
            margin: 20px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-m-3')) {

        let styles = ` 
        .v-m-3 { 
            margin: 30px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-m-4')) {

        let styles = ` 
        .v-m-4 { 
            margin: 40px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    // untuk MARGIN TOP
    if (document.querySelector(margins[i]).classList.contains('v-mt-1')) {

        let styles = ` 
        .v-mt-1 { 
            margin-top: 10px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-mt-2')) {

        let styles = ` 
        .v-mt-2 { 
            margin-top: 20px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-mt-3')) {

        let styles = ` 
        .v-mt-3 { 
            margin-top: 30px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-mt-4')) {

        let styles = ` 
        .v-mt-4 { 
            margin-top: 40px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }


    // untuk MARGIN LEFT
    if (document.querySelector(margins[i]).classList.contains('v-ml-1')) {

        let styles = ` 
        .v-ml-1 { 
            margin-left: 10px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-ml-2')) {

        let styles = ` 
        .v-ml-2 { 
        margin-left: 20px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-ml-3')) {

        let styles = ` 
            .v-ml-3 { 
            margin-left: 30px;
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-ml-4')) {

        let styles = ` 
            .v-ml-4 { 
            margin-left: 40px;
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }


    // untuk MARGIN RIGHT
    if (document.querySelector(margins[i]).classList.contains('v-mr-1')) {

        let styles = ` 
        .v-mr-1 { 
            margin-right: 10px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-mr-2')) {

        let styles = ` 
        .v-mr-2 { 
        margin-right: 20px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-mr-3')) {

        let styles = ` 
            .v-mr-3 { 
            margin-right: 30px;
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-mr-4')) {

        let styles = ` 
            .v-mr-4 { 
            margin-right: 40px;
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }


    // untuk MARGIN RIGHT
    if (document.querySelector(margins[i]).classList.contains('v-mb-1')) {

        let styles = ` 
        .v-mb-1 { 
            margin-bottom: 10px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-mb-2')) {

        let styles = ` 
        .v-mb-2 { 
        margin-bottom: 20px;
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-mb-3')) {

        let styles = ` 
            .v-mb-3 { 
            margin-bottom: 30px;
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }

    if (document.querySelector(margins[i]).classList.contains('v-mb-4')) {

        let styles = ` 
            .v-mb-4 { 
            margin-bottom: 40px;
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}