import { validateBookingResponse } from "@/utils/utils";

export type BookingStatus = "booked" | "error";

export const bookTrip = async (id: number): Promise<BookingStatus> => {
  const response = await fetch(
    `https://6130d11c8066ca0017fdaa97.mockapi.io/book/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
  const status = validateBookingResponse(json);

  return status;
};
