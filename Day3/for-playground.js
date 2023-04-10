
export function printTriangle(size, character) {
  // Tu código aquí 👈
  let fullTriangle = "";
  const characterLineBuilder = ((character, quantity) => {
    let line = '';
    for (let i = 0; i < quantity; i++) {
      line += character;
    }
    return line;
  });

  for (let i = 0; i < size; i++) {
    const nCharacters = i + 1;
    const emptyChar = size - nCharacters;
    let currentLine = characterLineBuilder(' ', emptyChar);
    currentLine += characterLineBuilder(character, nCharacters);
    fullTriangle += currentLine;
    if (i < (size - 1)) {
      fullTriangle += '\n';
    }
  }
  return fullTriangle;  
}

  