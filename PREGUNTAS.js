alert("Por favor responder las respuestas que se te piden con lo que se te indica");
let nombre =prompt("Como te llamas")
let color= prompt("Que color te gusta mas negro o cafe");
let parteAlta= prompt("Te gusta las chamarra o sudadera");
let parteBja=prompt("Te gustan los pants o patalon");
let calzado=prompt("Que prefieres tenis o botas ")

if((color.toLocaleLowerCase() == "cafe") && (parteAlta.toLocaleLowerCase() == "chamarra")
&& (parteBja.toLocaleLowerCase() == "pants") && (calzado.toLocaleLowerCase() == "tenis")){
alert(`Hola ${nombre} te sugerimos este atuendo para ti ☺️`);
document.write("<img src='imagenesvestimenta/pants.jpg' width='200' height='200'>")
document.write("<img src='imagenesvestimenta/chamarra cafe.webp' width='200' height='200'>")
document.write("<img src='imagenesvestimenta/tenis,cafe,converse.jpeg' width='200' height='200'>")


}else if((color.toLocaleLowerCase() == "cafe") && (parteAlta.toLocaleLowerCase() == "chamarra")
&& (parteBja.toLocaleLowerCase() == "pantalon") && (calzado.toLocaleLowerCase() == "tenis")){
    alert(`Hola ${nombre} te sugerimos este atuendo para ti ☺️`);
    document.write("<img src='imagenesvestimenta/pantalon,chamarra,tenis,cafe.jpg' width='200' height='200'>")
}else if((color.toLocaleLowerCase() == "cafe") && (parteAlta.toLocaleLowerCase() == "sudadera")
&& (parteBja.toLocaleLowerCase() == "pants") && (calzado.toLocaleLowerCase() == "tenis")){
    alert(`Hola ${nombre} te sugerimos este atuendo para ti ☺️`);
    document.write("<img src='imagenesvestimenta/pants.jpg' width='200' height='200'>")
    document.write("<img src='imagenesvestimenta/sudadera,cafe.jpg' width='200' height='200'>")
    document.write("<img src='imagenesvestimenta/tenis,cafe,converse.jpeg' width='200' height='200'>")

}else if((color.toLocaleLowerCase() == "cafe") && (parteAlta.toLocaleLowerCase() == "sudadera")
&& (parteBja.toLocaleLowerCase() == "pantalon") && (calzado.toLocaleLowerCase() == "tenis")){
    alert(`Hola ${nombre} te sugerimos este atuendo para ti ☺️`);
    document.write("<img src='imagenesvestimenta/pantalon.webp' width='200' height='200'>")
    document.write("<img src='imagenesvestimenta/sudadera,cafe.jpg' width='200' height='200'>")
    document.write("<img src='imagenesvestimenta/tenis,cafe,converse.jpeg' width='200' height='200'>")

}
else if((color.toLocaleLowerCase() == "cafe") && (parteAlta.toLocaleLowerCase() == "chamarra")
&& (parteBja.toLocaleLowerCase() == "pants") && (calzado.toLocaleLowerCase() == "botas")){
    alert(`Hola ${nombre} no tenemos un atuendo sobre los datos que introduciste,  te sugiremos uno ☺️`);
    document.write("<img src='imagenesvestimenta/pants.jpg' width='200' height='200'>")
document.write("<img src='imagenesvestimenta/chamarra cafe.webp' width='200' height='200'>")
document.write("<img src='imagenesvestimenta/tenis,cafe,converse.jpeg' width='200' height='200'>")


}
else if((color.toLocaleLowerCase() == "cafe") && (parteAlta.toLocaleLowerCase() == "chamarra")
&& (parteBja.toLocaleLowerCase() == "pantalon") && (calzado.toLocaleLowerCase() == "botas")){
    alert(`Hola ${nombre} te sugerimos este atuendo para ti ☺️`);
    document.write("<img src='imagenesvestimenta/pantalon,botas,cafe.webp' width='200' height='200'>")

}else if((color.toLocaleLowerCase() == "cafe") && (parteAlta.toLocaleLowerCase() == "sudadera")
&& (parteBja.toLocaleLowerCase() == "pants") && (calzado.toLocaleLowerCase() == "botas")){
    alert(`Hola ${nombre} no tenemos un atuendo sobre los datos que introduciste,  te sugiremos uno ☺️`);
document.write("<img src='imagenesvestimenta/pants.jpg' width='200' height='200'>")
document.write("<img src='imagenesvestimenta/sudadera,cafe.webp' width='200' height='200'>")
document.write("<img src='imagenesvestimenta/tenis,cafe,converse.jpeg' width='200' height='200'>")

}else if((color.toLocaleLowerCase() == "cafe") && (parteAlta.toLocaleLowerCase() == "sudadera")
&& (parteBja.toLocaleLowerCase() == "pantalon") && (calzado.toLocaleLowerCase() == "botas")){
    alert(`Hola ${nombre} te sugerimos este atuendo para ti ☺️`);
    document.write("<img src='imagenesvestimenta/pantalon.webp' width='200' height='200'>")
    document.write("<img src='imagenesvestimenta/sudadera,cafe.jpg' width='200' height='200'>")
    document.write("<img src='imagenesvestimenta/botas,cafe.jpeg' width='200' height='200'>")
}



else if((color.toLocaleLowerCase() == "negro") && (parteAlta.toLocaleLowerCase() == "chamarra")
&& (parteBja.toLocaleLowerCase() == "pants") && (calzado.toLocaleLowerCase() == "tenis")){
    alert(`Hola ${nombre} te sugerimos este atuendo para ti ☺️`);
document.write("<img src='imagenesvestimenta/chamarra,pant,tenis,negro.jpg' width='200' height='200'>")

}else if((color.toLocaleLowerCase() == "negro") && (parteAlta.toLocaleLowerCase() == "chamarra")
&& (parteBja.toLocaleLowerCase() == "pantalon") && (calzado.toLocaleLowerCase() == "tenis")){
    alert(`Hola ${nombre} te sugerimos este atuendo para ti ☺️`);
     document.write("<img src='imagenesvestimenta/Negro pantalon tenis,chamarra.jpeg' width='200' height='200'>")

}else if((color.toLocaleLowerCase() == "negro") && (parteAlta.toLocaleLowerCase() == "sudadera")
&& (parteBja.toLocaleLowerCase() == "pants") && (calzado.toLocaleLowerCase() == "tenis")){
    alert(`Hola ${nombre} te sugerimos este atuendo para ti ☺️`);
    document.write("<img src='imagenesvestimenta/pants,sudadera,tenis.negro.jpeg' width='200' height='200'>")

}else if((color.toLocaleLowerCase() == "negro") && (parteAlta.toLocaleLowerCase() == "sudadera")
&& (parteBja.toLocaleLowerCase() == "pantalon") && (calzado.toLocaleLowerCase() == "tenis")){
    alert(`Hola ${nombre} te sugerimos este atuendo para ti ☺️`);
    document.write("<img src='imagenesvestimenta/sudadera,pantalo,tenis,negro.webp' width='200' height='200'>")

}
else if((color.toLocaleLowerCase() == "negro") && (parteAlta.toLocaleLowerCase() == "chamarra")
&& (parteBja.toLocaleLowerCase() == "pants") && (calzado.toLocaleLowerCase() == "botas")){
    alert(`Hola ${nombre} no tenemos un atuendo sobre los datos que introduciste,  te sugiremos uno ☺️`);
    document.write("<img src='imagenesvestimenta/negro,chamarra,botas,pantalon.jpg' width='200' height='200'>")
}
else if((color.toLocaleLowerCase() == "negro") && (parteAlta.toLocaleLowerCase() == "chamarra")
&& (parteBja.toLocaleLowerCase() == "pantalon") && (calzado.toLocaleLowerCase() == "botas")){
    alert(`Hola ${nombre} te sugerimos este atuendo para ti ☺️`);
    document.write("<img src='imagenesvestimenta/negro,chamarra,botas,pantalon.jpg' width='200' height='200'>")

}else if((color.toLocaleLowerCase() == "negro") && (parteAlta.toLocaleLowerCase() == "sudadera")
&& (parteBja.toLocaleLowerCase() == "pants") && (calzado.toLocaleLowerCase() == "botas")){
    alert(`Hola ${nombre} no tenemos un atuendo sobre los datos que introduciste,  te sugiremos uno ☺️`);
    document.write("<img src='imagenesvestimenta/sudadera,pantalon,bota,negro.jpg' width='200' height='200'>")

}else if((color.toLocaleLowerCase() == "negro") && (parteAlta.toLocaleLowerCase() == "sudadera")
&& (parteBja.toLocaleLowerCase() == "pantalon") && (calzado.toLocaleLowerCase() == "botas")){
 alert(`Hola ${nombre} te sugerimos este atuendo para ti ☺️`);
    document.write("<img src='imagenesvestimenta/sudadera,pantalon,bota,negro.jpg' width='200' height='200'>")
}
else{
    alert("No exite combinacion lo sentimos")
}

//contador de numeros  