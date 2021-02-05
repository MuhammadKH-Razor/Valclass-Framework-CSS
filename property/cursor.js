// property, tag dan value - Muhammad Khoirul Huda

let propertiesCursors = [
        'v-cursor-pointer',
        'v-cursor-col-resize',
        'v-cursor-context-menu ',
        'v-cursor-all-scroll',
        'v-cursor-cell',
        'v-ursor-alias',
        'v-cursor-default',
        'v-cursor-none',
        'v-cursor-progress'
    ]
    
    let valuesCursors = [
        'cursor: pointer;',
        'cursor: col-resize;',
        'cursor: context-menu;',
        'cursor: all-scroll;',
        'cursor: cell;',
        'cursor: alias;',
        'cursor: default;',
        'cursor: none;',
        'cursor: progress;'
    ]
    
    // pengkondisian
    
    
    for (var i = 0; i < propertiesCursors.length; i++) {
        if (document.querySelector('body').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
            let styles = ` 
            .${propertiesCursors[i]} { 
                ${valuesCursors[i]}
            }`;
            
            document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
        }
    }
    
    setTimeout(() => {
        
        if (document.querySelector('div')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('div').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('h1')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('h1').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('h2')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('h2').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('h3')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('h3').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('h4')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('h4').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('h5')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('h5').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('h6')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('h6').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('span')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('span').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('p')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('p').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('small')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('small').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('input')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('input').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('textarea')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('textarea').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('select')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('select').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('button')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('button').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('sup')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('sup').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('sup')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('sup').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('sub')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('sub').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('mark')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('mark').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('code')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('code').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('pre')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('pre').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    
        if (document.querySelector('blockquote')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('blockquote').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }

        if (document.querySelector('a')) {
            for (var i = 0; i < propertiesCursors.length; i++) {
                if (document.querySelector('a').classList.contains(propertiesCursors[i]) && !document.querySelector('style').innerText.includes(propertiesCursors[i])) {
    
                    let styles = ` 
                .${propertiesCursors[i]} { 
                    ${valuesCursors[i]}
                }`;
    
                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }, 300)
    
    // akhir dari pengkondisian - Muhammad Khoirul Huda