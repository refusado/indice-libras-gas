type FieldsNames = "term" | "videoURL" | "startsAt" | "endsAt";
type FieldsId = "1097602906" | "1793743734" | "1835236659" | "1560167024";

// Mapping Google Forms field ID to custom field names
const MAP_FIELDS: Record<FieldsId, FieldsNames> = {
  "1097602906": "term",
  "1793743734": "videoURL",
  "1835236659": "startsAt",
  "1560167024": "endsAt",
}
