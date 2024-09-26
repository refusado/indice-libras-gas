const GET_RESPONSES_MAX_RETRIES = 10;

const SPREADSHEET_ID = "1ujXqNytQc3RurPsAG6RhNeolZeo13-NtGwdP9M8oJlU";
const SHEET_NAME = "from-forms";

const ID_COLUMN_INDEX = 1;
const SLUG_COLUMN_INDEX = 3;

type FieldsNames = "term" | "videoURL" | "startsAt" | "endsAt";
type FieldsId = "1097602906" | "1793743734" | "1835236659" | "1560167024";

// Mapping Google Forms field ID to custom field names
const MAP_FIELDS: Record<FieldsId, FieldsNames> = {
  "1097602906": "term",
  "1793743734": "videoURL",
  "1835236659": "startsAt",
  "1560167024": "endsAt",
}
