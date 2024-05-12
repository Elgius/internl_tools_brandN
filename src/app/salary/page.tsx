"use client";
// import { supabaseClient } from "@/db/supabaseClient";
import { useEffect, useState } from "react";
import "./hamster.modules.css";

export default function Salary() {
  const [setLoading, setIsLoading] = useState(true);
  const [listing, setListing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch exectuted");
      const response = await fetch("./api/salaryReceipt");
      const data = await response.json();
      console.log(`this is the data: ${JSON.stringify(data, null, 2)}`);
      setIsLoading(false);
      setListing(data.response);
    };
    fetchData();
  }, []);

  if (setLoading) {
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
    <>
      <div>
        <div className="text-center">
          <h1>Hello world</h1>
        </div>
      </div>
    </>
  );
}
