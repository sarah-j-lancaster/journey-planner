"use client";
import { Shrikhand } from "@next/font/google";
import { Open_Sans } from "@next/font/google";
import styles from "../styles/Home.module.css";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllStops } from "@/services/api/stops";
import Head from "next/head";
import { NextPage } from "next";
import { getAllTripsForStop, Trip } from "@/services/api/trips";
import Spinner from "react-bootstrap/Spinner";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { bookTrip } from "@/services/api/book";
import { TripCard } from "@/components/TripCard/TripCard";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Page } from "@/components/Page/Page";
import Link from "next/link";

const headingFont = Shrikhand({ weight: "400", preload: false });
const bodyFont = Open_Sans({ weight: "400" });

type HomeProps = {
  stops: string[];
};

type BookedTrips = { [key: string]: "booking" | "booked" | "error" };

const Home: NextPage<HomeProps> = ({ stops }) => {
  const [selectedStop, setSelectedStop] = useState<string | undefined>();
  const [trips, setTrips] = useState<Trip[] | undefined>();
  const [isLoadingTrips, setLoadingTrips] = useState<boolean>(false);
  const [bookingIds, setBookingIds] = useState<BookedTrips>({});

  useEffect(() => {
    if (selectedStop) {
      const fetchTrips = async () => {
        setLoadingTrips(true);
        setTrips(undefined);

        const trips = await getAllTripsForStop(selectedStop);
        setTrips(trips);
        setLoadingTrips(false);
      };
      fetchTrips();
    }
  }, [selectedStop]);

  const bookTripWithId = async (id: number) => {
    setBookingIds((prevState) => ({ ...prevState, [id]: "booking" }));
    const bookingStatus = await bookTrip(id);
    setBookingIds((prevState) => ({ ...prevState, [id]: bookingStatus }));
  };

  return (
    <>
      <Head>
        <title>Journey Planner</title>
        <meta name="description" content="Plan your next trip" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <main className={clsx(styles.main, bodyFont.className, "container")}>
          <Image
            src={"/images/public-transport.png"}
            alt={"People waiting for a bus"}
            width={250}
            height={160}
            priority
          />
          <h1 className={clsx(headingFont.className, styles.heading)}>
            Trip planner
          </h1>
          <div className="mb-3">
            <Dropdown
              placeholder="Select your departure stop"
              listItems={stops}
              selectedItem={selectedStop}
              onSelect={setSelectedStop}
              id={"stops"}
              label={"Departure stop:"}
            />
          </div>
          {trips && (
            <>
              <p className="text-center mb-4 mb-lg-5">{`Showing trips departing from ${selectedStop}`}</p>
              <ul className="list-unstyled">
                {trips.map((trip, index) => {
                  const status = bookingIds[trip.id] ?? "available";
                  return (
                    <li key={`${trip.id}-${index}`}>
                      <TripCard
                        {...trip}
                        status={status}
                        bookTrip={bookTripWithId}
                      />
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {isLoadingTrips && (
            <Spinner className="mt-3" animation="border" role="status" />
          )}
          <Link
            href={"/credits"}
            className={clsx(headingFont.className, styles.link)}
          >
            Credits
          </Link>
        </main>
      </Page>
    </>
  );
};

Home.getInitialProps = async () => {
  const stops = await getAllStops();
  return { stops };
};

export default Home;
