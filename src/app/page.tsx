import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Link from "next/link";

// remove this once all functionalities are working
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Home() {
  let scheduler = "/scheduler";
  let upload = "/upload";
  let main = "https://brand-n-main-site.vercel.app/";
  return (
    <>
      <div className="mt-5 bg-gradient-to-b from-black to-gray-600 min-h-screen">
        <nav className="rounded-b shadow-inner">
          <Navbar />
        </nav>
        <div className="mt-40">
          <div className="flex flex-col place-items-center gap-4">
            <h1 className="text-white">Internal tools hub (BETA)</h1>
            <div className="grid grid-cols-2 justify-center items-center gap-4">
              <Link href={scheduler}>
                <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white">
                  Schedules
                </Button>
              </Link>
              <Link href={upload}>
                <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white">
                  Uploads of the day
                </Button>
              </Link>
              <Link href={main}>
                <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white">
                  Main website
                </Button>
              </Link>

              <>
                <Link href="/attendance">
                  <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white">
                    Attendance
                  </Button>
                </Link>
              </>
              <>
                <Link href="/salary">
                  <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white">
                    Salary
                  </Button>
                </Link>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
