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
                imagen0: self.data.url("imagen0.jpg"),
                imagen1: self.data.url("imagen1.jpg"),
				imagen2: self.data.url("imagen2.jpg"),
				imagen3: self.data.url("imagen3.jpg"),
				imagen4: self.data.url("imagen4.jpg"),
				imagen5: self.data.url("imagen5.jpg"),
				imagen6: self.data.url("imagen6.jpg"),
				imagen7: self.data.url("imagen7.jpg"),
				imagen8: self.data.url("imagen8.jpg"),
				imagen9: self.data.url("imagen9.jpg"),
				imagen10: self.data.url("imagen10.jpg"),
				imagen11: self.data.url("imagen11.jpg"),
				imagen12: self.data.url("imagen12.jpg"),
				imagen13: self.data.url("imagen13.jpg"),
				imagen14: self.data.url("imagen14.jpg"),
				imagen15: self.data.url("imagen15.jpg"),
				imagen16: self.data.url("imagen16.jpg"),
				imagen17: self.data.url("imagen17.jpg"),
				imagen18: self.data.url("imagen18.jpg"),
				imagen19: self.data.url("imagen19.jpg"),
				imagen20: self.data.url("imagen20.jpg"),
				imagen21: self.data.url("imagen21.jpg"),
				imagen22: self.data.url("imagen22.jpg"),
              };
      
      worker.port.emit("replacePage", imagenes);    
    }
});

