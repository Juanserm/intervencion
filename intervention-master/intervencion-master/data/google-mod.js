//funcion que ejecuta los cambios en la pagina
self.port.on("replacePage", function(imagenes){

  console.log("-------------- FF addon");
  console.log("imagenes ", imagenes);
  // selecciona todas las imagenes
  var pics = $('.lazy');
  var pics2 = $('img');
  // El maximo # imgs es 23
  // cambia el atributo en el elemento con imagenes externas
 

  $(pics[0]).attr('data-src', imagenes.imagen0);
  $(pics[0]).css({'width': '100px', 'height': '117px´'})
  
  $(pics[1]).attr('data-src', imagenes.imagen1);
  $(pics[1]).css({'width': '100px', 'height': '117px´'})
  $(pics[2]).attr('data-src', imagenes.imagen2);
  $(pics[2]).css({'width': '100px', 'height': '117px´'})
  $(pics[3]).attr('data-src', imagenes.imagen3);
  $(pics[3]).css({'width': '100px', 'height': '117px´'})
  $(pics[4]).attr('data-src', imagenes.imagen4);
  $(pics[4]).css({'width': '100px', 'height': '117px´'})
  $(pics[5]).attr('data-src', imagenes.imagen5);
  $(pics[5]).css({'width': '100px', 'height': '117px´'})
  $(pics[6]).attr('data-src', imagenes.imagen6);
  $(pics[6]).css({'width': '100px', 'height': '117px´'})
  $(pics[7]).attr('data-src', imagenes.imagen7);
  $(pics[7]).css({'width': '100px', 'height': '117px´'})
  $(pics[8]).attr('data-src', imagenes.imagen8);
  $(pics[8]).css({'width': '100px', 'height': '117px´'})
  $(pics[9]).attr('data-src', imagenes.imagen9);
  $(pics[9]).css({'width': '100px', 'height': '117px´'})
  $(pics[10]).attr('data-src', imagenes.imagen10);
  $(pics[10]).css({'width': '100px', 'height': '117px´'})
  $(pics[11]).attr('data-src', imagenes.imagen11);
  $(pics[11]).css({'width': '100px', 'height': '117px´'})
  $(pics[12]).attr('data-src', imagenes.imagen12);
  $(pics[12]).css({'width': '100px', 'height': '117px´'})
  $(pics[13]).attr('data-src', imagenes.imagen13);
  $(pics[13]).css({'width': '100px', 'height': '117px´'})
  $(pics[14]).attr('data-src', imagenes.imagen14);
  $(pics[14]).css({'width': '100px', 'height': '117px´'})
  $(pics[15]).attr('data-src', imagenes.imagen15);
  $(pics[15]).css({'width': '100px', 'height': '117px´'})
  $(pics[16]).attr('data-src', imagenes.imagen16);
  $(pics[16]).css({'width': '100px', 'height': '117px´'})
  $(pics[17]).attr('data-src', imagenes.imagen17);
  $(pics[17]).css({'width': '100px', 'height': '117px´'})
  $(pics[18]).attr('data-src', imagenes.imagen18);
  $(pics[18]).css({'width': '100px', 'height': '117px´'})
  $(pics[19]).attr('data-src', imagenes.imagen19);
  $(pics[19]).css({'width': '100px', 'height': '117px´'})
  $(pics[20]).attr('data-src', imagenes.imagen20);
  $(pics[20]).css({'width': '100px', 'height': '117px´'})
  $(pics[21]).attr('data-src', imagenes.imagen21);
  $(pics[21]).css({'width': '100px', 'height': '117px´'})
  $(pics[22]).attr('data-src', imagenes.imagen22);
  $(pics[22]).css({'width': '100px', 'height': '117px´'})
  
  $(pics2[0]).attr('src', imagenes.imagen0);
  $(pics2[0]).attr('width', '100px');
  $(pics2[0]).attr('heigth', '117px');
  $(pics2[1]).attr('src', imagenes.imagen1);
  $(pics2[1]).attr('width', '100px');
  $(pics2[1]).attr('heigth', '117px');
  $(pics2[2]).attr('src', imagenes.imagen2);
  $(pics2[2]).attr('width', '100px');
  $(pics2[2]).attr('heigth', '117px');
  $(pics2[3]).attr('src', imagenes.imagen3);
  $(pics2[3]).attr('width', '100px');
  $(pics2[3]).attr('heigth', '117px');
  $(pics2[4]).attr('src', imagenes.imagen4);
  $(pics2[4]).attr('width', '100px');
  $(pics2[4]).attr('heigth', '117px');
  $(pics2[5]).attr('src', imagenes.imagen5);
  $(pics2[5]).attr('width', '100px');
  $(pics2[5]).attr('heigth', '117px');
  $(pics2[6]).attr('src', imagenes.imagen6);
  $(pics2[6]).attr('width', '100px');
  $(pics2[6]).attr('heigth', '117px');
  $(pics2[7]).attr('src', imagenes.imagen7);
  $(pics2[7]).attr('width', '100px');
  $(pics2[7]).attr('heigth', '117px');
  $(pics2[8]).attr('src', imagenes.imagen8);
  $(pics2[8]).attr('width', '100px');
  $(pics2[8]).attr('heigth', '117px');
  $(pics2[9]).attr('src', imagenes.imagen9);
  $(pics2[9]).attr('width', '100px');
  $(pics2[9]).attr('heigth', '117px');

 


});
