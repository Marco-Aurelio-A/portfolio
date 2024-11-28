let _body = document.querySelector('body');
let chiado = document.querySelectorAll('.chiado')
let chiado2 = document.querySelectorAll('.chiado2')
let Hmax = window.innerHeight;
let Wmax = window.innerWidth;
let min = 100;

let linha = document.querySelectorAll('.linha');

function Chiar()
{

    for (let i = 0; i < chiado.length; i++)
    {
        chiado[i].style.top = Math.random() * (Hmax - min) + min;
        chiado[i].style.left = Math.random() * (Wmax - min) + min;
    }

    for (let i = 0; i < chiado2.length; i++)
    {
        chiado2[i].style.top = Math.random() * (Hmax - min) + min;
        chiado2[i].style.left = Math.random() * (Wmax - min) + min;
    }

    for (let i = 0; i < linha.length; i++)
    {
        linha[i].style.top = Math.random() * (Hmax - min) + min;
    }

    setTimeout(Chiar, 30);

}

Chiar();