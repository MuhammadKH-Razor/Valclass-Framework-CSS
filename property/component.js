if (document.querySelector('div').classList.contains('v-card')) {

    let styles = ` 
            .v-card { 
                position: relative;
                width: 25%;
                box-sizing: content-box;
                height: auto;
                border-radius: 5px;
                padding: 5px 15px;
                text-align: left;
                margin: 10px;
                font-weight: 500;
                box-shadow: 1px 1px 10px rgb(206, 206, 206);
            }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}

if (document.querySelector('button').classList.contains('v-btn')) {

    let styles = ` 
            .v-btn {
                position: relative;
                top: 0;
                width: auto;
                height: auto;
                font-weight: 500;
                text-align: center;
                border-radius: 3px;
                cursor: pointer;
                margin: 10px;
                padding: 5px 10px;
                background-color: rgb(6, 164, 255);
                font-weight: 500;
                color: white;
                border: none;
                font-size: 1.5em;
                outline: none;
                box-shadow: 2px 2px 10px rgb(201, 201, 201);
                transition: 0.2s;
            }
            
            .v-btn:active {
                top: -3px;
                transition: 0.2s;
            }`;

    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}