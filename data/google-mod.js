//funcion que ejecuta los cambios en la pagina
self.port.on("replacePage", function(imagenes){

var imgs = $(".lazy"); //selector de Jquery

    var foto = "http://placekitten.com/200/300"; //Imagen del gato
     
	 $.each(imgs, function( index, img ) {
		//$(img).attr("src", foto);
		$(img).attr("data-src", foto);
		//alert( index + ": " + img );
	});
    

    

  console.log("-------------- FF addon");
  console.log("imagenes ", imagenes);
  // selecciona todas las imagenes
  var pics = $('.lazy');
  
  // El maximo # imgs es 23
  // cambia el atributo en el elemento con imagenes externas
  $(pics[0]).attr('data-src', 'http://www.animalesyanimales.com/wp-content/uploads/2009/04/20081102164739-fotos-gatos.jpg');
  $(pics[10]).attr('data-src', 'http://www.animalesyanimales.com/wp-content/uploads/2009/04/20081102164739-fotos-gatos.jpg');
  $(pics[20]).attr('data-src', 'http://www.animalesyanimales.com/wp-content/uploads/2009/04/20081102164739-fotos-gatos.jpg');

  $(pics[11]).attr('data-src', imagenes.imagen1);
  $(pics[21]).attr('data-src', imagenes.imagen2);

});