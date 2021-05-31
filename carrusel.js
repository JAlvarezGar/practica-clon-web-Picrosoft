var imagenes = new Array(
    'images/laptop1.jpg',
    'images/laptop2.png'
);
var flag = false;
const slider = () => {


    if (flag == true) {
        bt1();

    } else {
        bt2();
    }
    var boton1 = document.getElementById('boton1');
    var boton2 = document.getElementById('boton2');
    boton1.onclick = () => {
        bt1();
    }
    boton2.onclick = () => {
        bt2();
    }

}

const bt1 = () => {
    document.getElementById("imagen").src = imagenes[0];
    document.getElementById('encabezadoFoto').innerHTML = "Nuevo Surface Laptop 4";
    document.getElementById('textoFoto').innerHTML = "Ahorra hasta 149,85€ en tu Surface Laptop Go";
    flag = false;
}

const bt2 = () => {
    document.getElementById("imagen").src = imagenes[1];
    document.getElementById('encabezadoFoto').innerHTML = "Hasta 15% de dedescuento";
    document.getElementById('textoFoto').innerHTML = "Disfruta de un equilibrio perfecto entre elegancia, velocidad para realizar multitareas y desempeño optimizado";
    flag = true;
}

onload = () => {
    slider();

    // Indicamos que cada 5 segundos cambie la imagen
    setInterval(slider, 10000);

}