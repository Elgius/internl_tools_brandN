"use client";

import { useEffect, useState } from "react";
import "./hamster.modules.css";
import { supabaseClient } from "@/db/supabaseClient";
import { Button } from "@/components/ui/button";

const currentDate = new Date().toISOString().split("T")[0];

function Data({ params }: { params: { name: string } }) {
  // loader run to allow the site to check with the main server if todays date has been registered
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const day = new Date();

    const todaysDate = day.toDateString();

    var hours = day.getHours();
    var minutes = day.getMinutes();

    let todaysTime = hours + ":" + minutes;

    console.log(`this is the date ${todaysDate}`);

    if (typeof supabaseClient !== "undefined") {
      try {
        const response = await fetch("/api/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dates: todaysDate,
            timeStamp: todaysTime,
          }),
        });

        if (!response.ok) {
          throw new Error("Check Network");
        }

        const data = await response.json();
        console.log(data);
        console.log("Supabase contact successful");
        // setIsLoading(false);
      } catch (error) {
        console.error("THere has been an error at the fetch operation", error);
      }
    }
  };

  if (isLoading === true) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen overflow-hidden">
          <div>
            <div
              aria-label="Orange and tan hamster running in a metal wheel"
              role="img"
              className="wheel-and-hamster"
            >
              <div className="wheel"></div>
              <div className="hamster">
                <div className="hamster__body">
                  <div className="hamster__head">
                    <div className="hamster__ear"></div>
                    <div className="hamster__eye"></div>
                    <div className="hamster__nose"></div>
                  </div>
                  <div className="hamster__limb hamster__limb--fr"></div>
                  <div className="hamster__limb hamster__limb--fl"></div>
                  <div className="hamster__limb hamster__limb--br"></div>
                  <div className="hamster__limb hamster__limb--bl"></div>
                  <div className="hamster__tail"></div>
                </div>
              </div>
              <div className="spoke"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="text-center">
      <h1>Hello this is {params.name} </h1>
      <div className="flex items-center justify-center my-10">
        <Button onClick={handleSubmit}>Sign in</Button>
      </div>
    </div>
  );
}

export default Data;
