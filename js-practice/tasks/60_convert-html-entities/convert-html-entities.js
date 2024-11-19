// ### Convert HTML entities
// Convert the characters `&`, `<`, `>`, `"` (double quote), and `'` (apostrophe), in a string to their corresponding HTML entities.

export function convertHTMLEntities(str) {
  return str.replace(/[&<>"']/g, (match) => {
    switch (match) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&apos;';
      default:
        return match;
    }
  });
}
console.log(convertHTMLEntities('Dolce & Gabbana'));
