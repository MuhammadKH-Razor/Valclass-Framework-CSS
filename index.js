// agar langsung membuat nya tag style ketika pertama kali browser tampil

if (document.querySelector('body')) {
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


// pengkondisian

if (document.querySelector('body').classList.contains('v-position')) {

    var js = './property/position.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('v-component')) {

    var js = './property/component.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('v-text-color')) {

    var js = './property/textColor.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('v-margin')) {

    var js = './property/margin.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('v-background-color')) {

    var js = './property/backgroundColor.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('v-font')) {

    var js = './property/font.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('v-index')) {
    var js = './property/zIndex.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);
}

