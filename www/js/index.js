var app;

function Obtenerfoto(){
    navigator.camera.getPicture(correcto,error,{quality: 100,allowEdit:false});
}

function correcto(rutaImagen){
    document.getElementById("ImgCamara").src =rutaImagen;
    app=rutaImagen;
}
function error(message){
    alert ("error =>"+ message);
}