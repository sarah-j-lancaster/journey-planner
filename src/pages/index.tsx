"use client";
import { Shrikhand } from "@next/font/google";
import { Open_Sans } from "@next/font/google";

import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "@/components/Dropdown/dropdown";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllStops } from "@/services/api/stops";
import Head from "next/head";
import { NextPage } from "next";
import { getAllTripsForStop, Trip } from "@/services/api/trips";
import Spinner from "react-bootstrap/Spinner";

const headingFont = Shrikhand({ weight: "400", preload: false });
const bodyFont = Open_Sans({ weight: "400" });

interface Props {
  stops: string[];
}

const Page: NextPage<Props> = ({ stops }) => {
  const [selectedStop, setSelectedStop] = useState<string | undefined>();
  const [trips, setTrips] = useState<Trip[] | undefined>();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedStop) {
      const fetchTrips = async () => {
        setLoading(true);
        setTrips(undefined);

        const trips = await getAllTripsForStop(selectedStop);
        setTrips(trips);
        setLoading(false);
      };
      fetchTrips();
    }
  }, [selectedStop]);

  return (
    <>
      <Head>
        <title>Journey Planner</title>
        <meta name="description" content="Plan your next trip" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={clsx(styles.main, bodyFont.className)}>
        <Image
          src={"/images/public-transport.jpg"}
          alt={""}
          width={250}
          height={160}
          priority
        />
        <h2 className={clsx(headingFont.className, styles.heading)}>
          Trip planner
        </h2>
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
            <p>{`Showing trips departing from ${selectedStop}`}</p>
            {trips.map((trip) => trip.id)}
          </>
        )}
        {isLoading && <Spinner animation="border" role="status" />}
      </main>
    </>
  );
};

Page.getInitialProps = async () => {
  const stops = await getAllStops();
  return { stops };
};

export default Page;
