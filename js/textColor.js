const v = [
    {"dark" : "color: rgb(49, 49, 49);"},
    {"light" : "color: rgb(248, 247, 247);"},
    {"info" : "color: blue;"},
    {"primary" : "color: rgb(0, 153, 255);"},
    {"warning" : "color: rgb(255, 230, 0);"},
    {"danger" : "color: rgb(209, 30, 30);"},
    {"smooth" : "color: rgba(250, 236, 236, 0.712);"},
    {"transparent" : "color: transparent;"},
    {"secondary" : "color: rgb(141, 141, 141);"},
    {"green" : "color: rgb(13, 226, 155);"},
]

if (document.querySelector('div') ||
document.querySelector('h1') ||
document.querySelector('h2') ||
document.querySelector('h3') ||
document.querySelector('h4') ||
document.querySelector('h5') ||
document.querySelector('h6') ||
document.querySelector('p') ||
document.querySelector('small') ||
document.querySelector('span') ||
document.querySelector('section') ||
document.querySelector('video') ||
document.querySelector('audio') ||
document.querySelector('code') ||
document.querySelector('pre') ||
document.querySelector('sub') ||
document.querySelector('sup') ||
document.querySelector('mark').classList.contains('v-text-danger')) {

let styles = ` 
            .v-text-danger { 
            color: red;
        }`;

document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}
if (document.querySelector('div') ||
document.querySelector('h1') ||
document.querySelector('h2') ||
document.querySelector('h3') ||
document.querySelector('h4') ||
document.querySelector('h5') ||
document.querySelector('h6') ||
document.querySelector('p') ||
document.querySelector('small') ||
document.querySelector('span') ||
document.querySelector('section') ||
document.querySelector('video') ||
document.querySelector('audio') ||
document.querySelector('code') ||
document.querySelector('pre') ||
document.querySelector('sub') ||
document.querySelector('sup') ||
document.querySelector('mark').classList.contains('v-text-dark')) {

let styles = ` 
            .v-text-dark { 
            color: black;
        }`;

document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}
if (document.querySelector('div') ||
document.querySelector('h1') ||
document.querySelector('h2') ||
document.querySelector('h3') ||
document.querySelector('h4') ||
document.querySelector('h5') ||
document.querySelector('h6') ||
document.querySelector('p') ||
document.querySelector('small') ||
document.querySelector('span') ||
document.querySelector('section') ||
document.querySelector('video') ||
document.querySelector('audio') ||
document.querySelector('code') ||
document.querySelector('pre') ||
document.querySelector('sub') ||
document.querySelector('sup') ||
document.querySelector('mark').classList.contains('v-text-light')) {

let styles = ` 
            .v-text-light { 
            color: white;
        }`;

document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
}