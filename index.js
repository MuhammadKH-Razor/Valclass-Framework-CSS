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

if (document.querySelector('body').classList.contains('position')) {

    var js = './property/position.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('component')) {

    var js = './property/component.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('text-color')) {

    var js = './property/textColor.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('cursor')) {

    var js = './property/cursor.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-color')) {

    var js = './property/backgroundColor.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('text-align')) {

    var js = './property/textAlign.js'

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('margin')) {

    var js = './property/margin.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('font')) {

    var js = './property/font.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('font-family')) {

    var js = './property/fontFamily.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('tlrb')) {

    var js = './property/tlrb.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('padding')) {

    var js = './property/padding.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('display')) {

    var js = './property/display.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('opacity')) {

    var js = './property/opacity.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('border')) {

    var js = './property/border.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('outline')) {

    var js = './property/outline.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('transition')) {

    var js = './property/transition.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('transform')) {

    var js = './property/transform.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('shadow')) {

    var js = './property/shadow.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('z-index')) {

    var js = './property/zIndex.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('width-height')) {

    var js = './property/widthHeight.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('decoration')) {

    var js = './property/decoration.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('overflow')) {

    var js = './property/overflow.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('float')) {

    var js = './property/float.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('justify-content')) {

    var js = './property/justifyContent.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('justify-items')) {

    var js = './property/justifyItems.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('justify-self')) {

    var js = './property/justifySelf.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('align-content')) {

    var js = './property/alignContent.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('align-items')) {

    var js = './property/alignItems.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('align-self')) {

    var js = './property/alignSelf.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-position')) {

    var js = './property/backgroundPosition.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-origin')) {

    var js = './property/backgroundOrigin.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-repeat')) {

    var js = './property/backgroundRepeat.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-size')) {

    var js = './property/backgroundSize.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('line-height')) {

    var js = './property/lineHeight.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('list-style')) {

    var js = './property/listStyle.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-clip')) {

    var js = './property/backgroundClip.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-attachment')) {

    var js = './property/backgroundAttachment.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('background-blend-mode')) {

    var js = './property/backgroundBlendMode.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('word-break')) {

    var js = './property/wordBreak.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('word-wrap')) {

    var js = './property/wordWrap.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('word-spacing')) {

    var js = './property/wordSpacing.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('animation')) {

    var js = './property/animation.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('vertical')) {

    var js = './property/vertical.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('visibility')) {

    var js = './property/visibility.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('white-space')) {

    var js = './property/whiteSpace.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('page-break')) {

    var js = './property/page.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('flex')) {

    var js = './property/flex.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('counter')) {

    var js = './property/counter.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('perspective')) {

    var js = './property/perspective.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('hover')) {

    var js = './property/hover.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('focus')) {

    var js = './property/focus.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('active')) {

    var js = './property/active.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('empty-cell')) {

    var js = './property/emptyCell.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('zoom')) {

    var js = './property/zoom.js',

        script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('grid')) {

    var js = [
        './property/grid.js',
        './property/columnCustom.js'
    ]

    for (var i = 0; i < js.length; i++) {
        script = document.createElement('script'),
            body = document.getElementsByTagName('body')[0],
            tmp;

        tmp = script;
        tmp.src = js[i];
        body.appendChild(tmp);
    }

}

if (document.querySelector('body').classList.contains('increment')) {

    var js = [
        './property/increment.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('excel')) {

    var js = [
        './property/officeExcel.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('word')) {

    var js = [
        './property/officeWord.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('pdf')) {

    var js = [
        './property/officePdf.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('sosmed')) {

    var js = [
        './property/sosmed.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('reload')) {

    var js = [
        './property/reload.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('result')) {

    var js = [
        './property/result.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('time')) {

    var js = [
        './property/time.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('back-to-top')) {

    var js = [
        './property/backToTop.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('icon')) {

    var js = [
        './property/icons.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}

if (document.querySelector('body').classList.contains('box-sizing')) {

    var js = [
        './property/boxSizing.js'
    ]

    script = document.createElement('script'),
        body = document.getElementsByTagName('body')[0],
        tmp;

    tmp = script;
    tmp.src = js;
    body.appendChild(tmp);

}