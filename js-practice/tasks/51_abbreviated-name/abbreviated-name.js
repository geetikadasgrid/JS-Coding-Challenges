// ### Abbreviated name

// Write a function to convert a fullname in abbreviated form.

export function abbreviatedName(name) {
  const parts = name.split(' ');
  if (parts.length < 2) return name;

  const firstName = parts[0];
  const initials = parts
    .slice(1)
    .map((part) => `${part[0]}.`)
    .join(' ');

  return `${firstName} ${initials}`;
}

console.log(abbreviatedName('Verbovyi Dmytro Oleksandrovych'));
