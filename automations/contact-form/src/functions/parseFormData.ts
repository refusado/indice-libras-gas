// https://developers.google.com/apps-script/reference/forms/item-response#getResponse()
// https://developers.google.com/apps-script/reference/forms/item-response#getItem()

interface FormFieldResponse {
  value: string;
  id: string;
  type: GoogleAppsScript.Forms.ItemType;
  question: {
    index: number;
    title: string;
    description: string;
  };
}

function parseFormData(data: GoogleAppsScript.Forms.ItemResponse[]):
FormFieldResponse[] {
  const parsedResponses: FormFieldResponse[] = [];

  data.forEach(({ getItem, getResponse }) => {
    const { getId, getTitle, getHelpText, getIndex, getType } = getItem();

    const response: FormFieldResponse = {
      value: getResponse().toString(),
      id: getId().toString(),
      type: getType(),
      question: {
        index: getIndex(),
        title: getTitle(),
        description: getHelpText(),
      },
    };

    parsedResponses.push(response);
  });

  return parsedResponses;
}