if (document.querySelector('div.v-dark-mode')) {
    let styles = ` 
    .darkModes { 
        background-color: #313131;
        color: white;
    }
    
    .lightModes {
        background-color: white;
        color: #313131;
    }`;
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

if (document.querySelector('div.v-dark-mode')) {
    let styles = `
    .lightModes {
        background-color: white;
        color: #313131;
    }`;
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