var main = () => {
  do {
    //Mostrar opciones al usuario
    var options = prompt("Ingrese un número del 1 al 5 para responder el desafio: " + "\n" +
      " 1- Número del 1 al 100 " + "\n" + " 2- Pregunta sobre Napoleón. " + "\n" + " 3- Promedio de notas. "
      + "\n" + " 4- Nombra tus frutas favoritas. " + "\n" + " 5- Vocales y consonantes. " + "\n" + " 6- Salir. ");

    console.log("Ingrese un número del 1 al 6");

    switch (options) {
      case '1':
        number();
        break;
      case '2':
        question();
        break;
      case '3':
        average();
        break;
      case '4':
        fruit();
        break;
      case '5':
        vowels();
        break;
      case '6':
        break;
      default:
        break;
    }
  } while (confirm('¿Hay algo más que quisieras consultar?'))

  alert('¡Gracias por participar!');
}


// Opción 1: Validación que número entregado por el usuario sea entre 1 y 100
//isNaN cuando es solamente números
var number = () => {
  var newNumber;

  do {
    newNumber = parseInt(prompt('Ingrese un número entre 1 y 100'));

    if (isNaN(newNumber)) {
      alert(`Favor ingresar un valor de tipo número.`);
    } else if (!(newNumber > 0 && newNumber <= 100)) {
      alert(`Favor ingresar un número entre 1 y 100`);
    }
  } while (isNaN(newNumber) || (newNumber < 1 || newNumber > 100));

  //imprime numero ingresado por el usuario e imprime todos los numero del 0 hasta el que ingresó
  alert(`Número ingresado: ${newNumber}`);
  alert(`${Array.from(Array(newNumber + 1).keys()).join(', ')}`)
}


//Opción 2: Solo debe responder el usuario que el color sea blanco de lo 
//contrario volverá a preguntar
var question = () => {
  var color

  do {
    color = prompt(' “¿De qué color es el caballo blanco de Napoleón?”.')
    if ((color === 'blanco')) {
    } else if (!color) {
      alert(`Ingrese una respuesta correcta`);
    }
  } while (color !== 'blanco')


  alert(`Color ${color} es correcto.`);
}


//Opción 3: Promedio de notas de usuario
var average = () => {

  var score = parseFloat(prompt('Ingrese promedio de notas de Matemáticas.'));
  score += parseFloat(prompt('Ingrese promedio de notas de Fisica.'));
  score += parseFloat(prompt('Ingrese promedio de notas de Ciencias.'));

  alert(`El promedio de notas es : ${Math.floor(score / 3)}`);

}

//Opción 4: Agregar nombres de frutas con excepción de Manzana
//agregar 3 frutas y almacenarlas en un arreglo 
var fruit = () => {
  var list = [
    prompt(' Ingrese un nombre de una fruta.'),
    prompt(' Ingrese un nombre de una fruta.'),
    prompt(' Ingrese un nombre de una fruta.')
  ];

  alert(`Frutas: ${list.filter(x => x.toLocaleLowerCase() !== 'manzana').join(', ')}`);

}

//Opción 5 almacena el nombre en var name y con match.length encuentra el largo de vocales y consonantes.
var vowels = () => {
  var name = prompt('Dime tu nombre');

  alert(`Tu nombre tiene ${name.match(/[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ]/g).length} consonantes`);
  alert(`Tu nombre tiene ${name.match(/[aeiouAEIOU]/g).length} vocales`);
}
