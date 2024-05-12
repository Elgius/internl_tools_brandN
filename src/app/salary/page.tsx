"use client";
// import { supabaseClient } from "@/db/supabaseClient";
import { useEffect, useState } from "react";
import "./hamster.modules.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface salaryItem {
  id: number;
  dates: string;
  signed_in: boolean | null;
}

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

      console.log(data);
      console.log(typeof data);

      setListing(data.Salary);
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
      <div className="flex item-center justify-center overflow-hidden min-h-screen">
        <div className="flex-col space-y-3">
          <h1>Employee: Elgius</h1>
          <div>
            <Table>
              <TableCaption>Salary calculation</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">id</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Signed in</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listing &&
                  listing.length > 0 &&
                  listing.map((item: salaryItem, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.dates}</TableCell>
                      <TableCell className="text-right">
                        {item.signed_in === true ? <>yes</> : <div>no</div>}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* 
  1 - get the attendance thing out [x]
  2 - Salary calculation algorithm []
  3 - get sign in to work cohesively with this []  
  */
}
