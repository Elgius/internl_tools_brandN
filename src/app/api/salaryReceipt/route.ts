import { supabaseClient } from "@/db/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("API calls being logged");

  if (typeof supabaseClient !== "undefined") {
    const { data: Salary, error } = await supabaseClient
      .from("may")
      .select("*");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ Salary }, { status: 200 });
  } else {
    console.error(
      "Client initialization error, API routes shutting down, call tech support"
    );
    return NextResponse.json(
      { error: "Error deteceted, call support" },
      { status: 500 }
    );
  }
}
