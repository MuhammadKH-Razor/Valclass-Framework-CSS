let propertiesComponent = [
    'v-btn',
    'v-table-hovered',
    'v-table-striped',
    'v-table-head-dark'
]

let valueComponent = [
    `.v-btn {
        position: relative;
        top: 0;
        width: auto;
        height: auto;
        font-weight: 500;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
        margin: 10px;
        padding: 5px 15px;
        background-color: grey;
        font-weight: 500;
        color: white;
        border: none;
        font-size: 1.5em;
        outline: none;
        box-shadow: 2px 2px 10px rgb(201, 201, 201);
        transition: 0.2s;
        filter: brightness(100%)
    }
    
    .v-btn:active {
        top: -5px;
        transition: 0.2s;
        
    }
    
    .v-btn:hover {
        filter: brightness(85%)
    }`,
    `table {
        margin: auto;
        font-family: "Lucida Sans Unicode", "Lucida Grande", "Segoe Ui";
        font-size: 12px;
        width: 100vw;
        text-align: center;
     }

     .v-table-hovered {
        border-collapse: collapse;
        table-layout: auto;
        font-size: 15px;
     }
     
     .v-table-hovered th, 
     .v-table-hovered td {
        border-bottom: 1px solid rgb(221, 221, 221);
        padding: 7px 17px;
     }

     caption {
        caption-side: top;
        margin-bottom: 10px;
     }

     .v-table-hovered thead {
        color: black;
        border-color: #6ea1cc !important;
     }
     
     .v-table-hovered tbody td {
        color: #353535;
     }
     
     .v-table-hovered tbody tr:hover th,
     .v-table-hovered tbody tr:hover td {
        background-color: rgb(236, 236, 236);
        opacity: 0.9;
        transition: all .2s;
     }`,
    `
     table {
        margin: auto;
        font-family: "Lucida Sans Unicode", "Lucida Grande", "Segoe Ui";
        font-size: 12px;
        width: 100vw;
        text-align: center;
     }

     .v-table-striped {
        border-collapse: collapse;
        table-layout: auto;
        font-size: 15px;
     }
     
     .v-table-striped th, 
     .v-table-striped td {
        border-bottom: 1px solid rgb(221, 221, 221);
        padding: 7px 17px;
     }

     caption {
        caption-side: top;
        margin-bottom: 10px;
     }
     
     .v-table-striped thead {
        color: black;
        border-color: #6ea1cc !important;
     }
     
     .v-table-striped tbody tr:nth-child(odd) td {
        background-color: #eeeeee;
     }
   
     .v-table-striped tbody td {
        color: #353535;
     }`,
     `
     table {
        margin: auto;
        font-family: "Lucida Sans Unicode", "Lucida Grande", "Segoe Ui";
        font-size: 12px;
        width: 100vw;
        text-align: center;
     }

     .v-table-head-dark {
        border-collapse: collapse;
        table-layout: auto;
        font-size: 15px;
     }
     
     thead, th {
        background-color: black;
        color: white;
        padding: 9px 17px;
     }
     
     .v-table-head-dark td {
        border-bottom: 1px solid rgb(221, 221, 221);
        padding: 7px 17px;
     }

     caption {
        caption-side: top;
        margin-bottom: 10px;
     }
     
     .v-table-head-dark thead {
        color: black;
        border-color: #6ea1cc !important;
     }
    
     .v-table-head-dark tbody td {
        color: #353535;
     }`
]

// pengkondisian

setTimeout(() => {

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesComponent.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesComponent[i]) && !document.querySelector('style').innerText.includes(propertiesComponent[i])) {

                    let styles = valueComponent[0]

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('table')) {
        for (var i = 0; i < propertiesComponent.length; i++) {
            for (var a = 0; a < document.querySelectorAll('table').length; a++) {
                if (document.querySelectorAll('table')[a].classList.contains(propertiesComponent[i]) && !document.querySelector('style').innerText.includes(propertiesComponent[i])) {

                    let styles = valueComponent[i]

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda