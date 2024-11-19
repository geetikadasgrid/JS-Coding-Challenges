// ### Complementary DNA - [strings, objects]

// Deoxyribonucleic acid ([DNA](http://en.wikipedia.org/wiki/DNA)) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA; you need to get the other complementary side. DNA strand is never empty or there is no DNA at all.
export function complementaryDNA(str) {
  const complement = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };

  return str
    .split('')
    .map((base) => complement[base])
    .join('');
}

console.log(complementaryDNA('ATCG'));
