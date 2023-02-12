import { Trip } from "@/services/api/trips";
import styles from "./trip-card.module.scss";
import Button from "react-bootstrap/Button";

interface TripCardProps extends Trip {
  status: "booking" | "booked" | "available" | "error";
  bookTrip: (id: number) => void;
}

const labelMap: { [Key in TripCardProps["status"]]: string } = {
  booking: "Booking",
  booked: "Trip booked",
  available: "Book this trip",
  error: "Failed to book",
};

export const TripCard = ({
  id,
  departureStop,
  departureTime,
  arrivalStop,
  arrivalTime,
  status,
  bookTrip,
}: TripCardProps) => {
  const isDisabled = status === "booked" || status === "booking";
  return (
    <div className={styles.card}>
      <div className={styles.from}>
        <p className={styles.label}>From:</p>
        <p>{departureStop}</p>
        <p>{departureTime}</p>
      </div>
      <div className={styles.to}>
        <p className={styles.label}>To:</p>
        <p>{arrivalStop}</p>
        <p>{arrivalTime}</p>
      </div>
      <Button disabled={isDisabled} onClick={() => bookTrip(id)}>
        {labelMap[status]}
      </Button>
    </div>
  );
};
