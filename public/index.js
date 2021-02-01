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

var js = [
    './js/script.js',
    './js/bgColor.js',
    './js/component.js',
    './js/element.js',
    './js/typography.js',
    './js/property.js'
],

script = document.createElement('script'),
body = document.getElementsByTagName('body')[0],
tmp;

for(var i = 0; i < js.length; i++){
    tmp = script.cloneNode(true);
    tmp.src = js[i];
    body.appendChild(tmp);
}   