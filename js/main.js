addEventListener("DOMContentLoaded", () => {
    let containerText = document.getElementById('containerText');
    let razaSeleccionada = document.getElementById("razas");
    let generoSeleccionado = document.getElementById("genero");
    let nombres;
    let btn = document.getElementById('boton');

    // traer los nombres del json//
    function traerNombres(){
        fetch("../json/nombres.json")
        .then(response => response.json())
        .then(jsonData => {
            nombres = jsonData;
            nombreAleatorios(nombres);
        })
        .catch(error => {
            console.error('error al cargar los datos del JSON', error);
        });
    }

    // función para elegir nombres aleatorios//
    function nombreAleatorios(nombres){
        let raza = razaSeleccionada.value;
        let genero = generoSeleccionado.value;
        let valor = raza + genero;
        let nombresAleatorios = [];

        if(nombres){
            for(let i = 0; i<5; i++){
                let nombre = nombres[valor][Math.floor(Math.random() * nombres[valor].length)];
                nombresAleatorios.push(nombre);
            }
            mostrarNombres(nombresAleatorios, containerText);
        }
    }

    function mostrarNombres(nombres, containerText){
        containerText.innerHTML = nombres.join('<br>');
    }

    btn.addEventListener('click', () => {
        traerNombres();
    });
    });
