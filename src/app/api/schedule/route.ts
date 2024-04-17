import { NextResponse } from "next/server";
import { supabaseClient } from "@/db/supabaseClient";

export async function GET() {
  console.log("API calls being logged");

  if (typeof supabaseClient !== "undefined") {
    const { data: Scheduler, error } = await supabaseClient
      .from("Scheduler")
      .select("*");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ Scheduler }, { status: 200 });
  } else {
    console.error("Client initialization error, API route shutting down");
    return NextResponse.json(
      { error: "error detected, contact support" },
      { status: 500 }
    );
  }
}
