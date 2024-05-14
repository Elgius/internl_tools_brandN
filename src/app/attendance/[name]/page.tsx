"use client";

import { useEffect, useState } from "react";
import "./hamster.modules.css";
import { Button } from "@/components/ui/button";
import { updater } from "@/db/upload";

const currentDate = new Date().toISOString().split("T")[0];

function Data({ params }: { params: { name: string } }) {
  // loader run to allow the site to check with the main server if todays date has been registered
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotificatation] = useState("");

  useEffect(() => {
    if (notification) {
      alert(notification);
      setNotificatation("");
    }
  }, [notification]);

  const handleSignInClick = async () => {
    try {
      await updater();
      setNotificatation("table has been updated");
    } catch (error) {
      console.error(error);
      setNotificatation("Failed to update the table");
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
        <Button onClick={handleSignInClick}>Sign in</Button>
      </div>
    </div>
  );
}

export default Data;
