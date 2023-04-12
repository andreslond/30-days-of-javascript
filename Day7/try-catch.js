try {
    //Código que podría generar un error
  } catch (error) {
    //Código que se ejecuta si ocurre un error
    console.log(error);
  }

// _____________


try {
    const num = 100;
    if (num > 50) {
      throw new Error("El número es mayor a 50");
    }
  } catch (error) {
    console.error(error.message);
  }


  //___________________
  //Usefull debugging methods

  console.log();        //to show messages and variables.
  console.table()       //To show objets as tables

  debugger              //Help us to check variable values during the execution.