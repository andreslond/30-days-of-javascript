export function printTriangle(size, character) {
  // Tu código aquí 👈
  let fullTriangle = [];

  for (let i = 0; i < size; i++) {
    const characterInLine = i + 1;
    const currentLine = character.repeat(characterInLine);
    const maskedLine = currentLine.padStart(size, ' ');
    fullTriangle.push(maskedLine);
  }
  return fullTriangle.join("\n");
}
