import { BookingStatus } from "@/services/api/book";

export const validateBookingResponse = (response: any): BookingStatus =>
  response["success"] === true ? "booked" : "error";

type dateTime = {
  date: string;
  time: string;
};
export const formatDateString = (rawDate: string): dateTime => {
  const dateObj = new Date(rawDate);
  const date = dateObj.toLocaleDateString("fr-FR");
  const time = dateObj.toLocaleTimeString("fr-FR", { timeStyle: "short" });
  return {
    date,
    time,
  };
};
