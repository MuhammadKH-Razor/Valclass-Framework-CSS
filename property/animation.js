// property, tag dan value - Muhammad Khoirul Huda

let propertiesAnimations = [
    'v-animation-none',
    'v-animation-spin',
    'v-animation-ping',
    'v-animation-pulse',
    'v-animation-bounce'
]

let valuesAnimations = [
  'animation: none;',
  `animation: spin 1s linear infinite;

   @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }`,
  `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; 

   @keyframes ping {
    75%, 100% {
     transform: scale(2);
     opacity: 0;
    }
  }`,
  `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }`,
  `animation: bounce 1s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(-25%);
      animationTimingFunction: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);
    }
  }`
]

// pengkondisian

for (var i = 0; i < propertiesAnimations.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

        let styles = ` 
        .${propertiesAnimations[i]} { 
            ${valuesAnimations[i]}
        }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('div').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('h1').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('h2').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('h3').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('h4').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('h5').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('h6').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('span').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('p').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('small').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('input').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('textarea').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('select').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('button').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('sup').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('sub').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('mark').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('code').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('pre').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('blockquote').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesAnimations.length; i++) {
            if (document.querySelector('a').classList.contains(propertiesAnimations[i]) && !document.querySelector('style').innerText.includes(propertiesAnimations[i])) {

                let styles = ` 
            .${propertiesAnimations[i]} { 
                ${valuesAnimations[i]}
            }`;

                document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda