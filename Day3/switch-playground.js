
export function getPetExerciseInfo(type, age) {
  // Tu Código aquí 👈
  const dogLower1 = "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
  const dog1To7 = "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
  const dogOlder7 = "Los perros viejos necesitan caminatas más cortas";

  const catLower1 = "Los gatitos necesitan frecuentes sesiones de juego";
  const cat1To7 = "Los gatos a esta edad necesitan jugar diariamente";
  const catOlder7 = "Los gatos viejos necesitan sesiones de juego más cortas"; 

  const birdLower1 = "Las aves jóvenes necesitan mucho espacio para volar";
  const bird1To7 = "Las aves necesitan jugar diariamente y un lugar para volar";
  const birdOlder7 = "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";

  switch (type) {
    case 'perro':
      return ageProcessor(age, dogLower1, dog1To7, dogOlder7);
      break;

    case 'gato':
      return ageProcessor(age, catLower1, cat1To7, catOlder7);
      break;

    case 'ave':
      return ageProcessor(age, birdLower1, bird1To7, birdOlder7);
      break;

    default:
      return "Tipo de mascota inválida";
      break;
  }

}

function ageProcessor(age, small, medium, older) {
  let resultMessage = '';
  if (age < 1) {
    resultMessage = small;
  } else if (1 < age < 7) {
    resultMessage = medium;
  } else if (age > 7) {
    resultMessage = older;
  }
  return resultMessage;
}
