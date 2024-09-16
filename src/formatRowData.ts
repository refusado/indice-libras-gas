interface RowData {
  term: string;
  videoURL: string;
  startsAt: string;
  endsAt: string;

  id: number;
  slug: string;
  sentAt: string;
}

function formatRowData(responses: FormFieldResponse[]): RowData {
  const allFieldsId = Object.keys(MAP_FIELDS);
  let data: Partial<RowData> = {};

  responses.forEach(({ id, value }) => {
    if (allFieldsId.includes(id)) {
      const currentFieldId = id as FieldsId;

      data = {
        ...data,
        [MAP_FIELDS[currentFieldId]]: value
      }
    }
  });

  if (!data.term || !data.videoURL || !data.startsAt || !data.endsAt) {
    throw new Error('Missing required fields');
  } else {
    return {
      term: '',
      videoURL: '',
      startsAt: '',
      endsAt: '',
      ...data,
      id: generateId(),
      slug: generateSlug(data.term),
      sentAt: getFormattedDate(),
    }
  }
}

function generateId(): number {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  const lastId = sheet.getRange(lastRow, ID_COLUMN_INDEX).getValue();

  if (typeof lastId !== 'number') {
    console.log(`Searching for the last ID in the range ${lastRow}:${ID_COLUMN_INDEX}`);
    throw new Error('Last ID in the sheet not found or is not a number');
  }

  return lastId + 1;
}

function generateSlug(term: string): string {
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

function getFormattedDate(date: Date = new Date()): string {
  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}