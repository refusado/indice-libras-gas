interface RowData {
  term: string;
  videoURL: string;
  startsAt: string;
  endsAt: string;

  id: number;
  slug: string;
  sentAt: Date;
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
      sentAt: new Date(),
    }
  }
}

function generateId(): number {
  return 0;
}

function generateSlug(term: string): string {
  return `${term}-slug`;
}