var imagenes = new Array(
    'images/laptop1.jpg',
    'images/laptop2.png'
);
var flag = false;
const slider = () => {

    var fizq = document.getElementById('flechaIzq');
    var fdcha = document.getElementById('flechaDcha');
    var imgSlider = document.getElementById('imagen');
    fizq.style.display = 'none';
    fdcha.style.display = 'none';


    if (flag == true) {
        bt1();

    } else {
        bt2();
    }

    /**FLECHAS LATERALES*/

    // AL PASAR EL MOUSE POR LA IMAGEN PRINCIPAL APARECEN O DESAPARECEN
    imgSlider.onmouseover = () => {
        fizq.style.display = 'inherit';
        fdcha.style.display = 'inherit';
    }
    imgSlider.onmouseout = () => {
        fizq.style.display = 'none';
        fdcha.style.display = 'none';
    }
    // al hacer click cambia de foto
    fizq.onclick = () => {
        bt1();
    }
    fdcha.onclick=()=>{
        bt2();
    }

    /** BOTONES DE PUNTO SITUADOS EN LA PARTE BAJA DE LA IMAGEN PRINCIPAL */

    // AL HACER CLICK CAMBIA DE FOTO DE APARIENCIA EL BOTON DE PUNTO
    boton1.onclick = () => {
        document.getElementById('boton1').style.backgroundColor = "black";
        document.getElementById('boton1').style.width = "10px";
        document.getElementById('boton1').style.height = "10px";
        document.getElementById('boton2').style.backgroundColor = "transparent";
        document.getElementById('boton2').style.width = "8px";
        document.getElementById('boton2').style.height = "8px";
        bt1();

    }
    boton2.onclick = () => {
        document.getElementById('boton1').style.backgroundColor = "transparent";
        document.getElementById('boton1').style.width = "8px";
        document.getElementById('boton1').style.height = "8px";
        document.getElementById('boton2').style.backgroundColor = "black"
        document.getElementById('boton2').style.width = "10px";
        document.getElementById('boton2').style.height = "10px";
        bt2();

    }

}

/** ESTOS SON LOS METODOS PRINCIPALES DEL SLIDER */

const bt1 = () => {
    document.getElementById("imagen").src = imagenes[0];
    document.getElementById('encabezadoFoto').innerHTML = "Nuevo Surface Laptop 4";
    document.getElementById('textoFoto').innerHTML = "Ahorra hasta 149,85€ en tu Surface Laptop Go";
    document.getElementById('boton2').style.backgroundColor = "transparent";
    document.getElementById('boton2').style.width = "8px";
    document.getElementById('boton2').style.height = "8px";
    flag = false;
}

const bt2 = () => {
    document.getElementById("imagen").src = imagenes[1];
    document.getElementById('encabezadoFoto').innerHTML = "Hasta 15% de dedescuento";
    document.getElementById('textoFoto').innerHTML = "Disfruta de un equilibrio perfecto entre elegancia, velocidad para realizar multitareas y desempeño optimizado";
    document.getElementById('boton1').style.backgroundColor = "transparent";
    document.getElementById('boton1').style.width = "8px";
    document.getElementById('boton1').style.height = "8px";
    flag = true;
}

// AL CARGAR LA PAGINA LLAMA A LA FUNCION PRINCIPAL slider();
onload = () => {
    slider();

    // Indicamos que cada 5 segundos cambie la imagen
    setInterval(slider, 10000);

}