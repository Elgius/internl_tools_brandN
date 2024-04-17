import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Link from "next/link";
export default function Home() {
  let scheduler = "/scheduler";
  return (
    <>
      <div className="mt-5">
        <nav>
          <Navbar />
        </nav>
        <div className="mt-40">
          <div className="flex flex-col justify-center items-center gap-4">
            <Link href={scheduler}>
              <Button>Schedules</Button>
            </Link>
            <Button>Uploads of the day</Button>
            <Button>History</Button>
          </div>
        </div>
      </div>
    </>
  );
}
