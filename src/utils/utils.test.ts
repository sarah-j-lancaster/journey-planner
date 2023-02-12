import { validateBookingResponse } from "./utils";

it.each`
  response              | result      | testName
  ${{ success: true }}  | ${"booked"} | ${"for a successfully booked trip"}
  ${{ success: false }} | ${"error"}  | ${"for an unsuccessfully booked trip"}
  ${{ other: "other" }} | ${"error"}  | ${"for a random response"}
`("returns $result for $testName", ({ response, result }) => {
  const actual = validateBookingResponse(response);
  expect(result).toBe(actual);
});
