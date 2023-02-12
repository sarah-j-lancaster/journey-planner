export type Trip = {
  id: string;
  departureStop: string;
  departureTime: string;
  arrivalStop: string;
  arrivalTime: string;
};

export const getAllTripsForStop = async (stop: string): Promise<Trip[]> => {
  const encodedStop = encodeURI(stop);
  const response = await fetch(
    `https://6130d11c8066ca0017fdaa97.mockapi.io/trips?departureStop=${encodedStop}`
  );
  return response.json();
};
