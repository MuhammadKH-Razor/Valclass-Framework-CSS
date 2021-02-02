if (document.querySelector('div')) {
    let css = document.createElement('style');
    css.type = 'text/css';

    let styles = ` 
        body { 
            padding: 0;
            margin: 0;
        }`;

    if (css.styleSheet) {
        css.styleSheet.cssText = styles;
    }
    else {
        css.appendChild(document.createTextNode(styles));
    }
    document.getElementsByTagName("head")[0].appendChild(css);
}

let components = [
    'v-navbar',
    'v-footer',
    'v-jumbotron',
    'v-sidebar'
]

let properties = [
    'v-mt-1',
    'v-mt-2',
    'v-mt-3',
    'v-mt-4',
    'v-danger',
    'v-dark',
    'v-info',
    'v-primary',
    'v-secondary'
]

let typographies = [
    'v-font-roboto',
    'v-font-poppins',
    'v-font-Montserrat',
    'v-font-raleway'
]

let textColors = [
    'v-text-danger',
    'v-text-primary',
    'v-text-dark',
    'v-text-light'
]

for(var i = 0; i <= 50; i++) {
    if(document.querySelector('div').classList.contains(components[i])) {
        
        var js = './js/component.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

        tmp = script;
        tmp.src = js;
        body.appendChild(tmp);

    }

    if (document.querySelector('div') ||
        document.querySelector('h1') ||
        document.querySelector('h2') ||
        document.querySelector('h3') ||
        document.querySelector('h4') ||
        document.querySelector('h5') ||
        document.querySelector('h6') ||
        document.querySelector('p') ||
        document.querySelector('small') ||
        document.querySelector('span') ||
        document.querySelector('section') ||
        document.querySelector('video') ||
        document.querySelector('audio') ||
        document.querySelector('code') ||
        document.querySelector('pre') ||
        document.querySelector('sub') ||
        document.querySelector('sup') ||
        document.querySelector('mark').classList.contains(textColors[i])) {
        
        var js = './js/textColor.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

        tmp = script;
        tmp.src = js;
        body.appendChild(tmp);

    }

    if(document.querySelector('div').classList.contains(properties[i])) {
        
        var js = './js/property.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

        tmp = script;
        tmp.src = js;
        body.appendChild(tmp);

    }

    if(document.querySelector('div').classList.contains(typographies[i])) {
        
        var js = './js/typography.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

        tmp = script;
        tmp.src = js;
        body.appendChild(tmp);

    }

}