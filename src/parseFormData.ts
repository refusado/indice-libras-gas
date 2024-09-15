// https://developers.google.com/apps-script/reference/forms/item-response#getResponse()
// https://developers.google.com/apps-script/reference/forms/item-response#getItem()

interface FormResponse {
  value: string[][] | string[] | string;
  id: number;
  type: GoogleAppsScript.Forms.ItemType;
  question: {
    index: number;
    title: string;
    description: string;
  };
}

function parseFormData(data: GoogleAppsScript.Forms.ItemResponse[]):
FormResponse[] {
  const parsedResponses: FormResponse[] = [];

  data.map(({ getItem, getResponse }) => {
    const { getId, getTitle, getHelpText, getIndex, getType } = getItem();

    const response: FormResponse = {
      value: getResponse(),
      id: getId(),
      type: getType(),
      question: {
        index: getIndex(),
        title: getTitle(),
        description: getHelpText(),
      },
    };

    parsedResponses.push(response);
    
    console.log(`
      field id (integer/number) (ex.: 1793743734): ${response.id}
      question title: ${response.question.title}
      question description: ${response.question.description}
      field position: ${response.question.index}
      question type (ex.: CHECKBOX): ${response.type}
    `);
    console.log('response (string[][] | string[] | string): ' + response.value);
  });

  return parsedResponses;
}