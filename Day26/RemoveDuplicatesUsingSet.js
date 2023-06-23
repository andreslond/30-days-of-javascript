export function removeDuplicates(values) {
    let setStruc = new Set(values);
    return Array.from(setStruc);
  }
  