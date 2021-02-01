if (document.querySelector('div').classList.contains('vss-navbar')) {

    let styles = ` 
            .vss-navbar { 
                position: relative;
                width: 100vw;
                height: 40px;
                padding: 5px;
                font-weight: 500;
            }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}