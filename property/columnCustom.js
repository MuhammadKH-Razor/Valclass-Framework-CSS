// pengkondisian

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i <= document.querySelectorAll('div').length; i++) {
            if (document.querySelectorAll('div')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                column-count: 1; 
                padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('div')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                column-count: 2; 
                padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('div')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                column-count: 3; 
                padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('div')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
                .v-col-4 { 
                    column-count: 4; 
                    padding: 10px;
                }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i <= document.querySelectorAll('h1').length; i++) {
            if (document.querySelectorAll('h1')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                columns: 100px 1; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h1')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                columns: 50px 2; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h1')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                columns: 33px 3; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h1')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
            .v-col-4 { 
                columns: 25px 4; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i <= document.querySelectorAll('h2').length; i++) {
            if (document.querySelectorAll('h2')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                columns: 100px 1; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h2')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                columns: 50px 2; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h2')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                columns: 33px 3; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h2')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
            .v-col-4 { 
                columns: 25px 4; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i <= document.querySelectorAll('h3').length; i++) {
            if (document.querySelectorAll('h3')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                columns: 100px 1; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h3')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                columns: 50px 2; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h3')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                columns: 33px 3; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h3')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
            .v-col-4 { 
                columns: 25px 4; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i <= document.querySelectorAll('h4').length; i++) {
            if (document.querySelectorAll('h4')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                columns: 100px 1; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h4')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                columns: 50px 2; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h4')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                columns: 33px 3; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h4')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
            .v-col-4 { 
                columns: 25px 4; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i <= document.querySelectorAll('h5').length; i++) {
            if (document.querySelectorAll('h5')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                columns: 100px 1; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h5')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                columns: 50px 2; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h5')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                columns: 33px 3; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h5')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
            .v-col-4 { 
                columns: 25px 4; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i <= document.querySelectorAll('h6').length; i++) {
            if (document.querySelectorAll('h6')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                columns: 100px 1; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h6')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                columns: 50px 2; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h6')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                columns: 33px 3; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('h6')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
            .v-col-4 { 
                columns: 25px 4; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i <= document.querySelectorAll('span').length; i++) {
            if (document.querySelectorAll('span')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                columns: 100px 1; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('span')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                columns: 50px 2; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('span')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                columns: 33px 3; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('span')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
            .v-col-4 { 
                columns: 25px 4; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i <= document.querySelectorAll('p').length; i++) {
            if (document.querySelectorAll('p')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                columns: 100px 1; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('p')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                columns: 50px 2; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('p')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                columns: 33px 3; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('p')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
            .v-col-4 { 
                columns: 25px 4; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i <= document.querySelectorAll('small').length; i++) {
            if (document.querySelectorAll('small')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                columns: 100px 1; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('small')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                columns: 50px 2; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('small')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                columns: 33px 3; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('small')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
            .v-col-4 { 
                columns: 25px 4; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i <= document.querySelectorAll('code').length; i++) {
            if (document.querySelectorAll('code')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                columns: 100px 1; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('code')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                columns: 50px 2; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('code')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                columns: 33px 3; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('code')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
            .v-col-4 { 
                columns: 25px 4; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i <= document.querySelectorAll('pre').length; i++) {
            if (document.querySelectorAll('pre')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                columns: 100px 1; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('pre')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                columns: 50px 2; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('pre')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                columns: 33px 3; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('pre')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
            .v-col-4 { 
                columns: 25px 4; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i <= document.querySelectorAll('blockquote').length; i++) {
            if (document.querySelectorAll('blockquote')[i].classList.contains('v-col') && !document.querySelector('style').innerText.includes('v-col')) {

                let styles = ` 
            .v-col { 
                columns: 100px 1; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('blockquote')[i].classList.contains('v-col-2') && !document.querySelector('style').innerText.includes('v-col-2')) {

                let styles = ` 
            .v-col-2 { 
                columns: 50px 2; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('blockquote')[i].classList.contains('v-col-3') && !document.querySelector('style').innerText.includes('v-col-3')) {

                let styles = ` 
            .v-col-3 { 
                columns: 33px 3; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            if (document.querySelectorAll('blockquote')[i].classList.contains('v-col-4') && !document.querySelector('style').innerText.includes('v-col-4')) {

                let styles = ` 
            .v-col-4 { 
                columns: 25px 4; padding: 10px;
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda