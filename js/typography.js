if (document.querySelector('div').classList.contains('v-font-roboto')) {
    link = document.createElement('link');
    tmp;
    
    tmp = link;
    tmp.href = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,500&display=swap';
    document.getElementsByTagName("head")[0].appendChild(tmp);
    
    let styles = ` 
            .v-font-roboto { 
                font-family: 'Roboto', sans-serif;
            }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-font-poppins')) {
    link = document.createElement('link');
    tmp;
    
    tmp = link;
    tmp.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
    document.getElementsByTagName("head")[0].appendChild(tmp);
    
    let styles = ` 
            .v-font-poppins { 
                font-family: 'Poppins', sans-serif;
            }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('div').classList.contains('v-font-montserrat')) {
    link = document.createElement('link');
    tmp;
    
    tmp = link;
    tmp.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap';
    document.getElementsByTagName("head")[0].appendChild(tmp);
    
    let styles = ` 
    .v-font-montserrat { 
        font-family: 'Montserrat', sans-serif;
    }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));

}

if (document.querySelector('div').classList.contains('v-font-raleway')) {
    link = document.createElement('link');
    tmp;
    
    tmp = link;
    tmp.href = 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
    document.getElementsByTagName("head")[0].appendChild(tmp);
    
    let styles = ` 
    .v-font-raleway { 
        font-family: 'Raleway', sans-serif;
    }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));

}