import { formatDateString, validateBookingResponse } from "./utils";

it.each`
  response              | result      | testName
  ${{ success: true }}  | ${"booked"} | ${"for a successfully booked trip"}
  ${{ success: false }} | ${"error"}  | ${"for an unsuccessfully booked trip"}
  ${{ other: "other" }} | ${"error"}  | ${"for a random response"}
`("returns $result for $testName", ({ response, result }) => {
  const actual = validateBookingResponse(response);
  expect(result).toBe(actual);
});

it.each`
  date                     | result                                            | testName
  ${"2022-01-01T20:57:00"} | ${{ date: "01/01/2022", time: "20:57" }}          | ${"for a standard date and time"}
  ${"not date"}            | ${{ date: "Invalid Date", time: "Invalid Date" }} | ${"for an invalid date and time"}
`("returns $result for $testName", ({ date, result }) => {
  const actual = formatDateString(date);
  expect(result).toEqual(actual);
});
