/*
Chain of Responsability Pattern
This pattern allows us to distribute the responsabilities among mutiple objects.
To implement this pattern we need to create a chain of objects with comunication between them.
Every chain object needs to have a reference to the next object in the chain.
If the object can not handle a rquest, it should pass it to the next object in the chain 
*/

// Clase base para las solicitudes
class Solicitud {
  constructor(tipo, cantidad) {
    this.tipo = tipo;
    this.cantidad = cantidad;
    this.siguiente = null;
  }
}

// Clase manejadora de solicitudes de descuentos
class DescuentoHandler {
  constructor() {
    this.siguiente = null;
  }

  solicitar(solicitud) {
    if (solicitud.tipo === 'descuento') {
      console.log(`Se aplicó un descuento del 10% por un total de ${solicitud.cantidad * 0.1}`);
    } else if (this.siguiente !== null) {
      this.siguiente.solicitar(solicitud);
    }
  }
}

// Clase manejadora de solicitudes de envío gratis
class EnvioGratisHandler {
  constructor() {
    this.siguiente = null;
  }

  solicitar(solicitud) {
    if (solicitud.cantidad >= 500) {
      console.log('Se aplicó envío gratis');
    } else if (this.siguiente !== null) {
      this.siguiente.solicitar(solicitud);
    }
  }
}

// Uso
const descuentoHandler = new DescuentoHandler();
const envioGratisHandler = new EnvioGratisHandler();
descuentoHandler.siguiente = envioGratisHandler;

console.log('compra con descuento');
const solicitud = new Solicitud('descuento', 100);
descuentoHandler.solicitar(solicitud);
// Se aplicó un descuento del 10% por un total de 10
// No se aplicó el envío gratis por el monto de la compra.

console.log('\n');
console.log('compra normal con envío gratis');
const solicitud2 = new Solicitud('compra normal', 700);
descuentoHandler.solicitar(solicitud2);
// Se aplicó envío gratis
// No se aplicó el descuento del 10% por el tipo de compra 'Normal'

console.log('\n');
console.log('compra con descuento y envío gratis');
const solicitud3 = new Solicitud('descuento', 700);
descuentoHandler.solicitar(solicitud3);
// Se aplicó el descuento del 10% por el tipo de compra 'Descuento'
// No se aplicó el resto de la cadena por que solo se acepta un comportamiento.

// If one of the objects of the chain can handle the reqeust, the chain will be stoped.
// It isn't possible to execute the logic of two or more objects un the chain.

