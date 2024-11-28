let colorCountRed = 200;
let colorCountGreen = 0;
let colorCountBlue = 0;

let randomText = ['teste', ''];

let _body = document.querySelector('body');

let check = document.querySelector('#check');

function Loop()
{

    if (colorCountGreen < 200 && colorCountRed > 0 && colorCountBlue == 0)
    {

        colorCountRed--;
        colorCountGreen++;

    }
    else
    if (colorCountBlue < 200 && colorCountGreen > 0 && colorCountRed == 0)
    {

        colorCountGreen--;
        colorCountBlue++;

    }
    else
    if (colorCountBlue > 0 && colorCountRed < 200 && colorCountGreen == 0)
    {

        colorCountBlue--;
        colorCountRed++;

    }

    _body.style.background = 'linear-gradient(black, rgb(' + colorCountRed + ', ' + colorCountGreen + ', ' + colorCountBlue + '))';

    _body.style.color = 'white';

    

    if (check.checked == true)
    {

        setTimeout(function()
        {
            Loop();
        }, 10);

    }

}

check.onclick = Loop;

Loop();