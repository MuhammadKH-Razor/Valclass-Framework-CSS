let styles = ` 
.v-dark-mode {
    background-color: rgb(44, 44, 44);
    border: none;
    width: 100px;
    outline: none;
    height: max-content;
    border-radius: 40px;
    padding: 5px;
    text-align: center;
    font-weight: 500;
 }
 
 .v-dark-mode-on {
    background-color: rgb(160, 160, 160);
    border: none;
    width: 100px;
    outline: none;
    height: max-content;
    border-radius: 40px;
    padding: 5px;
    text-align: center;
    font-weight: 500;
 }
 
 .v-dark-mode .toggle-mode {
    position: relative;
    width: 35px;
    height: 35px;
    left: 0;
    cursor: pointer;
    border-radius: 90px;
    background-color: #fff;
    transition: 0.3s;
 }
 
 .toggle-mode:hover {
    opacity: 0.8;
    transform: scale(0.97);
    transition: 0.3s;
 }
 
 .modeDarks {
    position: relative;
    margin-left: 65px;
    transition: 0.3s;
    background-color: rgb(44, 44, 44);
 }
 
 .darkModes { 
    background-color: #313131;
    color: white;
 }
 
 .lightModes {
    background-color: white;
    color: #313131;
 }`;

 
if (document.querySelector('div.v-dark-mode') && !document.querySelector('style').innerText.includes(styles)) {
    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    s = 0;
    document.querySelector('div.toggle-mode').addEventListener('click', () => {
        s += 1;
        if (s % 2 == 0) {
            for (var i = 0; i < document.querySelectorAll('div.v-template-dark-mode').length; i++) {
                document.querySelector('.toggle-mode').classList.remove('modeDarks');
                document.querySelector('.v-dark-mode').classList.remove('v-dark-mode-on');
                document.querySelectorAll('.v-template-dark-mode')[i].classList.remove('darkModes');
            }
        } else {
            for (var i = 0; i < document.querySelectorAll('div.v-template-dark-mode').length; i++) {
                document.querySelector('.toggle-mode').classList.add('modeDarks');
                document.querySelector('.v-dark-mode').classList.add('v-dark-mode-on');
                document.querySelectorAll('.v-template-dark-mode')[i].classList.add('darkModes');
            }
        }
    })
}

if (document.querySelector('div.v-dark-mode') && !document.querySelector('style').innerText.includes(propertiesDirections[i])) {
    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    d = 0;
    document.querySelector('div.toggle-mode').addEventListener('click', () => {
        d += 1;
        if (d % 2 == 0) {
            for (var x = 0; x < document.querySelectorAll('div.v-template-light-mode').length; x++) {
                document.querySelector('.toggle-mode').classList.remove('modeDarks');
                document.querySelector('.v-dark-mode').classList.remove('v-dark-mode-on');
                document.querySelectorAll('.v-template-light-mode')[x].classList.remove('lightModes');
            }
        } else {
            for (var x = 0; x < document.querySelectorAll('div.v-template-light-mode').length; x++) {
                document.querySelector('.toggle-mode').classList.add('modeDarks');
                document.querySelector('.v-dark-mode').classList.add('v-dark-mode-on');
                document.querySelectorAll('.v-template-light-mode')[x].classList.add('lightModes');
            }
        }
    })
}