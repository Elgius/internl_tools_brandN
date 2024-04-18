"use client";
import React from "react";
import { useEffect, useState } from "react";
// Later use
// import { Button } from "@/components/ui/button";

interface Scheduler {
  Id: number;
  Client: string;
  Sunday: boolean;
  Monday: boolean;
  Tuesday: boolean;
  Wednesday: boolean;
  Thursday: boolean;
  Saturday: boolean;
}

const Page = () => {
  const [schedule, setScheduleData] = useState<Scheduler[] | null>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/schedule");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setScheduleData(data.Scheduler);
        console.log(data.Scheduler);
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };
    fetchData();
  }, []);

  //   Date api
  const getToday = () => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let d = new Date();
    let day = weekday[d.getDay()];

    console.log(`This is the day ${day}`);

    return weekday[d.getDay()];
  };

  const filterSchedule = schedule
    ? schedule.filter(
        (scheduler) => scheduler[getToday() as keyof Scheduler] === true
      )
    : [];

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center mt-20">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="text-center">
        <h1> {getToday()}</h1>
      </div>

      <div className="flex justify-center items-center mt-20">
        <div className="container">
          <div className="text-center">
            <h1>Uploads of the day</h1>
          </div>
          <div className="mt-10 p-5 flex-grow">
            <p className="text-center">
              {filterSchedule.map((scheduler) => (
                <div key={scheduler.Id}>
                  <li>{scheduler.Client}</li>
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
