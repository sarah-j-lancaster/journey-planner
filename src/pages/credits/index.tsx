import { Page } from "@/components/Page/Page";
import { Shrikhand } from "@next/font/google";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const headingFont = Shrikhand({ weight: "400", preload: false });

const Credits = () => {
  return (
    <Page>
      <div className={clsx("position-relative text-center pt-5 credits")}>
        <h1 className={headingFont.className}>Image credit</h1>
        <Image
          src={"/images/public-transport.png"}
          alt={"People waiting for a bus"}
          width={250}
          height={160}
          priority
        />

        <div>
          <a href="https://www.freepik.com/free-vector/passengers-waiting-public-transport-bus-stop_7732655.htm#query=public%20transportation&position=25&from_view=keyword&track=ais">
            Image by pch.vector
          </a>
          {` on Freepik`}
        </div>
        <div className="pt-5">
          <Link href={"/"} className={headingFont.className}>
            Back to journey planner
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default Credits;
