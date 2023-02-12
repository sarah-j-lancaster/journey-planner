export const getAllStops = async (): Promise<string[]> => {
  const response = await fetch(
    "https://6130d11c8066ca0017fdaa97.mockapi.io/stops"
  );
  return response.json();
};
