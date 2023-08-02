class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    emitirSonido() {
      console.log('Sonido cualquiera');
    }
  }
  
  class Perro extends Animal {
    emitirSonido() {
      console.log('Goof goof!');
    }
  }
  
  class Gato extends Animal {
    emitirSonido() {
      console.log('Mewww!');
    }
  }
  
  const perro = new Perro('Tobi' ,3);
  perro.emitirSonido();
  
  const gato = new Gato('Basurita' ,5);
  gato.emitirSonido();
  