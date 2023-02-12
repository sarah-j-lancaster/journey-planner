import { validateBookingResponse } from "@/utils/utils";

export type BookingStatus = "booked" | "error";

export const bookTrip = async (id: string): Promise<BookingStatus> => {
  const response = await fetch(
    `https://6130d11c8066ca0017fdaa97.mockapi.io/book/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const status = validateBookingResponse(response.json());

  return status;
};
