let numero = document.querySelector("#numero");
let digitar = document.querySelector("#digitar")
let tudo = document.querySelector("#tudo");
let mostrar_lvl = document.querySelector("#mostrar_lvl");

let  lista_tamanho = 5;
let lista = new Array(lista_tamanho);
let _index = -1;
let _index_resposta = 0;
let pode_responder = false;
let fase = 1;

function Settar_numero()
{

    for(var i = 0; i < lista.length; i++)
    {

        var rand_numb = Math.floor(Math.random() * (9 - 0) + 0);
        
        lista[i] = rand_numb;
        
    }

    if(lista_tamanho > lista.length)
    {

        var rand_numb = Math.floor(Math.random() * (9 - 0) + 0);

        lista.push(rand_numb);

    }

}

function Mostrar_numero()
{

    _index++;

    mostrar_lvl.innerHTML = fase;

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

Settar_numero();
Mostrar_numero();

function Nova_fase()
{

    fase++;
    digitar.textContent = "";
    lista_tamanho++;
    _index = -1;
    pode_responder = false;
    _index_resposta = 0;

    Settar_numero();
    Mostrar_numero();

}

function Checar_tecla()
{

    if(pode_responder == true)
    {

        let tecla = event.key;

        if(Number(tecla) == Number(lista[_index_resposta]))
        {

            _index_resposta++;
            digitar.innerHTML = "Acertou!";

        }
        else
        {

            digitar.innerHTML = "Errou!";
            _index = -1;
            pode_responder = false;
            _index_resposta = 0;
            
            Mostrar_numero();

        }

        if(_index_resposta >= lista.length)
        {

            digitar.textContent = "Ganhou!";

            setTimeout(Nova_fase, 1000);

        }
    
    }

}

document.addEventListener("keypress", Checar_tecla);
