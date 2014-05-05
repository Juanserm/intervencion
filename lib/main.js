//Importa el API para modificiacion de paginas
var pageMod = require("sdk/page-mod");
//Importa el API self
var self = require("sdk/self");


pageMod.PageMod({
    include: "*.mercadolibre.com.co",
    contentScriptFile: [self.data.url("webcam.min.js"),
                        self.data.url("jquery-1.10.2.min.js"), 
                        self.data.url("google-mod.js")],
    onAttach: function(worker){
      
              var imagenes = {
                imagen1: self.data.url("gato.jpg"),
                imagen2: self.data.url("gato.jpg"),
              };
      
      worker.port.emit("replacePage", imagenes);    
    }
});

