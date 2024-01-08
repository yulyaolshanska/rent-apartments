export const geocode = async (
  address: string
): Promise<[number, number] | null> => {
  try {
    const response = await fetch(
      ""
      // `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      //   address
      // )}&key=YOUR_GOOGLE_MAPS_API_KEY`
    );

    const data = await response.json();

    if (data.status === "OK") {
      const { lat, lng } = data.results[0].geometry.location;
      return [lat, lng];
    }

    return null;
  } catch (error) {
    console.error("Geocoding error:", error);
    return null;
  }
};
