import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className="container text-center flex-col space-y-7">
        <div>Choose who you are</div>
        <div>
          <Link href="/attendance/Elgius">
            {" "}
            <Button>Elgius</Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

// TODO:
// create a function to check if todays date is registered or not []
// create a function to add a sign in data to that record []
// create a function to add sign out data to that record []
// create a pull record to check everyones record for that month []
