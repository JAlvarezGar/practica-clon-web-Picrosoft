var imagenes=new Array(
    'images/laptop1.jpg',
    'images/laptop2.png'
);

const slider= ()=>{

    var aleatorio=Math.floor(Math.random()*imagenes.length);

    document.getElementById("imagen").src=imagenes[aleatorio];
}

onload=function()

{

    // Cargamos una imagen aleatoria

    slider();



    // Indicamos que cada 5 segundos cambie la imagen

    setInterval(slider,5000);

}