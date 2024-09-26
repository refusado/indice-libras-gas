function generateNextSlug(term: string): string {
  let slug = slugify(term);

  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  const columnRange = sheet.getRange(1, SLUG_COLUMN_INDEX, lastRow);
  const usedSlugs = columnRange.getValues().flat() as string[];

  const matchedSlugs = usedSlugs.filter(usedSlug => usedSlug.startsWith(slug));

  if (matchedSlugs.length > 0) {
    const lastSlug = matchedSlugs[matchedSlugs.length - 1];
    const slugParts = lastSlug.split('-');
    const slugNumber = Number(slugParts[slugParts.length - 1]);

    if (isNaN(slugNumber)) {
      return `${slug}-2`;
    }

    return `${slug}-${slugNumber + 1}`;
  }

  return slug;
}