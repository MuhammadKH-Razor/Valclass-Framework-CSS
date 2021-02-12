// pengkondisian

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i <= document.querySelectorAll('div').length; i++) {
            if (document.querySelectorAll('div')[i].classList.contains('v-row')) {

                let styles = ` 
                .v-row { 
                    grid-template-columns: auto;
                 }
                `;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }

            if (document.querySelectorAll('div')[i].classList.contains('v-gap-sm')) {

                let styles = ` 
                .v-grid-gap { 
                   grid-gap: 5px
                }
                `;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }

            if (document.querySelectorAll('div')[i].classList.contains('v-gap-md')) {

                let styles = ` 
                .v-grid-gap { 
                    grid-gap: 10px
                 }
                `;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }

            if (document.querySelectorAll('div')[i].classList.contains('v-gap-lg')) {

                let styles = ` 
                .v-grid-gap { 
                    grid-gap: 15px
                 }
                `;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }

            if (document.querySelectorAll('div')[i].classList.contains('v-gap-xl')) {

                let styles = ` 
                .v-grid-gap { 
                    grid-gap: 20px
                 }
                `;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }

            if (document.querySelectorAll('div')[i].classList.contains('v-rows-2')) {

                let styles = ` 
                .v-rows-2 { 
                    grid-template-columns: auto auto;
                 }
                `;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }

            if (document.querySelectorAll('div')[i].classList.contains('v-rows-3')) {

                let styles = ` 
                .v-rows-3 { 
                    grid-template-columns: auto auto auto;
                 }
                `;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }

            if (document.querySelectorAll('div')[i].classList.contains('v-rows-4')) {

                let styles = ` 
                .v-rows-4 { 
                    grid-template-columns: auto auto auto auto;
                 }
                `;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            
            if (document.querySelectorAll('div')[i].classList.contains('v-col')) {

                let styles = ` 
                .v-col { 
                    padding: 20px 0; 
                    flex: 1; 
                    background-color: rgb(28, 214, 189);
                }
                `;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

}, 300)

// akhir dari pengkondisian