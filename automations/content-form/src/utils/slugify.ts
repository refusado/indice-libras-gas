function slugify(str: string): string {
  function removeAccents(s: string): string {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function removeGenders(s: string): string {
    return s.replace(/\([ao]\)/g, ''); // removes '(a)' and '(o)'
  }

  return removeAccents(removeGenders(str))
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-') // spaces > hyphens
    .replace(/[&]+/g, 'e') // & > e
    .replace(/[ª]+/g, 'a') // ª > a
    .replace(/[º]+/g, 'o') // º > o
    .replace(/[ß]+/g, 'b') // ß > b
    .replace(/[%]+/g, 'pct') // % > pct
    .replace(/[(]+/g, '-') // ( > -
    .replace(/[)]+/g, '-') // ) > -
    .replace(/[^a-z0-9-]/g, '') // removes all non-alphanumeric characters except hyphens
    .replace(/-+/g, '-') // removes consecutive hyphens
    .replace(/^-|-$/g, ''); // trim hyphens from the start and end
}
