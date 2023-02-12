import { BookingStatus } from "@/services/api/book";

export const validateBookingResponse = (response: any): BookingStatus =>
  response["success"] === true ? "booked" : "error";
