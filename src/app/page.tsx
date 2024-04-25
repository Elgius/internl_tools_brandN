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
      <div className="mt-5">
        <nav>
          <Navbar />
        </nav>
        <div className="mt-40">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1>Internal tools hub (BETA)</h1>
            <Link href={scheduler}>
              <Button>Schedules</Button>
            </Link>
            <Link href={upload}>
              <Button>Uploads of the day</Button>
            </Link>
            <Link href={main}>
              <Button>Main website</Button>
            </Link>

            <>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>History</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      This funtionaliy is not ready!
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This functionality is not ready for use right now, please
                      wait till we done 🥺
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Go Back</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
