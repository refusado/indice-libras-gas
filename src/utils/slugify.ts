function slugify(str: string): string {
  str = str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-').replace(/[ ]/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // remove consecutive hyphens
    .replace(/[àÀáÁâÂãäÄÅåª]+/g, 'a')
    .replace(/[èÈéÉêÊëË]+/g, 'e')
    .replace(/[ìÌíÍîÎïÏ]+/g, 'i')
    .replace(/[òÒóÓôÔõÕöÖº]+/g, 'o')
    .replace(/[ùÙúÚûÛüÜ]+/g, 'u')
    .replace(/[ýÝÿŸ]+/g, 'y')
    .replace(/[ñÑ]+/g, 'n')
    .replace(/[çÇ]+/g, 'c')
    .replace(/[ß]+/g, 'ss')
    .replace(/[Ææ]+/g, 'ae')
    .replace(/[Øøœ]+/g, 'oe')
    .replace(/[%]+/g, 'pct');

  return str;
}