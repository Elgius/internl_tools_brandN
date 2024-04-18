"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Page = () => {
  const [scheduleData, setScheduleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/schedule");
      const data = await response.json();
      setScheduleData(data.Scheduler);
      setLoading(false);
    };

    fetchData();
  }, []);

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
      <div>
        <Table>
          <TableCaption className="mt-20">
            The schedule is tentative
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Sunday</TableHead>
              <TableHead>Monday</TableHead>
              <TableHead>Tuesday</TableHead>
              <TableHead>Wednesday</TableHead>
              <TableHead>Thursday</TableHead>
              <TableHead>Saturday</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scheduleData &&
              scheduleData.map((scheduler) => (
                <TableRow key={scheduler.Id}>
                  <TableCell className="font-medium">{scheduler.Id}</TableCell>
                  <TableCell>{scheduler.Client}</TableCell>
                  <TableCell>{scheduler.Sunday ? "Yes" : "No"}</TableCell>
                  <TableCell>{scheduler.Monday ? "Yes" : "No"}</TableCell>
                  <TableCell>{scheduler.Tuesday ? "Yes" : "No"}</TableCell>
                  <TableCell>{scheduler.Wednesday ? "Yes" : "No"}</TableCell>
                  <TableCell>{scheduler.Thursday ? "Yes" : "No"}</TableCell>
                  <TableCell>{scheduler.Saturday ? "Yes" : "No"}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Page;
