"use client";

import { useEffect, useState } from "react";
import "./hamster.modules.css";
import { supabaseClient } from "@/db/supabaseClient";

const currentDate = new Date().toISOString().split("T")[0];

function Data({ params }: { params: { name: string } }) {
  // loader run to allow the site to check with the main server if todays date has been registered
  const [isLoading, setIsLoading] = useState(false);

  // code to check if todays date has been added to the db or not. if no, then the data is updated
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: record, error } = await supabaseClient
          .from("Sample")
          .select("*")
          .eq("date", currentDate);

        if (error) {
          console.error("Error fetching record: ", error);
          return;
        }

        if (!record || record.length === 0) {
          const { error: insertError } = await supabaseClient
            .from("Sample")
            .insert([{ date: currentDate }])
            .single();

          if (insertError) {
            console.error("Error inserting the record", insertError);
            return;
          }

          console.log('Record inserted and "date" column updated.');
        } else {
          console.log("Record already exists.");
        }
      } catch (error) {
        console.error("An unexpected error occurred:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
      <h1>Hello this {params.name} </h1>
    </div>
  );
}

export default Data;
