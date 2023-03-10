import { Trip } from "@/services/api/trips";
import styles from "./trip-card.module.scss";
import Button from "react-bootstrap/Button";
import { formatDate } from "@/utils/utils";
import clsx from "clsx";

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
  const formattedArrival = formatDate(arrivalTime);
  const formattedDeparture = formatDate(departureTime);

  const timeSection = (label: string, date: string, time: string) => (
    <>
      <p className={styles.label}>{label}</p>
      <div className={styles.time}>
        <span>
          <i className="bi bi-calendar3" />
          <span className="m-2">{date}</span>
        </span>
        <span>
          <i className="bi bi-clock" />
          <span className="m-2">{time}</span>
        </span>
      </div>
    </>
  );

  const locationSection = (label: string, location: string) => (
    <>
      <p className={styles.label}>{label}</p>
      <p className={styles.location}>{location}</p>
    </>
  );

  return (
    <div className={styles.card}>
      <div className={styles.from}>
        {locationSection("From:", departureStop)}
      </div>
      <div className={styles.departing}>
        {timeSection(
          "Departing at",
          formattedDeparture.date,
          formattedDeparture.time
        )}
      </div>
      <div className={styles.to}>{locationSection("To:", arrivalStop)}</div>
      <div className={styles.arriving}>
        {timeSection(
          "Arriving at",
          formattedArrival.date,
          formattedArrival.time
        )}
      </div>
      <div className={styles.box}>
        <Button
          disabled={isDisabled}
          onClick={() => bookTrip(id)}
          className={clsx(styles["btn-blue"], styles.button)}
        >
          {labelMap[status]}
        </Button>
      </div>
    </div>
  );
};
