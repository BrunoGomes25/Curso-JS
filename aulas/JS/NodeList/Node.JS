const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;
//console.log(backgroundBody);

for (let p of ps){
    p.style.backgroundColor = backgroundBody;
    p.style.color = 'white'
    console.log(p)
}
