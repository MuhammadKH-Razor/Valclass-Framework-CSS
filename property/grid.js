// property, tag dan value

let propertiesRows = [
    'v-column',
    'v-row'
]

// pengkondisian

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i <= document.querySelectorAll('div').length; i++) {
            if (document.querySelectorAll('div')[i].classList.contains('v-row')) {

                let styles = ` 
                .v-row { 
                    display: flex; 
                    padding: 10px; 
                    background-color: rgb(5, 255, 222); 
                    grid-gap: 8px;
                }
                `;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
            
            if (document.querySelectorAll('div')[i].classList.contains('v-column')) {

                let styles = ` 
                .v-column { 
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