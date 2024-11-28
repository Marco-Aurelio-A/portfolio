let numero = document.querySelector("#numero");
let digitar = document.querySelector("#digitar")
let tudo = document.querySelector("#tudo");

let lista = new Array(5);
let _index = -1;
let _index_resposta = 0;
let pode_responder = false;

for(var i = 0; i < lista.length; i++)
{

    lista[i] = Math.floor(Math.random() * (9 - 0) + 0);

}

function Mostrar_numero()
{

    _index++;

    if(_index < lista.length)
    {

        switch(_index)
        {

            case 0:

                numero.style.color = 'red';

            break;
            case 1: 
            
                numero.style.color = 'blue';

            break;
            case 2:

                numero.style.color = 'green';

            break;
            case 3:

                numero.style.color = 'pink';

            break;
            case 4:

                numero.style.color = 'black';

            break;
            
        }

        numero.innerHTML = lista[_index];

        setTimeout(Mostrar_numero, 1000);
    
    }
    else
    {

        numero.innerHTML = "";
        digitar.innerHTML = "Digite os numeros na ordem em que foram mostrados"
        pode_responder = true;

    }

}

Mostrar_numero();

function Checar_tecla()
{

    if(pode_responder == true)
    {

        let tecla = event.key;

        if(tecla == lista[_index_resposta])
        {

            _index_resposta++;
            digitar.innerHTML = "Acertou!";

        }
        else
        {

            digitar.innerHTML = "Errou!";
            _index = -1;
            Mostrar_numero();
            pode_responder = false;

        }

        if(_index_resposta >= lista.length)
        {

            digitar.textContent = "Ganhou!";

        }
    
    }

}

document.addEventListener("keypress", Checar_tecla);

function Loop()
{

    setTimeout(Loop, 1);

}

Loop();
