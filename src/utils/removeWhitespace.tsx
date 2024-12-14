export function removeWhitespace(name: string) {
    if (name.includes(' ')) {
      return name.replace(/\s/g, '');
    }
    return name;
}