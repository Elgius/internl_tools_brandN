"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabaseClient } from "@/db/supabaseClient";

function Page() {
  const [userName, setUserName] = useState("");
  const [lastUpdateTime, setLastUpdateTime] = useState(null);

  useEffect(() => {
    const fetchLastUpdateTime = async () => {
      const { data, error } = await supabaseClient
        .from("trial")
        .select("last_update_time")
        .eq("name", userName)
        .maybeSingle();

      if (error) {
        console.error("Error fetching last update time: ", error.message);
        return;
      }
      setLastUpdateTime(data?.last_update_time || null);
    };
    fetchLastUpdateTime();
  }, [userName]);

  const date = new Date();
  let timestamp = date.toISOString();
  console.log(timestamp);

  const updateTimeStamp = async (buttonName) => {
    const currentTime = new Date();
    const midnight = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate()
    );

    if (
      !lastUpdateTime ||
      currentTime.getTime() >
        new Date(lastUpdateTime).getTime() + 24 * 60 * 60 * 1000 ||
      currentTime.getHours() >= 23
    ) {
      try {
        const { data, error } = await supabaseClient.from("trial").upsert(
          {
            name: userName,
            [buttonName]: new Date().toISOString(),
            last_update_time: new Date().toISOString(),
          },
          { returning: "minimal" }
        );

        if (error) throw error;

        console.log("Update successful:", data);
      } catch (error) {
        console.error("Error updating timestamp:", error.message);
      }
    } else {
      console.log("Cannot update until tomorrow or after 11:59 PM today.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center overflow-hidden min-h-screen flex-col">
        <main className="container text-center space-y-5">
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <p>Current time: {timestamp}</p>
          </div>
          <div>
            <Button onClick={() => updateTimeStamp("sign_in")}>Sign in</Button>
          </div>
          <div>
            <Button onClick={() => updateTimeStamp("lunch_In")}>
              Lunch in
            </Button>
          </div>
          <div>
            <Button onClick={() => updateTimeStamp("lunch_out")}>
              Lunch out
            </Button>
          </div>
          <div>
            <Button onClick={() => updateTimeStamp("sign_out")}>
              Sign out{" "}
            </Button>
          </div>
          <div>
            <Button>Receipt </Button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Page;
